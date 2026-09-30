import { DCLogic } from '../../dc/runtime.js';

// Logic ported verbatim from the design board Main.dc.html.
export const defaults = {};

export default class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { t: 0, idx: 0, start: 0, paused: false, mx: -99, my: -99, dg: 0, sel: 0, tour: false, mode: 'waitlist', sent: false };
  }
  // Site edit: the carousel and archive list the published posts instead of five placeholders.
  count() { return Math.max(1, (this.props.articles || []).length); }
  componentDidMount() {
    this.startBg();
    this.iv = setInterval(() => {
      const s = this.state;
      const t = s.t + 1;
      const up = { t: t };
      if (!s.paused && t - s.start >= 75) { up.idx = (s.idx + 1) % this.count(); up.start = t; }
      if (s.tour && t % 40 === 0) { up.sel = (s.sel + 1) % this.diagrams()[s.dg].nodes.length; }
      this.setState(up);
    }, 80);
  }
  // Site edit: fields span the whole viewport. `cols` is the viewport width in 12px mono
  // columns; O shifts the fixed 200-column composition so it stays centred on the page.
  cols() { return Math.max(200, Math.ceil((this.props.width || 1440) / 7.2) + 1); }
  componentWillUnmount() { clearInterval(this.iv); this.stopBg(); }
  field() {
    const W = this.cols(), H = 47, ramp1 = ' .·:', ramp2 = '-=+*', ramp3 = '#%@';
    const T = this.state.t * 0.09, mx = this.state.mx, my = this.state.my;
    const dim = [], mid = [], hi = [];
    for (let y = 0; y < H; y++) {
      let a = '', b = '', c = '';
      const yn = y / H;
      for (let x = 0; x < W; x++) {
        const w1 = 0.66 + 0.13 * Math.sin(x * 0.034 + T) + 0.05 * Math.sin(x * 0.012 - T * 0.7);
        const w2 = 0.8 + 0.07 * Math.sin(x * 0.052 - T * 1.25 + 1.7);
        const w3 = 0.52 + 0.1 * Math.sin(x * 0.021 + T * 0.55 + 3.1);
        const d1 = yn - w1, d2 = yn - w2, d3 = yn - w3;
        let v = Math.exp(-d1 * d1 * 320) + 0.75 * Math.exp(-d2 * d2 * 420) + 0.45 * Math.exp(-d3 * d3 * 420);
        const dx = (x - mx) * 0.55, dy = (y - my);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 18) v += 0.7 * (1 - dist / 18) * (0.5 + 0.5 * Math.sin(dist * 0.9 - T * 5));
        v *= 0.3 + 0.7 * Math.min(1, x / (W * 0.5));
        const h = Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
        let ca = ' ', cb = ' ', cc = ' ';
        if (v > 0.86) cc = ramp3[Math.floor(h * 3)];
        else if (v > 0.5) cb = ramp2[Math.floor(h * 4)];
        else if (v > 0.16) ca = ramp1[1 + Math.floor(h * 3)];
        else if (h < 0.025) ca = '.';
        a += ca; b += cb; c += cc;
      }
      dim.push(a); mid.push(b); hi.push(c);
    }
    return { dim, mid, hi };
  }
  diagrams() {
    // node: [id, tag, label, x, y, w, description] · edge: [from, to, verb, route ('h' | 'v' | ''), planned, land]
    // land (optional) moves where the line meets its target, in px along that edge, so two lines into one side don't share an arrowhead.
    const fanIn = (froms, to, verb, route) => froms.map((f) => [f, to, verb, route || '']);
    return [
      { title: 'THE PATH', hint: 'PLAN TO MERGE, ONE FEATURE', frames: [], nodes: [
        ['plan', 'SKILL', 'Written plan', 40, 110, 160, "Every feature starts as a written plan, not a prompt: what changes, why, and how you'll know it worked."],
        ['attack', 'SKILL', 'Cross-validated', 250, 110, 160, 'Independent AI reviewers try to break the plan before any code exists, checking every claim against the real code. A plan that fails goes back to be rewritten.'],
        ['split', 'PLAN', 'Split into slices', 460, 110, 160, 'The conductor cuts the approved plan into slices, each scoped to its own part of the code, so agents working in parallel never collide.'],
        ['green', 'YOU', 'Green-lit', 670, 110, 160, 'You see what each slice may touch, sign off on anything risky, and release the deploy.'],
        ['build', 'SANDBOX', 'Built', 670, 370, 160, "Each agent builds its slice in its own copy of the code, inside its workspace's sandbox, with only the permissions its slice needs."],
        ['watch', 'LIVE', 'Watched live', 460, 370, 160, 'A live view shows what every agent is doing, what it touched and how it ended. You can step in at any time.'],
        ['check', 'CHECK', 'Checked', 250, 370, 160, "A reviewer who didn't write the code gives it an adversarial review, and linting, type checks and the full back-end test suite at 100% coverage must pass. Where it matters, a live drill proves it on the real system and the result is measured, not assumed. Anything that fails goes back to its agent."],
        ['done', 'DONE', 'Merged', 40, 370, 160, 'It merges once every check passes. Whatever went wrong along the way is written into gitmem for next time.'],
        ['memory', 'MEMORY', 'Memory and knowledge', 355, 240, 170, 'Checked before the plan is written and before each agent starts: past lessons in gitmem, a map of the code, and a knowledge graph of the work in flight.'],
        ['library', 'CATALOG', 'Library', 560, 240, 130, 'Every agent is assembled from the shared library: its persona, skills, MCP servers and sandbox setup.']
      ], edges: [['plan', 'attack', 'reviewed by', ''], ['attack', 'split', 'approved', ''], ['split', 'green', 'proposed', ''], ['green', 'build', 'releases', ''], ['build', 'watch', 'reports to', ''], ['watch', 'check', 'hands over', ''], ['check', 'done', 'confirms', ''], ['memory', 'plan', 'informs', 'v'], ['done', 'memory', 'writes lessons to', 'v'], ['library', 'build', 'equips', 'v']] },
      { title: 'THE SYSTEM', hint: 'WHO DOES WHAT, ACROSS WORKSPACES',
        frames: [
          { x: 462, y: 30, w: 160, h: 236, label: 'WORKSPACE A · OWN SANDBOX' },
          { x: 462, y: 300, w: 160, h: 236, label: 'WORKSPACE B · SAME TIME' }
        ], nodes: [
        ['you', 'YOU', 'You', 16, 40, 128, 'Set the guardrails for each deploy, green-light it, and step in at any time.'],
        ['app', 'APP', 'Dev Suite application', 16, 248, 128, 'One application window for every workspace. Plan, stage, approve and watch several projects at once, each in its own sandbox, all under the same governance.'],
        ['live', 'LIVE', 'Live view', 16, 436, 128, "Started by the server. It tracks every running agent (what it's doing, what it touched, how it ended) and streams that into the application."],
        ['memory', 'MEMORY', 'Memory and knowledge', 164, 40, 128, 'Past lessons in gitmem, a navigation map of the code, and a knowledge graph of the work in flight. The conductor checks it before planning, and every agent checks it before starting.'],
        ['server', 'SERVER', 'Dev Suite server', 164, 248, 128, "The engine behind the application. It keeps every workspace's state, starts the live view, and turns an approved deploy into running agents."],
        ['library', 'CATALOG', 'Library', 164, 436, 128, 'One shared catalog of skills, personas, MCP servers and sandbox setups, used by every workspace.'],
        ['conductor', 'CONDUCTOR', 'Conductor agents', 312, 40, 128, 'The orchestrating agents. A conductor turns an approved plan into slices, stages them for your green light, then merges the finished work back and cleans up. A conductor living inside each workspace is next.'],
        ['check', 'GUARDRAIL', 'Permission check', 312, 248, 128, 'Every slice declares what it may touch. Anything risky waits for your sign-off before it starts.'],
        ['a1', 'AGENT', 'Build agent', 478, 56, 128, 'Builds one slice in its own copy of the code and opens one pull request.'],
        ['a2', 'AGENT', 'QA agent', 478, 176, 128, 'Tests the work in the same sandbox, isolated the same way, with its own permissions.'],
        ['b1', 'AGENT', 'Build agent', 478, 326, 128, 'A second project, running at the same time. Each workspace gets its own sandbox and its own guardrails.'],
        ['b2', 'AGENT', 'Build agent', 478, 446, 128, "Agents never share a copy of the code or talk to each other, so parallel work doesn't collide."],
        ['prs', 'OUTPUT', 'Pull requests', 700, 248, 150, "Finished work lands as pull requests on each project's branch. Nothing merges until the checks pass."]
      ], edges: [['you', 'app', 'works in', 'v'], ['memory', 'app', 'shown in', ''], ['memory', 'conductor', 'checked before planning', 'h'], ['app', 'server', 'green-lights', 'h'], ['library', 'server', 'supplies', 'v'], ['library', 'conductor', 'supplies personas to', 'h', false, 18], ['server', 'live', 'starts', ''], ['live', 'app', 'streams into', 'v'], ['conductor', 'check', 'stages slices', 'v'], ['server', 'check', 'launches through', 'h'], ['check', 'a1', 'releases', 'h'], ['check', 'a2', 'releases', 'h'], ['check', 'b1', 'releases', 'h'], ['check', 'b2', 'releases', 'h']]
        .concat(fanIn(['a1', 'a2', 'b1', 'b2'], 'prs', 'opens', 'h')) },
      { title: 'INSIDE THE SANDBOX', hint: 'WHAT ONE AGENT GETS', frames: [], nodes: [
        ['engine', 'ENGINE', 'Engine', 20, 60, 180, 'What actually runs the agent, and it can be swapped. The default engine runs build agents today, and a second engine, OpenCode, already runs interactive agents.'],
        ['slice', 'INPUT', 'Its slice', 20, 248, 180, "The one task this agent was given, cut from an approved plan. Anything outside it isn't its job."],
        ['local', 'PLANNED', 'Local models', 20, 436, 180, 'Models you host yourself, in a container next to the agents: no per-token bill, same guardrails. Next.'],
        ['persona', 'SETUP', 'Persona', 230, 60, 180, "The agent's role and setup: what kind of agent it is, which model it uses, and how much it may decide on its own."],
        ['agent', 'AGENT', 'Coding agent', 230, 248, 180, "The agent doing the work, running unattended inside its workspace's sandbox."],
        ['mcp', 'TOOLS', 'MCP servers', 230, 436, 180, 'The outside tools it may call, only the ones its persona declares, such as gitmem for past lessons, code navigation and the knowledge graph.'],
        ['perms', 'GUARDRAIL', 'Permissions', 450, 60, 180, "What it's allowed to do, such as network access or installing packages. Anything not granted is refused, and risky grants were signed off before launch."],
        ['copy', 'CODE', 'Its own copy of the code', 450, 248, 180, "A private working copy of the project. Its changes stay there until they're reviewed, and its slice keeps it off other agents' files."],
        ['exit', 'NETWORK', 'One approved way out', 450, 436, 180, 'The only route to the internet, and only to allowed sites. Everything else is blocked by default.'],
        ['tool', 'BUILT', 'Tool-level limits', 670, 40, 180, "Built. The agent's own tools refuse any action its slice wasn't granted."],
        ['os', 'PLANNED', 'OS-level wall', 670, 130, 180, "Planned. A harder boundary beneath the tools, so even a program the agent starts can't step outside."],
        ['out', 'OUTPUT', 'One result', 670, 248, 180, 'A build agent finishes with one pull request; a review agent finishes with a written report.'],
        ['flow', 'PLANNED', 'Data-flow guard', 670, 436, 180, "Planned. Permissions decide which actions an agent may take, but not what data it carries while taking them. A data-flow guard would make a deterministic check before every tool call: is this data allowed to go to this destination? That stops private data leaking through an action that was itself allowed, the combination of private data, untrusted content and a way out that makes agents dangerous."]
      ], edges: [['flow', 'exit', 'would guard', 'h', true],['engine', 'agent', 'runs', 'v'], ['local', 'agent', 'can run it (next)', 'v', true], ['slice', 'agent', 'given', ''], ['persona', 'agent', 'configures', ''], ['mcp', 'agent', 'attached to', ''], ['perms', 'agent', 'limits', 'h'], ['perms', 'tool', 'enforced by', 'h'], ['perms', 'os', 'planned', 'h', true], ['agent', 'copy', 'works in', ''], ['copy', 'out', 'ends in', ''], ['agent', 'exit', 'reaches out only through', 'h']] },
      { title: 'THE LIBRARY', hint: 'WHAT A DEPLOY IS BUILT FROM', frames: [], nodes: [
        ['lib', 'CATALOG', 'Library', 355, 248, 170, "One shared catalog across every workspace. It can index any workspace and bring that project's know-how into the catalog. Everything a deploy uses is picked from here."],
        ['skills', 'KNOW-HOW', 'Skills', 60, 70, 170, 'Written procedures agents follow: planning, cross-validation, code review, QA, conventions and wrap-up.'],
        ['creator', 'AUTHOR', 'Agent creator', 650, 70, 170, 'Author, configure and deploy personas.'],
        ['configs', 'PERSONAS', 'Agent configurations', 60, 248, 170, 'Saved personas: batch workers, chat agents, reviewers.'],
        ['setups', 'SETUP', 'Sandbox setups', 650, 248, 170, 'The ready-made environments agents start in.'],
        ['mcps', 'TOOLS', 'MCP servers', 60, 426, 170, 'Tool servers a persona may declare, such as gitmem, which every workspace shares.'],
        ['spaces', 'SCOPE', 'Workspaces', 650, 426, 170, 'Each project Dev Suite manages, with its own branch and sandbox.']
      ], edges: [['skills', 'lib', 'feeds', ''], ['configs', 'lib', 'feeds', ''], ['mcps', 'lib', 'feeds', ''], ['creator', 'lib', 'feeds', ''], ['setups', 'lib', 'feeds', ''], ['spaces', 'lib', 'feeds', '']] },
      { title: 'MEMORY BEFORE WORK', hint: 'WHAT AN AGENT CHECKS BEFORE IT STARTS', frames: [], nodes: [
        ['task', 'INPUT', 'New task', 20, 248, 170, 'An agent is handed a slice to build. Before it touches anything, it checks memory.'],
        ['lessons', 'MEMORY', 'Past lessons', 250, 60, 170, 'Mistakes and near-misses from earlier work, each written down once in gitmem.'],
        ['codemap', 'MEMORY', 'Code navigation', 250, 248, 170, 'A map of the codebase, so the agent finds what it needs without reading everything. In a measured test it cut token use by about 40%.'],
        ['graph', 'MEMORY', 'Knowledge graph', 250, 436, 170, 'A shared graph of the work in flight, so the agent knows what else is changing around it.'],
        ['answer', 'ANSWER', 'Lessons answered', 480, 60, 170, "For every lesson that applies, the agent must say: applying it, not applicable, or knowingly overriding it, and the answer is recorded in gitmem. It can't skip one silently."],
        ['work', 'WORK', 'Work starts', 690, 248, 170, 'Only now does the agent start building, with the lessons answered and the map in hand.'],
        ['later', 'LESSON', 'Written down', 690, 436, 170, "If something goes wrong, it's written into gitmem once and becomes a lesson for the next task."]
      ], edges: [['task', 'lessons', 'checks', 'v'], ['task', 'codemap', 'checks', 'h'], ['task', 'graph', 'checks', 'v'], ['lessons', 'answer', 'must answer', 'h'], ['answer', 'work', 'then', 'v'], ['codemap', 'work', 'guides', 'h'], ['graph', 'work', 'informs', 'h'], ['work', 'later', 'afterwards', 'v']] }
    ];
  }
  edgePath(a, b, route, land) {
    const H = 64;
    const ax = a[3] + a[5] / 2, ay = a[4] + H / 2;
    const horizLand = route === 'h' || (route !== 'v' && Math.abs(b[3] + b[5] / 2 - ax) >= Math.abs(b[4] + H / 2 - ay) * 0.9);
    const bx = b[3] + b[5] / 2 + (horizLand ? 0 : land || 0), by = b[4] + H / 2 + (horizLand ? land || 0 : 0);
    const dx = bx - ax, dy = by - ay;
    const horiz = route === 'h' ? true : route === 'v' ? false : Math.abs(dx) >= Math.abs(dy) * 0.9;
    if (horiz) {
      const sx = dx > 0 ? a[3] + a[5] : a[3], ex = dx > 0 ? b[3] : b[3] + b[5];
      const mx = (sx + ex) / 2;
      return 'M' + sx + ' ' + ay + ' C' + mx + ' ' + ay + ' ' + mx + ' ' + by + ' ' + ex + ' ' + by;
    }
    const sy = dy > 0 ? a[4] + H : a[4], ey = dy > 0 ? b[4] : b[4] + H;
    const my = (sy + ey) / 2;
    return 'M' + ax + ' ' + sy + ' C' + ax + ' ' + my + ' ' + bx + ' ' + my + ' ' + bx + ' ' + ey;
  }
  bgField() {
    const W = this.cols(), H = 76, T = this.state.t * 0.06, rows = [], O = Math.round((W - 200) / 2);
    for (let y = 0; y < H; y++) {
      let row = '';
      for (let x = 0; x < W; x++) {
        const x2 = (x - O) * 0.5;
        const r1 = Math.sqrt((x2 - 92) * (x2 - 92) + (y - 4) * (y - 4));
        const r2 = Math.sqrt((x2 - 4) * (x2 - 4) + (y - 72) * (y - 72));
        const f1 = ((r1 * 0.12 - T) % 1 + 1) % 1;
        const f2 = ((r2 * 0.1 + T * 0.8) % 1 + 1) % 1;
        let ch = ' ';
        if (r1 < 64 && f1 < 0.11) ch = r1 < 30 ? ':' : '·';
        else if (r2 < 56 && f2 < 0.11) ch = r2 < 26 ? ':' : '·';
        else if (((x - O) % 25 + 25) % 25 === 12 && y % 12 === 6) ch = '+';
        row += ch;
      }
      rows.push(row);
    }
    return rows;
  }
  archVals() {
    const s = this.state, D = this.diagrams(), dg = D[Math.min(s.dg, D.length - 1)], N = dg.nodes;
    const sel = Math.min(s.sel, N.length - 1), sid = N[sel][0];
    const byId = {};
    N.forEach((n, i) => { byId[n[0]] = i; });
    const FAINT = '#6f6c66', GREEN = '#1fbf7f', AMBER = '#e0a54a', MUTED = '#9a978f';
    const edges = dg.edges.map((e, i) => {
      const a = N[byId[e[0]]], b = N[byId[e[1]]];
      const hot = e[0] === sid || e[1] === sid, planned = !!e[4];
      return {
        d: this.edgePath(a, b, e[3], e[5]),
        stroke: planned ? FAINT : hot ? GREEN : '#34332f',
        dash: planned ? '2 6' : '3 3',
        anim: planned ? 'none' : 'flow 1.1s linear infinite',
        dot: hot ? '#5ff0b4' : FAINT, dotOp: planned ? 0 : 1,
        dur: (2.2 + (i % 3) * 0.5).toFixed(1), delay: ((i * 0.37) % 2).toFixed(2)
      };
    });
    const nodes = N.map((n, i) => {
      const on = i === sel, tag = n[1], planned = tag === 'PLANNED';
      const tagc = tag === 'YOU' ? AMBER : tag === 'SKILL' ? GREEN : planned ? FAINT : on ? GREEN : MUTED;
      return {
        tag: tag, label: n[2], x: n[3], y: n[4], w: n[5], on: on,
        bs: planned ? 'dashed' : 'solid',
        bd: planned ? FAINT : on ? GREEN : '#34332f',
        bg: on && !planned ? '#0f1d17' : '#111110',
        lc: planned ? FAINT : '#ededE8',
        tagc: tagc,
        glow: on && !planned ? '0 0 0 4px rgba(31,191,127,0.12)' : 'none',
        pick: () => this.setState({ sel: i, tour: false })
      };
    });
    const links = [];
    dg.edges.forEach((e) => {
      if (e[0] === sid) links.push({ text: '→ ' + e[2] + ' · ' + N[byId[e[1]]][2], pick: () => this.setState({ sel: byId[e[1]], tour: false }) });
      if (e[1] === sid) links.push({ text: '← ' + N[byId[e[0]]][2], pick: () => this.setState({ sel: byId[e[0]], tour: false }) });
    });
    const st = N[sel][1];
    return {
      bgRows: this.bgField(),
      diagTabs: D.map((d, i) => ({ n: '0' + (i + 1), title: d.title, on: i === s.dg, bg: i === s.dg ? GREEN : 'transparent', fg: i === s.dg ? '#06120c' : MUTED, pick: () => this.setState({ dg: i, sel: 0, tour: false }) })),
      diagTitle: dg.title, diagHint: dg.hint, frames: dg.frames || [],
      edges: edges, nodes: nodes, links: links,
      selTag: st, selTagc: st === 'YOU' ? AMBER : st === 'PLANNED' ? FAINT : GREEN,
      selLabel: N[sel][2], selDesc: N[sel][6],
      selPos: ('0' + (sel + 1)).slice(-2) + ' / ' + ('0' + N.length).slice(-2),
      selPrev: () => this.setState({ sel: (sel + N.length - 1) % N.length, tour: false }),
      selNext: () => this.setState({ sel: (sel + 1) % N.length, tour: false }),
      tour: s.tour, tourBd: s.tour ? GREEN : '#2f2e2b', tourIcon: s.tour ? '❚❚' : '▶', tourLabel: s.tour ? 'TOURING' : 'TOUR',
      toggleTour: () => this.setState({ tour: !this.state.tour })
    };
  }
  bgCfg() { return [{ key: 'fFeat', kind: 'meteors', W: this.cols(), R: 72 }, { key: 'fArch', kind: 'marina', W: this.cols(), R: 84 }, { key: 'fFollow', kind: 'ripple', W: this.cols(), R: 44 }]; }
  startBg() {
    this.fT = 0;
    if (false) this.bgIv = setInterval(() => { this.fT += 1; this.setState({ fTick: this.fT }); }, 70);
  }
  stopBg() { if (this.bgIv) clearInterval(this.bgIv); }
  meteorGen(W, R, T) {
    const G = [], L = [], S = [];
    for (let y = 0; y < R; y++) { G.push(new Array(W).fill(' ')); L.push(new Array(W).fill(0)); S.push(new Array(W).fill(true)); }
    const hh = (a, b) => Math.abs(Math.sin(a * 12.9898 + b * 78.233) * 43758.5453) % 1;
    const inb = (x, y) => x >= 0 && x < W && y >= 0 && y < R;
    const put = (x, y, ch, l) => { if (inb(x, y)) { G[y][x] = ch; L[y][x] = l; } };
    const solid = (x, y) => { if (inb(x, y)) { S[y][x] = false; G[y][x] = ' '; L[y][x] = 0; } };
    const BASE = 22, O = Math.round((W - 200) / 2);
    // stars: dense at the top, faint behind the cards
    for (let y = 0; y < R; y++) {
      const dens = y < BASE ? 0.05 - y * 0.0022 : 0.004;
      for (let x = 0; x < W; x++) {
        const h = hh(x, y);
        if (h < dens) {
          const tw = Math.sin(T * 0.22 + h * 900);
          if (h < dens * 0.2 && tw > 0.8) put(x, y, '+', 2);
          else if (h < dens * 0.12) put(x, y, '*', 2);
          else put(x, y, h < dens * 0.55 ? '·' : '.', 1);
        }
      }
    }
    // mountains across the top, sitting on the carousel
    const ridged = (x) => { let v = 0, a = 1, f = 0.03; for (let o = 0; o < 4; o++) { v += a * (1 - Math.abs(Math.sin(x * f + (o + 1) * 1.9))); a *= 0.5; f *= 2.05; } return v / 1.875; };
    const peak = (x, c, w, hgt) => hgt * Math.exp(-((x - c) * (x - c)) / (2 * w * w));
    const far = [], top = [], near = [];
    for (let x = -1; x <= W + 1; x++) {
      far.push(BASE - 5 - 2.4 * ridged(x * 1.4 + 40) - peak(x - O, 92, 16, 2.5) - peak(x - O, 172, 13, 2.5) - peak(x - O, 14, 10, 1.5));
      top.push(BASE - 0.5 - 1.8 * ridged(x) - peak(x - O, 64, 13, 4.2) - peak(x - O, 116, 10, 7.5) - peak(x - O, 100, 7, 3.5) - peak(x - O, 146, 9, 4.5) - peak(x - O, 30, 12, 2.2) - peak(x - O, 178, 10, 2.8));
      near.push(BASE + 0.2 - 1.2 * (0.5 + 0.5 * Math.sin(x * 0.045 + 1)) - 0.8 * ridged(x * 2.2 + 11));
    }
    const ridgeCh = (l, t, r) => l > t && r > t ? '^' : (r - l) < -0.35 ? '/' : (r - l) > 0.35 ? '\\' : '_';
    for (let x = 0; x < W; x++) {
      const ty = far[x + 1], ry = Math.round(ty);
      if (ry >= Math.round(top[x + 1])) continue;
      for (let y = Math.max(0, ry); y < BASE + 1; y++) solid(x, y);
      const c = ridgeCh(far[x], ty, far[x + 2]);
      put(x, ry, c === '_' ? '.' : c, 1);
      for (let y = ry + 1; y < Math.round(top[x + 1]); y++) { const lit = far[x] - far[x + 2]; if (lit > 0.1 && hh(x, y + 90) < 0.35) put(x, y, '.', 1); }
    }
    const cn = (x, y) => { let v = 0, a = 1, f = 0.09; for (let o = 0; o < 3; o++) { v += a * (1 - Math.abs(Math.sin((x + y * 1.6) * f + o * 2.3) + Math.sin((x - y * 1.3) * f * 0.7 + o))); a *= 0.5; f *= 2; } return v; };
    for (let x = 0; x < W; x++) {
      const ty = top[x + 1], ry = Math.round(ty), l = top[x], r = top[x + 2];
      for (let y = Math.max(0, ry); y < BASE + 1; y++) solid(x, y);
      const face = l - r;
      for (let y = ry; y < BASE + 1; y++) {
        const d = y - ty;
        const g = cn(x + 1, y) - cn(x - 1, y);
        const light = face * 0.9 + g * 0.55 - d * 0.03;
        const snow = Math.exp(-d / 4.2) * (0.75 + 0.25 * hh(x, y + 31));
        const b = snow * (0.45 + light);
        const h = hh(x, y + 13);
        if (y === ry) { put(x, y, ridgeCh(l, ty, r), b > 0.4 ? 3 : 2); continue; }
        if (b > 0.72) put(x, y, h < 0.5 ? '#' : '%', 3);
        else if (b > 0.5) put(x, y, h < 0.5 ? '*' : '=', 3);
        else if (b > 0.32) put(x, y, h < 0.5 ? ':' : '-', 2);
        else if (b > 0.16) put(x, y, h < 0.6 ? '.' : ' ', 1);
      }
    }
    for (let x = 0; x < W; x++) {
      const ty = near[x + 1], ry = Math.round(ty);
      if (ry <= Math.round(top[x + 1])) continue;
      for (let y = ry; y < BASE + 2; y++) solid(x, y);
      put(x, ry, ridgeCh(near[x], ty, near[x + 2]), 1);
    }
    // a detailed, swaying pine
    const pine = (cx, topY, baseY, maxW, amp, ph, lvl) => {
      const H = baseY - topY, fol = H - 2, tiers = Math.max(2, Math.round(fol / (maxW > 3 ? 3.4 : 4.5))), th = fol / tiers;
      for (let y = topY; y <= baseY; y++) {
        const up = Math.pow((baseY - y) / H, 1.5), s = Math.round(amp * up * Math.sin(T * 0.45 + ph) + amp * 0.35 * up * Math.sin(T * 1.2 + ph + y * 0.2));
        const xc = cx + s;
        if (y > baseY - 2) { put(xc, y, '|', 1); put(xc + 1, y, '|', 1); continue; }
        const d = y - topY, k = Math.min(tiers - 1, Math.floor(d / th)), i = d - k * th;
        const w0 = maxW > 3 ? Math.max(1, maxW * (0.35 + 0.65 * k / tiers) - 1.5) : 0.6 * maxW * k / tiers + 0.5, w1 = maxW > 3 ? maxW * (0.45 + 0.55 * (k + 1) / tiers) : maxW * (k + 1) / tiers;
        const w = Math.max(0, Math.round(w0 + (w1 - w0) * (i + 1) / th));
        for (let x = xc - w; x <= xc + w; x++) solid(x, y);
        if (w === 0) { put(xc, y, y === topY ? '*' : '|', lvl); continue; }
        const last = i + 1 >= th - 0.5;
        put(xc - w, y, '/', lvl); put(xc + w, y, '\\', lvl);
        if (last) { put(xc - w + 1, y, '_', lvl); put(xc + w - 1, y, '_', lvl); if (w > 4) { put(xc - w + 2, y, '_', 1); put(xc + w - 2, y, '_', 1); } }
        for (let x = xc - w + 1; x < xc + w; x++) if (!last && hh(x - s, y) < 0.14) put(x, y, hh(y, x - s) < 0.5 ? ',' : '\'', 1);
        if (w > 2 && !last && hh(y, k) < 0.5) { put(xc - w + 1, y, '/', 1); put(xc + w - 1, y, '\\', 1); }
      }
    };
    // overhanging boughs from the top corners
    const bough = (x0, x1, dir, ph) => {
      const s = Math.sin(T * 0.5 + ph);
      for (let x = x0; dir > 0 ? x <= x1 : x >= x1; x += dir) {
        const t = Math.abs(x - x0) / Math.abs(x1 - x0), y = Math.round(t * 3.5 + t * t * 1.5 + s * t * 0.8);
        solid(x, y); put(x, y, t > 0.92 ? '*' : '~', 2);
        if (Math.abs(x - x0) % 3 === 0) { put(x, y + 1, dir > 0 ? '\\' : '/', 2); solid(x, y + 1); if (t < 0.7) { put(x - dir, y + 2, dir > 0 ? '\\' : '/', 1); } }
        else if (hh(x, 3) < 0.5) put(x, y + 1, ',', 1);
      }
    };
    // clouds and wind over the mountains
    for (let y = 0; y < 14; y++) for (let x = 0; x < W; x++) {
      const u = x * 0.018 - T * 0.05, v = y * 0.55 - x * 0.035;
      const n = Math.sin(v + Math.sin(u * 2.1) * 0.9) * Math.sin(u * 1.3 + v * 0.35 + 0.8) + 0.35 * Math.sin(x * 0.11 - y * 0.9 + T * 0.18);
      if (n > 0.45 && S[y][x]) {
        const h = hh(x, y + 50);
        if (n > 0.85) { put(x, y, h < 0.5 ? '~' : '-', 2); S[y][x] = false; }
        else if (n > 0.65) { put(x, y, h < 0.55 ? '-' : '.', 1); S[y][x] = false; }
        else if (h < 0.45) put(x, y, '.', 1);
      }
    }
    for (let i = 0; i < 7; i++) {
      const len = 10 + Math.floor(hh(i, 60) * 16), yy = 1 + Math.floor(hh(i, 61) * 11), span = W + 60;
      const xs = Math.floor(((hh(i, 62) * span + T * (18 + 10 * hh(i, 63))) % span)) - 40;
      for (let j = 0; j < len; j++) {
        const x = xs + j, y = yy + (j > len * 0.6 ? 1 : 0) * (i % 2);
        if (!inb(x, y) || !S[y][x]) continue;
        if (hh(j, i + Math.floor(T * 2)) < 0.25) continue;
        put(x, y, j === len - 1 ? '~' : (j % 4 === 0 ? '~' : '-'), j > len * 0.3 ? 2 : 1);
      }
    }
    // forest along the bottom, under the carousel
    const GR = 64;
    for (let x = 0; x < W; x++) for (let y = GR; y < R; y++) { solid(x, y); if (hh(x, y) < 0.14) put(x, y, y === GR ? '_' : (hh(y, x) < 0.5 ? '.' : ','), 1); }
    // wind and rain across the carousel band
    const tk = T / 0.11, R0 = BASE + 1, RH = GR - R0;
    for (let i = 0; i < 260; i++) {
      const v = 0.8 + hh(i, 3) * 0.8, y = R0 + Math.floor((hh(i, 2) * RH + tk * v) % RH);
      const x = Math.floor(((hh(i, 1) * W - (y - R0) * 0.6 - tk * v * 0.6) % W + W) % W);
      const lv = hh(i, 4) < 0.28 ? 2 : 1;
      if (G[y][x] === ' ' && S[y][x]) put(x, y, '/', lv);
      if (inb(x + 1, y - 1) && y - 1 >= R0 && G[y - 1][x + 1] === ' ' && S[y - 1][x + 1]) put(x + 1, y - 1, hh(i, 5) < 0.5 ? '/' : '\'', 1);
      if (y >= GR - 2 && hh(i, Math.floor(tk)) < 0.5) put(x - 1, GR - 1, hh(i, 6) < 0.5 ? '.' : ',', 1);
    }
    const drawPath = (pts, cx, lvHead) => {
      for (let n = 1; n < pts.length; n++) {
        const [x0, y0] = pts[n - 1], [x1, y1] = pts[n], x = Math.round(x1), y = Math.round(y1);
        if (!inb(x, y) || y < R0 || y >= GR || G[y][x] !== ' ' || !S[y][x]) continue;
        const dx = x1 - x0, dy = y1 - y0;
        let ch;
        if (Math.abs(dy) < 0.4 * Math.abs(dx)) ch = n % 4 === 0 ? '~' : '-';
        else if (Math.abs(dx) < 0.4 * Math.abs(dy)) ch = x1 < cx ? '(' : ')';
        else ch = dx * dy < 0 ? '/' : '\\';
        put(x, y, ch, n < lvHead ? 2 : 1);
      }
    };
    for (let i = 0; i < 5; i++) {
      const len = 30 + Math.floor(hh(i, 70) * 26), yy = R0 + 8 + Math.floor(hh(i, 71) * (RH - 12)), span = W + 110;
      const pos = (hh(i, 72) * span + tk * (1.3 + hh(i, 73) * 0.8)) % span, p = pos / span, xs = W + 30 - Math.floor(pos);
      const curl = Math.min(1, Math.max(0, (p - 0.18) / 0.55)), ease = curl * curl * (3 - 2 * curl);
      const rad = 0.6 + 3.2 * ease, turns = ease * 2.1 * Math.PI, cx = xs, cy = yy - rad, pts = [];
      const steps = Math.max(2, Math.round(ease * 28));
      for (let k = steps; k >= 1; k--) { const a = k / steps, th = -a * turns, rr = rad * (1 - a * 0.6 * ease); pts.push([cx + 2.1 * rr * Math.sin(th), cy + rr * Math.cos(th)]); }
      pts.push([xs, yy]);
      for (let j = 1; j <= len; j++) pts.push([xs + j, yy + (0.4 + 0.6 * (1 - ease)) * Math.sin(j * 0.14 - tk * 0.08 + i)]);
      const fade = p > 0.86 ? (p - 0.86) / 0.14 : 0;
      for (let n = 1; n < pts.length; n++) {
        if (fade && hh(n, i + 5) < fade) continue;
        const [x0, y0] = pts[n - 1], [x1, y1] = pts[n], x = Math.round(x1), y = Math.round(y1);
        if (!inb(x, y) || y < R0 || y >= GR || G[y][x] !== ' ' || !S[y][x]) continue;
        const dx = x1 - x0, dy = y1 - y0;
        let ch;
        if (Math.abs(dy) < 0.4 * Math.abs(dx)) ch = n % 4 === 0 ? '~' : '-';
        else if (Math.abs(dx) < 0.4 * Math.abs(dy)) ch = x1 < cx ? '(' : ')';
        else ch = dx * dy < 0 ? '/' : '\\';
        put(x, y, ch, n < steps + 8 ? 2 : 1);
      }
    }
    // shooting stars: frequent, in the open sky
    for (let i = 0; i < 10; i++) {
      const cyc = 3.6 + i * 0.95, tt = T * 0.42 + i * 2.3, k = Math.floor(tt / cyc), p = tt - k * cyc;
      if (p > 1.6) continue;
      const x0 = W * (0.22 + 0.72 * hh(i, k)), y0 = 1 + 8 * hh(k, i + 7), slope = 0.1 + 0.1 * hh(i + 3, k);
      const hx = x0 - p * 28, hy = y0 + p * 28 * slope;
      const fade = p < 0.2 ? p / 0.2 : p > 1.2 ? Math.max(0, (1.6 - p) / 0.4) : 1;
      for (let j = 0; j < 20; j++) {
        const x = Math.round(hx + j), y = Math.round(hy - j * slope);
        if (!inb(x, y) || !S[y][x]) continue;
        const w = (1 - j / 20) * fade;
        if (j === 0 && w > 0.5) put(x, y, '*', 3);
        else if (w > 0.6) put(x, y, '=', 3);
        else if (w > 0.35) put(x, y, '-', 2);
        else if (w > 0.1) put(x, y, '.', 1);
      }
    }
    const dim = [], mid = [], hi = [];
    for (let y = 0; y < R; y++) {
      let a = '', b = '', c = '';
      for (let x = 0; x < W; x++) { const l = L[y][x], ch = G[y][x]; a += l === 1 ? ch : ' '; b += l === 2 ? ch : ' '; c += l === 3 ? ch : ' '; }
      dim.push(a); mid.push(b); hi.push(c);
    }
    return { dim: dim, mid: mid, hi: hi };
  }
  marinaGen(W, R, T) {
    const G = [], L = [];
    for (let y = 0; y < R; y++) { G.push(new Array(W).fill(' ')); L.push(new Array(W).fill(0)); }
    const put = (x, y, ch, l) => { if (x >= 0 && x < W && y >= 0 && y < R && ch !== ' ') { G[y][x] = ch; L[y][x] = l; } };
    const hh = (a, b) => Math.abs(Math.sin(a * 12.9898 + b * 78.233) * 43758.5453) % 1;
    const HZ = 0, NEAR = 26;
    for (let x = 0; x < W; x++) if (hh(x, 1) < 0.55) put(x, HZ, x % 3 ? '-' : '_', 1);
    for (let y = HZ + 1; y < R - 7; y++) {
      const d = y - HZ, fq = 0.42 / (1 + 0.1 * d), sp = 0.5 + 0.04 * Math.min(d, NEAR);
      for (let x = 0; x < W; x++) {
        const f = Math.sin(x * fq + d * 1.7 + Math.sin(x * 0.02 + d) - T * sp);
        const g = f + 0.25 * Math.sin(x * 0.013 + d * 0.7 + T * 0.2);
        if (y < NEAR) { if (hh(x, y) < 0.18) continue; if (g > 1.0) put(x, y, '~', d > 10 ? 2 : 1); else if (g > 0.88) put(x, y, '-', 1); }
        else if (f > 0.95 && hh(x, y) < 0.5) put(x, y, '~', 1);
      }
    }
    const sy = R - 6 + Math.round(Math.sin(T * 0.45));
    for (let x = 0; x < W; x++) {
      const e = sy + Math.round(Math.sin(x * 0.09 + T * 0.3) * 0.6);
      put(x, e, hh(x, 3) < 0.7 ? '~' : '-', 2);
      for (let y = e + 1; y < R; y++) if (hh(x, y) < 0.22) put(x, y, hh(y, x) < 0.5 ? '.' : '·', 1);
    }
    const O = Math.round((W - 200) / 2), PX = 120 + O, DX1 = 174 + O, LX = 191 + O;
    for (let y = 1; y < 15; y++) for (let x = PX - 2; x < W; x++) { G[y][x] = ' '; L[y][x] = 0; }
    for (let y = 2; y < 12; y++) for (let x = PX - 2; x < LX - 9; x++) if (hh(x, y) < 0.06) put(x, y, '-', 1);
    const SX0 = 140 + O, SX1 = 158 + O, DY = 12;
    for (let x = PX; x <= LX - 8; x++) put(x, DY, '=', 2);
    put(PX - 1, DY, '[', 2);
    for (let x = PX + 2; x < LX - 8; x += 7) if (x < SX0 - 1 || x > SX1 + 1) for (let y = DY + 1; y < DY + 3; y++) put(x, y, '|', 1);
    put(SX0 + 2, DY + 1, '|', 1); put(SX1 - 2, DY + 1, '|', 1);
    const label = ' NEWEST FIRST ', sign = '[' + label.padStart(Math.floor((SX1 - SX0 - 1 + label.length) / 2), ' ').padEnd(SX1 - SX0 - 1, ' ') + ']';
    for (let j = 0; j < sign.length; j++) { const x = SX0 + j, ch = sign[j]; if (ch === ' ') { G[DY + 2][x] = ' '; L[DY + 2][x] = 0; } else put(x, DY + 2, ch, (ch === '[' || ch === ']') ? 2 : 3); }
    [128 + O, 150 + O, 170 + O].forEach((mx, i) => {
      for (let y = 6; y < 11; y++) put(mx, y, '|', 2);
      put(mx + 1, 6, Math.sin(T * 0.9 + i) > 0 ? '>' : '-', 2);
      put(mx + 1, 8, '\\', 1); put(mx + 1, 9, '|', 1);
      const hull = '\\___/';
      for (let j = 0; j < hull.length; j++) put(mx - 2 + j, 11, hull[j], 2);
    });
    const top = ['   _   ', '  /_\\  ', ' /___\\ ', ' |   | ', '_|___|_', '|=====|'];
    top.forEach((row, r) => { for (let j = 0; j < row.length; j++) if (row[j] !== ' ') put(LX - 3 + j, r, row[j], 2); });
    const lampOn = 0.5 + 0.5 * Math.sin(T * 1.3);
    put(LX - 1, 3, lampOn > 0.3 ? '*' : 'o', 3); put(LX, 3, '*', 3); put(LX + 1, 3, lampOn > 0.3 ? '*' : 'o', 3);
    for (let r = 6; r < 12; r++) {
      const w = Math.round(2 + (r - 6) * 0.4), band = Math.floor((r - 6) / 2) % 2 === 1;
      for (let x = LX - w; x <= LX + w; x++) {
        let ch, lv = 1;
        if (x === LX - w) { ch = '/'; lv = 2; } else if (x === LX + w) { ch = '\\'; lv = 2; }
        else {
          const t = (x - (LX - w)) / (2 * w);
          const shade = ['  ', '..', '::', '##'][t < 0.3 ? 0 : t < 0.55 ? 1 : t < 0.8 ? 2 : 3];
          ch = band ? (t < 0.3 ? '-' : shade === '..' ? ':' : '#') : shade[0];
          if (ch === ' ') { G[r][x] = ' '; L[r][x] = 0; continue; }
          lv = ch === '#' ? 2 : 1;
        }
        put(x, r, ch, lv);
      }
    }
    put(LX, 10, '[', 2); put(LX + 1, 10, ']', 2); put(LX, 11, '|', 1); put(LX + 1, 11, '|', 1);
    for (let x = LX - 8; x <= LX + 8; x++) { if (x < W) put(x, 12, Math.abs(x - LX) === 8 ? (x < LX ? '/' : '\\') : (hh(x, 17) < 0.5 ? '^' : 'n'), 1); if (Math.abs(x - LX) < 7 && x < W) put(x, 13, hh(x, 18) < 0.4 ? '^' : '-', 1); }
    // Site edit: the beam sweeps both ways, so on wide screens it also crosses the open water
    // to the right of the lighthouse.
    const phi = T * 0.45, cph = Math.cos(phi);
    const beam = (dir, len) => {
      for (let j = 3; j < len; j++) {
        const yc = 3 + j * 0.055, half = 0.4 + j * 0.075, x = dir < 0 ? LX - 1 - j : LX + 1 + j;
        if (x < 0 || x >= W) break;
        for (let y = Math.round(yc - half); y <= Math.round(yc + half); y++) {
          if (y < 0 || y >= R) continue;
          const cur = G[y][x];
          if (cur !== ' ' && cur !== '~' && cur !== '-' && cur !== '_' && cur !== '.') continue;
          const edge = Math.abs(y - yc) > half - 0.8;
          if (j < 10) put(x, y, edge ? '-' : '=', 3);
          else if (edge) { if (j < 24 || j % 2 === 0) put(x, y, j < 24 ? '-' : '·', j < 40 ? 2 : 1); }
          else if (hh(x, y) < 0.45 - j * 0.004) put(x, y, '·', j < 30 ? 2 : 1);
        }
      }
    };
    if (cph < 0) beam(-1, Math.round(95 * -cph));
    else if (W - LX > 12) beam(1, Math.round(Math.min(95, W - LX - 2) * cph));
    else if (cph > 0.3) for (let j = 2; j < 8; j++) put(LX + 1 + j, 3, j < 5 ? '=' : '-', j < 5 ? 3 : 2);
    put(LX - 2, 3, lampOn > 0.6 ? '(' : ' ', 2); put(LX + 2, 3, lampOn > 0.6 ? ')' : ' ', 2);
    const yachtR = ['          _|_          ', '     ____/[_]\\____     ', ' ___/_[]_[]_[]_[]_\\___ ', ' \\  o  o  o  o  o    / ', '  \\__________________/  '];
    const YW = yachtR[0].length, span = PX - O - 6 - YW - 2;
    const ph = (T * 2.4) % (2 * span), goingRight = ph < span, bx = O + 2 + Math.round(goingRight ? ph : 2 * span - ph);
    const flip = (row) => row.split('').reverse().map((ch) => ch === '/' ? '\\' : ch === '\\' ? '/' : ch === '[' ? ']' : ch === ']' ? '[' : ch).join('');
    const yacht = goingRight ? yachtR : yachtR.map(flip);
    const by = 1 + (Math.sin(T * 1.1) > 0.3 ? 1 : 0);
    for (let r = 0; r < yacht.length; r++) for (let j = 0; j < YW; j++) { const x = bx + j, y = by + r; if (x < 0 || x >= W || y >= R) continue; const ch = yacht[r][j]; if (ch !== ' ') put(x, y, ch, (ch === 'o' || ch === '[' || ch === ']') ? 3 : 2); else if (r >= 1 && j > 1 && j < YW - 2) { G[y][x] = ' '; L[y][x] = 0; } }
    const wy = by + yacht.length;
    for (let j = 1; j < 22; j++) {
      const x = goingRight ? bx - j + 2 : bx + YW + j - 3, y = wy - 1 + (j > 10 && j % 4 === 0 ? 1 : 0);
      if (x >= 0 && x < PX - 3 && y < R && hh(j, Math.floor(T * 3)) < 0.85) put(x, y, j < 8 ? '~' : '-', j < 12 ? 2 : 1);
    }
    const dim = [], mid = [], hi = [];
    for (let y = 0; y < R; y++) {
      let a = '', b = '', c = '';
      for (let x = 0; x < W; x++) { const l = L[y][x], ch = G[y][x]; a += l === 1 ? ch : ' '; b += l === 2 ? ch : ' '; c += l === 3 ? ch : ' '; }
      dim.push(a); mid.push(b); hi.push(c);
    }
    return { dim: dim, mid: mid, hi: hi };
  }
  fieldGen(kind, W, R, T) {
    if (kind === 'marina') return this.marinaGen(W, R, T);
    if (kind === 'meteors') return this.meteorGen(W, R, T);
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
    const s = this.state;
    const f = this.field();
    const bgs = [
      ['repeating-linear-gradient(90deg, #22221f 0 1px, transparent 1px 28px), repeating-linear-gradient(0deg, #22221f 0 1px, transparent 1px 28px)', 'auto'],
      ['repeating-radial-gradient(circle at 72% 58%, #1b3a2c 0 1px, transparent 1px 22px)', 'auto'],
      ['repeating-linear-gradient(135deg, #262522 0 1px, transparent 1px 14px)', 'auto'],
      ['radial-gradient(#3a3935 1.3px, transparent 1.4px)', '18px 18px'],
      ['repeating-linear-gradient(0deg, #1f2b25 0 2px, transparent 2px 9px)', 'auto']
    ];
    const articles = (this.props.articles || []).map((p, i) => ({
      n: p.number,
      title: p.title,
      excerpt: p.excerpt,
      meta: p.date + ' · ' + p.readTime,
      href: p.href,
      bg: bgs[i % 5][0], size: bgs[i % 5][1],
      op: i === s.idx ? 1 : 0.35
    }));
    const prog = Math.min(1, (s.t - s.start) / 75);
    const segs = articles.map((_, i) => ({
      label: 'Show article ' + (i + 1),
      w: i < s.idx ? '100%' : i === s.idx ? Math.round(prog * 100) + '%' : '0%',
      go: () => this.setState({ idx: i, start: this.state.t })
    }));
    const wl = s.mode === 'waitlist';
    const on = { bg: '#1fbf7f', fg: '#06120c' }, off = { bg: 'transparent', fg: '#9a978f' };
    return {
      ...this.bgVals(),
      dim: f.dim, mid: f.mid, hi: f.hi,
      onHeroMove: (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        this.setState({ mx: px * this.cols(), my: py * 51 - 4 });
      },
      onHeroLeave: () => this.setState({ mx: -99, my: -99 }),
      articles: articles, segs: segs,
      offset: s.idx * 1124,
      count: String(this.count()).padStart(2, '0'),
      slideNum: '0' + (s.idx + 1),
      prev: () => this.setState({ idx: (s.idx + this.count() - 1) % this.count(), start: s.t }),
      next: () => this.setState({ idx: (s.idx + 1) % this.count(), start: s.t }),
      pause: () => this.setState({ paused: true }),
      resume: () => this.setState({ paused: false, start: this.state.t }),
      ...this.archVals(),
      tabA: wl ? on : off, tabB: wl ? off : on,
      pickWaitlist: () => this.setState({ mode: 'waitlist', sent: false }),
      pickArticles: () => this.setState({ mode: 'articles', sent: false }),
      fine: wl ? 'Email only, used to tell you when the beta opens. Unsubscribe any time.' : 'One email per article. Unsubscribe any time.',
      formTitle: wl ? 'Join the waitlist' : 'Get new articles',
      formBody: wl ? 'Early access when Dev Suite opens to its first users.' : 'An email when a new entry is published. Nothing else.',
      cta: wl ? 'Join' : 'Subscribe',
      notSent: !s.sent, sent: s.sent,
      doneText: wl ? 'You are on the list.' : 'Subscribed. See you at the next entry.',
      submit: (e) => { e.preventDefault(); this.setState({ sent: true }); }
    };
  }
}
