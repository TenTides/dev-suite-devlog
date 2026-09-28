// A tiny adapter so the logic classes written for the design boards run unchanged in React.
// Each board's logic is a class with state, setState, lifecycle hooks and renderVals();
// the generated view renders whatever renderVals() returns.
import { useEffect, useReducer, useRef } from 'react';

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
  }
  setState(next, cb) {
    const patch = typeof next === 'function' ? next(this.state, this.props) : next;
    this.state = Object.assign({}, this.state, patch);
    if (this._force && this._alive) this._force();
    if (cb) cb();
  }
}

const reduced = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useDC(Cls, props) {
  const [, force] = useReducer((x) => x + 1, 0);
  const ref = useRef(null);
  if (!ref.current) {
    const inst = new Cls(props || {});
    inst._force = force;
    ref.current = inst;
  }
  const inst = ref.current;
  inst.props = Object.assign({}, inst.props, props);
  useEffect(() => {
    inst._alive = true;
    // With reduced motion, the animated fields render one still frame and stop.
    if (reduced()) {
      const si = window.setInterval;
      window.setInterval = (fn, ms, ...a) => si(fn, Math.max(ms, 60000), ...a);
      if (inst.componentDidMount) inst.componentDidMount();
      window.setInterval = si;
    } else if (inst.componentDidMount) inst.componentDidMount();
    return () => {
      inst._alive = false;
      if (inst.componentWillUnmount) inst.componentWillUnmount();
    };
  }, []);
  return inst.renderVals();
}
