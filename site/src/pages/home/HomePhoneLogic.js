import { DCLogic } from '../../dc/runtime.js';

// Logic ported verbatim from the design board Mobile.dc.html.
export const defaults = {};

export default class Component extends DCLogic {
  constructor(props) { super(props); this.state = { t: 0, idx: 0, start: 0, menu: false, mode: 'waitlist', sent: false }; }
  // Site edit: the carousel and archive list the published posts instead of five placeholders.
  count() { return Math.max(1, (this.props.articles || []).length); }
  componentDidMount() {
    this.startBg();
    this.iv = setInterval(() => {
      const s = this.state, t = s.t + 1;
      if (t - s.start >= 75) this.setState({ t: t, idx: (s.idx + 1) % this.count(), start: t });
      else this.setState({ t: t });
    }, 80);
  }
  componentWillUnmount() { clearInterval(this.iv); this.stopBg(); }
  field() {
    const W = this.cols(), H = 42, T = this.state.t * 0.09;
    const dim = [], mid = [], hi = [];
    for (let y = 0; y < H; y++) {
      let a = '', b = '', c = '';
      const yn = y / H;
      for (let x = 0; x < W; x++) {
        const w1 = 0.78 + 0.08 * Math.sin(x * 0.11 + T) + 0.03 * Math.sin(x * 0.04 - T * 0.7);
        const w2 = 0.9 + 0.04 * Math.sin(x * 0.17 - T * 1.25 + 1.7);
        const d1 = yn - w1, d2 = yn - w2;
        const v = Math.exp(-d1 * d1 * 320) + 0.75 * Math.exp(-d2 * d2 * 420);
        const h = Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
        let ca = ' ', cb = ' ', cc = ' ';
        if (v > 0.86) cc = '#%@'[Math.floor(h * 3)];
        else if (v > 0.5) cb = '-=+*'[Math.floor(h * 4)];
        else if (v > 0.16) ca = '.·:'[Math.floor(h * 3)];
        else if (h < 0.025) ca = '.';
        a += ca; b += cb; c += cc;
      }
      dim.push(a); mid.push(b); hi.push(c);
    }
    return { dim, mid, hi };
  }
  // Site edit: fields span the viewport (11px mono is 6.6px a column); 60 columns on a 390px phone.
  cols() { return Math.max(60, Math.ceil((this.props.width || 390) / 6.6) + 1); }
  bgCfg() { return [{ key: 'fFeat', kind: 'plasma', W: this.cols(), R: 40 }, { key: 'fFollow', kind: 'ripple', W: this.cols(), R: 46 }]; }
  startBg() {
    this.fT = 0;
    if (false) this.bgIv = setInterval(() => { this.fT += 1; this.setState({ fTick: this.fT }); }, 70);
  }
  stopBg() { if (this.bgIv) clearInterval(this.bgIv); }
  fieldGen(kind, W, R, T) {
    const dim = [], mid = [], hi = [];
    const A = W >= 100 ? 0.45 : 0.47;
    for (let y = 0; y < R; y++) {
      let a = '', b = '', c = '';
      for (let x = 0; x < W; x++) {
        const X = x * A;
        let u = 0;
        if (kind === 'plasma') {
          const dx = X - W * A * 0.72, dy = y - R * 0.45;
          u = (Math.sin(X * 0.09 + T) + Math.sin(y * 0.16 - T * 0.8) + Math.sin((X + y) * 0.06 + T * 0.6) + Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.2 - T * 1.4) + 4) / 8;
          u = Math.pow(u, 3.6) * 2.6;
        } else if (kind === 'ripple') {
          const dx = (x - W * 0.74) * A, dy = y - R * 0.5, r = Math.sqrt(dx * dx + dy * dy);
          const dx2 = (x - W * 0.16) * A, dy2 = y - R * 0.82, r2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          u = (0.5 + 0.5 * Math.sin(r * 0.5 - T * 2.2)) * Math.exp(-r / (W >= 100 ? 30 : 14)) * 1.15
            + (0.5 + 0.5 * Math.sin(r2 * 0.5 - T * 1.8)) * Math.exp(-r2 / (W >= 100 ? 20 : 10)) * 0.85;
        } else if (kind === 'dunes') {
          for (let k = 0; k < 6; k++) {
            const yy = R * (0.12 + 0.15 * k) + 3 * Math.sin(X * (0.05 + 0.012 * k) + T * (0.8 + 0.15 * k) + k * 1.7) + 1.5 * Math.sin(X * 0.13 - T * 1.1 + k);
            const d = y - yy;
            u += Math.exp(-d * d / 2.4) * (0.5 + 0.08 * k);
          }
        } else if (kind === 'swirl') {
          const dx = (x - W * 0.8) * A, dy = y - R * 0.5, r = Math.sqrt(dx * dx + dy * dy);
          u = (0.5 + 0.5 * Math.sin(Math.atan2(dy, dx) * 3 + r * 0.24 - T * 1.6)) * Math.exp(-r / 34) * 1.7;
        } else if (kind === 'streams') {
          for (let k = 0; k < 4; k++) {
            const xx = 2.5 + k * 5.5 + 1.6 * Math.sin(y * 0.09 - T * 1.6 + k * 1.3);
            const d = x - xx;
            u += Math.exp(-d * d / 1.4) * 0.8;
          }
        }
        const h = Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
        u *= 0.85;
        if (u < 0.14) { a += ' '; b += ' '; c += ' '; }
        else if (u < 0.42) { a += '.·:'[Math.floor(h * 3)]; b += ' '; c += ' '; }
        else if (u < 0.72) { a += ' '; b += '-=+*'[Math.floor(h * 4)]; c += ' '; }
        else { a += ' '; b += ' '; c += '#%@'[Math.floor(h * 3)]; }
      }
      dim.push(a); mid.push(b); hi.push(c);
    }
    return { dim: dim, mid: mid, hi: hi };
  }
  bgVals() {
    const tick = this.state.t || 0;
    if (this._fKey !== tick + ':' + this.cols()) {
      const T = tick * 0.11, out = {};
      this.bgCfg().forEach((f) => { out[f.key] = this.fieldGen(f.kind, f.W, f.R, T); });
      this._fields = out; this._fKey = tick + ':' + this.cols();
    }
    return this._fields;
  }
  renderVals() {
    const s = this.state, f = this.field();
    const bgs = [
      ['repeating-linear-gradient(90deg, #22221f 0 1px, transparent 1px 22px), repeating-linear-gradient(0deg, #22221f 0 1px, transparent 1px 22px)', 'auto'],
      ['repeating-radial-gradient(circle at 72% 58%, #1b3a2c 0 1px, transparent 1px 18px)', 'auto'],
      ['repeating-linear-gradient(135deg, #262522 0 1px, transparent 1px 12px)', 'auto'],
      ['radial-gradient(#3a3935 1.2px, transparent 1.3px)', '14px 14px'],
      ['repeating-linear-gradient(0deg, #1f2b25 0 2px, transparent 2px 8px)', 'auto']
    ];
    const articles = (this.props.articles || []).map((p, i) => ({ n: p.number, title: p.title, meta: p.date + ' · ' + p.readTime.replace(' READ', ''), href: p.href, bg: bgs[i % 5][0], size: bgs[i % 5][1], op: i === s.idx ? 1 : 0.4 }));
    const prog = Math.min(1, (s.t - s.start) / 75);
    const wl = s.mode === 'waitlist';
    const on = { bg: '#1fbf7f', fg: '#06120c' }, off = { bg: 'transparent', fg: '#9a978f' };
    return {
      ...this.bgVals(),
      dim: f.dim, mid: f.mid, hi: f.hi,
      menuOpen: s.menu, menuIcon: s.menu ? '✕' : '☰', menuLabel: s.menu ? 'Close menu' : 'Open menu',
      toggleMenu: () => this.setState({ menu: !this.state.menu }),
      articles: articles, offset: s.idx * 334, slideNum: '0' + (s.idx + 1), count: String(this.count()).padStart(2, '0'),
      segs: articles.map((_, i) => ({ w: i < s.idx ? '100%' : i === s.idx ? Math.round(prog * 100) + '%' : '0%' })),
      prev: () => this.setState({ idx: (s.idx + this.count() - 1) % this.count(), start: s.t }),
      next: () => this.setState({ idx: (s.idx + 1) % this.count(), start: s.t }),
      tabA: wl ? on : off, tabB: wl ? off : on,
      pickWaitlist: () => this.setState({ mode: 'waitlist', sent: false }),
      pickArticles: () => this.setState({ mode: 'articles', sent: false }),
      fine: wl ? 'Email only, used to tell you when the beta opens. Unsubscribe any time.' : 'One email per article. Unsubscribe any time.',
      cta: wl ? 'Join the waitlist' : 'Subscribe',
      notSent: !s.sent, sent: s.sent,
      doneText: wl ? 'You are on the list.' : 'Subscribed.',
      submit: (e) => { e.preventDefault(); this.setState({ sent: true }); }
    };
  }
}
