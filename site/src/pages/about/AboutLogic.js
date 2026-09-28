import { DCLogic } from '../../dc/runtime.js';

// Logic ported verbatim from the design board About.dc.html.
export const defaults = {};

export default class Component extends DCLogic {
  constructor(props) { super(props); this.state = { t: 0, reason: 0, status: 'idle', errs: {}, video: 'idle' }; }
  componentDidMount() {
    this.startBg(); this.iv = setInterval(() => this.setState({ t: this.state.t + 1 }), 90); }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.sendT); this.stopBg(); }
  sceneGen(kind, W, R, T, tz) {
    const G = [], L = [];
    for (let y = 0; y < R; y++) { G.push(new Array(W).fill(' ')); L.push(new Array(W).fill(0)); }
    const hh = (a, b) => Math.abs(Math.sin(a * 12.9898 + b * 78.233) * 43758.5453) % 1;
    const inb = (x, y) => x >= 0 && x < W && y >= 0 && y < R;
    const put = (x, y, ch, l) => { x = Math.round(x); y = Math.round(y); if (inb(x, y)) { G[y][x] = ch; L[y][x] = l; } };
    const clr = (x, y) => put(x, y, ' ', 0);
    const empty = (x, y) => inb(Math.round(x), Math.round(y)) && G[Math.round(y)][Math.round(x)] === ' ';
    const stars = (maxY, dens) => {
      for (let y = 0; y < maxY; y++) for (let x = 0; x < W; x++) {
        const h = hh(x, y + 3);
        if (h < dens) { const tw = Math.sin(T * 0.25 + h * 900) > 0.85 && h < dens * 0.2; put(x, y, tw ? '+' : (h < dens * 0.5 ? '·' : '.'), tw ? 2 : 1); }
      }
    };
    const edge = (l, t, r) => l > t + 0.3 && r > t + 0.3 ? '^' : (r - l) < -0.45 ? '/' : (r - l) > 0.45 ? '\\' : '_';
    const GY = R - 2;
    const sprite = (rows, x0, y0, lvFn, clear) => rows.forEach((row, r) => { for (let j = 0; j < row.length; j++) { const ch = row[j]; if (ch === ' ') { if (clear) clr(x0 + j, y0 + r); } else put(x0 + j, y0 + r, ch, lvFn(ch, r, j)); } });
    const ridgeFill = (f, lv, tex, litTex) => {
      for (let x = 0; x < W; x++) {
        const t = f(x), ry = Math.round(t);
        for (let y = Math.max(0, ry); y < R; y++) clr(x, y);
        put(x, ry, edge(f(x - 1), t, f(x + 1)), lv);
        const lit = f(x - 1) > f(x + 1);
        for (let y = ry + 1; y < R; y++) { const d = y - t, h = hh(x, y + lv * 17); if (lit && d < 3 && h < litTex - d * 0.12) put(x, y, d < 1.5 ? ':' : '.', lv === 2 ? 2 : 1); else if (h < tex) put(x, y, '.', 1); }
      }
    };
    const peak = (x, c, w, a) => a * Math.exp(-((x - c) * (x - c)) / (2 * w * w));
    const TX = tz ? tz.x : -1, TY = tz ? tz.y : -1;
    if (kind === 'aurora') {
      stars(R - 12, 0.022);
      for (let x = Math.round(W * 0.5); x < W; x++) {
        const top = 2 + 2.5 * Math.sin(x * 0.035 + T * 0.18) + 1.5 * Math.sin(x * 0.09 - T * 0.13 + 1);
        const len = 9 + 4 * Math.sin(x * 0.05 + T * 0.1 + 2) + 2 * Math.sin(x * 0.13 - T * 0.2);
        const f0 = 0.5 + 0.5 * Math.sin(x * 0.21 + T * 0.35) * Math.sin(x * 0.047 - T * 0.07), fold = f0 * f0;
        const side = Math.min(1, (x - W * 0.5) / (W * 0.2));
        for (let k = 0; k < len; k++) {
          const y = Math.round(top + k); if (y < 0 || y > R - 22) continue;
          const h = hh(x, y); if (h < 0.3) continue;
          const it = (1 - k / len) * (0.25 + 0.75 * fold) * side;
          if (it > 0.62) put(x, y, h < 0.5 ? '|' : '!', 4);
          else if (it > 0.4) put(x, y, ':', 3);
          else if (it > 0.2) put(x, y, h < 0.7 ? ':' : '.', 2);
          else if (it > 0.07 && h < 0.5) put(x, y, '.', 1);
        }
      }
      const mtn = (x) => R - 9 - peak(x, W * 0.2, 12, 3) - peak(x, W * 0.45, 10, 4) - peak(x, W * 0.72, 13, 17) - peak(x, W * 0.9, 10, 11) - peak(x, W * 0.6, 8, 7) - 0.8 * Math.abs(Math.sin(x * 0.19));
      for (let x = 0; x < W; x++) {
        const t = mtn(x), ry = Math.round(t);
        for (let y = ry; y < R; y++) clr(x, y);
        put(x, ry, edge(mtn(x - 1), t, mtn(x + 1)), 2);
        const lit = mtn(x - 1) > mtn(x + 1);
        for (let y = ry + 1; y < R - 5; y++) { const d = y - t, h = hh(x, y); if (lit && h < 0.8 - d * 0.1) put(x, y, d < 2.5 ? '#' : d < 5 ? ':' : '.', d < 2.5 ? 3 : d < 5 ? 2 : 1); else if (!lit && h < 0.1) put(x, y, '.', 1); }
      }
      const hill = (x) => R - 4.5 - 1.6 * (0.5 + 0.5 * Math.sin(x * 0.04 + 1)) - 0.7 * Math.sin(x * 0.11);
      ridgeFill(hill, 2, 0.05, 0.45);
      for (let x = 3; x < W; x += 7 + Math.floor(hh(x, 5) * 9)) { const y = Math.round(hill(x)) + 1 + Math.floor(hh(x, 6) * 2); put(x, y, hh(x, 7) < 0.5 ? 'o' : ',', 1); }
      const cx = Math.round(W * 0.5), cy = Math.round(hill(cx + 7)) - 6;
      sprite(['         ||   ', '   ______||_  ', "  /.'.'.'.'.\\ ", ' /___________\\', ' |  [] |" | | ', ' |  [] |  | | ', ' |______|__|_| '], cx, cy,
        (ch) => ch === '[' || ch === ']' ? 4 : ch === '.' || ch === "'" ? 3 : 2, true);
      for (let k = 1; k < 8; k++) { const x = cx + 10 + Math.sin(k * 0.7 - T * 0.8) * 1.1 + k * 0.9, y = cy - k; if (y >= 0 && empty(x, y) && hh(k, Math.floor(T)) < 0.92 - k * 0.1) put(x, y, k < 3 ? '~' : '.', k < 3 ? 2 : 1); }
    } else if (kind === 'city') {
      stars(R - 20, 0.016);
      sprite([' .-. ', '(   )', " `-' "], W - 20, 3, () => 2, false);
      let x0 = 0, n = 0; const GB = R - 6;
      while (x0 < W) {
        const w = 5 + Math.floor(hh(n, 1) * 8), right = x0 > TX - 4;
        const h = right ? Math.round(10 + hh(n, 2) * 10 + Math.max(0, 1 - Math.abs((x0 - W * 0.8) / (W * 0.18))) * 12) : Math.round(3 + hh(n, 2) * 5);
        const top = GB - h;
        for (let x = x0; x < x0 + w && x < W; x++) {
          for (let y = top; y <= GB; y++) clr(x, y);
          put(x, top, '_', 2);
          if (x === x0 || x === x0 + w - 1) for (let y = top + 1; y <= GB; y++) put(x, y, '|', 2);
          else if ((x - x0) % 2 === 0) for (let y = top + 2; y < GB; y += 2) { const lit = hh(x, y) < 0.45 && Math.sin(T * 0.08 + hh(y, x) * 40) > -0.2; put(x, y, lit ? '=' : '.', lit ? 3 : 1); }
        }
        if (right && hh(n, 3) < 0.4 && h > 16) { const ax = x0 + Math.floor(w / 2); for (let y = top - 3; y < top; y++) put(ax, y, '|', 1); put(ax, top - 4, Math.sin(T * 0.6 + n) > 0 ? '*' : '.', 4); }
        x0 += w + 1; n++;
      }
      const TR = R - 2;
      for (let x = 0; x < W; x++) { put(x, TR, '=', 1); put(x, R - 1, x % 14 === 3 ? '#' : (hh(x, 9) < 0.4 ? '_' : ' '), 1); }
      const car = [' _______________ ', '| [] [] [] [] []|', '|_______________|', '   (o)     (o)   '];
      const loco = [' ______________   ', '| [] []  |    \\\\ ', '|________|_____\\\\_', '  (o)   (o)  (o)  '];
      const cars = 3, len = cars * 18 + loco[0].length, span = W + len + 20, tx = Math.round(((T * 7) % span) - len);
      for (let c = 0; c < cars; c++) { sprite(car, tx + c * 18, TR - 4, (ch, r) => r === 3 ? 1 : (ch === '[' || ch === ']') ? 3 : 2, true); put(tx + c * 18 + 17, TR - 2, '=', 1); }
      sprite(loco, tx + cars * 18, TR - 4, (ch, r) => r === 3 ? 1 : (ch === '[' || ch === ']') ? 3 : 2, true);
      put(tx + cars * 18 + 17, TR - 2, Math.sin(T * 3) > 0 ? '*' : '.', 4);
    } else if (kind === 'desert') {
      stars(R - 16, 0.02);
      const HZ = R - 14;
      let x0 = Math.round(W * 0.66), n = 0;
      while (x0 < W - 3) {
        const w = 2 + Math.floor(hh(n, 11) * 4), h = 2 + Math.floor(hh(n, 12) * 4 + Math.max(0, 1 - Math.abs((x0 - W * 0.83) / (W * 0.14))) * 6), top = HZ - h;
        for (let x = x0; x < x0 + w; x++) { for (let y = top; y <= HZ; y++) clr(x, y); put(x, top, '_', 1); if (x === x0 || x === x0 + w - 1) for (let y = top + 1; y <= HZ; y++) put(x, y, '|', 1); else for (let y = top + 1; y < HZ; y += 2) if (hh(x, y) < 0.4 && Math.sin(T * 0.1 + x + y) > -0.3) put(x, y, '.', 3); }
        if (h >= 8 && hh(n, 13) < 0.6) put(x0 + 1, top - 1, Math.sin(T * 0.6 + n) > 0 ? '*' : '.', 4);
        x0 += w + Math.floor(hh(n, 14) * 2); n++;
      }
      for (let x = Math.round(W * 0.62); x < W; x++) for (let k = 1; k < 4; k++) if (hh(x, k + 40) < 0.12 / k && empty(x, HZ - 12 - k)) put(x, HZ - 12 - k, '.', 1);
      const layers = [(x) => HZ + 1 + 0.8 * Math.sin(x * 0.03 + 4), (x) => HZ + 3.5 + 1.5 * Math.sin(x * 0.04 + 2.4) + 0.5 * Math.sin(x * 0.13), (x) => HZ + 6.5 + 2 * Math.sin(x * 0.028 + 0.3) + 0.6 * Math.sin(x * 0.09), (x) => HZ + 10 + 1.6 * Math.sin(x * 0.05 + 1.7)];
      layers.forEach((f, i) => ridgeFill(f, i === 0 ? 1 : 2, 0.03 + i * 0.01, 0.3 + i * 0.1));
      const tx0 = Math.round(W * 0.42), ty = Math.round(layers[2](tx0 + 8));
      sprite(['       /\\        ', '      /  \\_____  ', '     / /\\      \\ ', '    /_/  \\______\\'], tx0, ty - 4, (ch) => 2, true);
      put(tx0 + 7, ty - 1, '*', Math.sin(T * 1.7) > -0.5 ? 4 : 3);
      const fx = tx0 + 20, fy = ty;
      put(fx, fy - 1, Math.sin(T * 5) > 0 ? '^' : '*', 4); put(fx - 1, fy - 1, '(', 3); put(fx + 1, fy - 1, ')', 3); put(fx - 1, fy, '=', 2); put(fx, fy, '=', 2); put(fx + 1, fy, '=', 2);
      for (let k = 1; k < 7; k++) { const x = fx + Math.sin(k * 0.8 - T * 0.9) * 1 + k * 0.6, y = fy - 1 - k; if (empty(x, y) && hh(k, Math.floor(T)) < 0.9 - k * 0.1) put(x, y, k < 3 ? '~' : '.', k < 3 ? 2 : 1); }
      for (let i = 0; i < 50; i++) { const x = (hh(i, 1) * W + T * 5 * (0.6 + hh(i, 2))) % W, y = Math.round(layers[3](x)) - 1 - (i % 2); if (empty(x, y)) put(x, y, '·', 1); }
    } else if (kind === 'lake') {
      stars(R - 16, 0.02);
      const MX = W - 30, H = R - 12;
      sprite([' .-. ', '(   )', " `-' "], MX, 4, () => 3, false);
      for (let x = Math.round(W * 0.55); x < W; x++) { const m = H - 4 - 4 * (0.5 + 0.5 * Math.sin(x * 0.03 + 3)) - 1.5 * Math.sin(x * 0.075); put(x, Math.round(m), '.', 1); }
      for (let x = 0; x < W; x++) put(x, H, '_', 2);
      for (let x = 1; x < W; x += 2 + Math.floor(hh(x, 4) * 3)) {
        const h = 2 + Math.floor(hh(x, 5) * 3);
        put(x, H - h, '^', 2);
        for (let k = 1; k < h; k++) { put(x - 1, H - h + k, '/', 2); clr(x, H - h + k); put(x + 1, H - h + k, '\\', 2); }
      }
      for (let y = H + 1; y < R; y++) {
        const sy = 2 * H - y, dist = y - H;
        for (let x = 0; x < W; x++) {
          const sx = Math.round(x + Math.sin(y * 0.9 + T * 0.8 + x * 0.05) * (0.6 + dist * 0.15));
          if (sy >= 0 && sx >= 0 && sx < W && L[sy][sx] >= 2 && hh(x, y) < 0.8 - dist * 0.12) put(x, y, G[sy][sx] === '_' ? '-' : '.', 1);
          else if (Math.sin(x * 0.12 + y * 1.7 - T * 0.5) > 0.965) put(x, y, '~', 1);
        }
        for (let x = MX + 1; x < MX + 4; x++) if (hh(x + Math.floor(T * 2), y) < 0.55) put(x + Math.round(Math.sin(y + T) * 0.6), y, '-', 3);
      }
      const bx = Math.round(W * 0.5 + W * 0.08 * Math.sin(T * 0.03)), by = H + 7 + (Math.sin(T * 0.9) > 0.4 ? 1 : 0);
      sprite(['   O              ', ' __|\\\\             ', ' ___|_____________ ', ' \\               / ', '  \\_____________/  '], bx, by - 3, () => 2, true);
      for (let k = 1; k <= 10; k++) put(bx + 3 - k, by - 2 - Math.round(k * 0.36), '\\', 2);
      const rx = bx + 2 - 10, ry0 = by - 2 - Math.round(10 * 0.36);
      for (let y = ry0 + 1; y < by + 1; y++) put(rx, y, ':', 1);
      put(rx, by + 1, Math.sin(T * 1.4) > 0 ? 'o' : 'O', 4);
      for (let k = 2; k < 5; k++) { if (empty(rx - k, by + 1)) put(rx - k, by + 1, '-', 1); if (empty(rx + k, by + 1)) put(rx + k, by + 1, '-', 1); }
      for (let x = 0; x < W; x++) if (Math.sin(x * 0.05 - T * 0.15) + Math.sin(x * 0.13 + T * 0.09) > 0.9 && empty(x, H - 1)) put(x, H - 1, '~', 1);
    } else if (kind === 'highway') {
      stars(R - 16, 0.012);
      const SB = R - 12;
      let x0 = 104, n = 0;
      while (x0 < W) {
        const w = 3 + Math.floor(hh(n, 7) * 5), h = 2 + Math.floor(hh(n, 8) * 7), top = SB - h;
        for (let x = x0; x < x0 + w && x < W; x++) {
          put(x, top, '_', 1);
          if (x === x0 || x === x0 + w - 1) for (let y = top + 1; y <= SB; y++) put(x, y, '|', 1);
          else if ((x - x0) % 2 === 0) for (let y = top + 2; y <= SB; y += 2) if (hh(x, y) < 0.3 && Math.sin(T * 0.07 + hh(y, x) * 30) > 0) put(x, y, '.', 3);
        }
        x0 += w + 1 + Math.floor(hh(n, 9) * 3); n++;
      }
      const RT = R - 10, E1 = R - 9, E2 = R - 8, DV = R - 7, W1 = R - 6, W2 = R - 5, RB = R - 4;
      for (let x = 0; x < W; x++) { put(x, RT, '_', 1); put(x, RB, '=', 1); if (x % 6 < 3) put(x, DV, '-', 1); for (let y = RB + 1; y < R; y++) if (hh(x, y) < 0.06) put(x, y, '.', 1); }
      for (let lx = 14; lx < W; lx += 34) { for (let y = RT - 4; y < RT; y++) put(lx, y, '|', 1); put(lx, RT - 5, '_', 1); put(lx + 1, RT - 5, '*', 4); put(lx + 1, RT - 4, '.', 3); put(lx + 2, RT - 3, '.', 2); }
      const GX = 126, GW = 16;
      let busy = false;
      const lanes = [[E1, 6.2, 1], [E2, 4.4, 1], [W1, -4.8, -1], [W2, -6.6, -1]];
      lanes.forEach(([y, v, dir], li) => {
        for (let i = 0; i < 5; i++) {
          const span = W + 60, p = ((hh(i, li + 11) * span + T * v) % span + span) % span - 30, x = Math.round(p);
          if (x + 4 >= GX && x <= GX + GW) busy = true;
          const body = dir > 0 ? '[==]>' : '<[==]';
          for (let j = 0; j < 5; j++) put(x + j, y, body[j], body[j] === '>' || body[j] === '<' ? 3 : 2);
          for (let k = 1; k < 4; k++) put(dir > 0 ? x + 4 + k : x - k, y, k === 1 ? '-' : '·', k === 1 ? 4 : 1);
          for (let k = 1; k < 7; k++) { const tx = dir > 0 ? x - k : x + 4 + k; if (empty(tx, y) && hh(k, i) < 0.8) put(tx, y, '-', 1); }
        }
      });
      for (let y = RT - 3; y <= RB; y++) { put(GX, y, '|', 2); put(GX + GW, y, '|', 2); }
      const lab = '[ review gate ]';
      for (let x = GX; x <= GX + GW; x++) put(x, RT - 3, '=', 2);
      for (let j = 0; j < lab.length; j++) put(GX + 1 + j, RT - 2, lab[j], 2);
      put(GX + 1, RT - 3, busy ? 'o' : '.', busy ? 4 : 1); put(GX + GW - 1, RT - 3, busy ? 'o' : '.', busy ? 4 : 1);
    }
    if (tz) for (let y = 0; y < tz.y && y < R; y++) for (let x = 0; x < tz.x && x < W; x++) { const ch = G[y][x]; if (!(ch === '.' || ch === '·' || ch === '+') || L[y][x] > 2) { G[y][x] = ' '; L[y][x] = 0; } }
    const dim = [], mid = [], hi = [], acc = [];
    for (let y = 0; y < R; y++) {
      let a = '', b = '', c = '', d = '';
      for (let x = 0; x < W; x++) { const l = L[y][x], ch = G[y][x]; a += l === 1 ? ch : ' '; b += l === 2 ? ch : ' '; c += l === 3 ? ch : ' '; d += l === 4 ? ch : ' '; }
      dim.push(a); mid.push(b); hi.push(c); acc.push(d);
    }
    return { dim: dim, mid: mid, hi: hi, acc: acc };
  }
  bgCfg() { return [{ key: 'fMiles', kind: 'ripple-edge', W: 200, R: 40 }, { key: 'fContact', kind: 'ripple', W: 200, R: 64 }]; }
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
        } else if (kind === 'ripple-edge') {
          const dx = (x - W * 0.8) * A, dy = y - R * 0.1, r = Math.sqrt(dx * dx + dy * dy);
          const dx2 = (x - W * 0.1) * A, dy2 = y - R * 1.02, r2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          u = (0.5 + 0.5 * Math.sin(r * 0.5 - T * 2.2)) * Math.exp(-r / 26) * 1.1
            + (0.5 + 0.5 * Math.sin(r2 * 0.5 - T * 1.8)) * Math.exp(-r2 / 18) * 0.85;
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
    if (this._fKey !== tick) {
      const T = tick * 0.11, out = {};
      this.bgCfg().forEach((f) => { out[f.key] = this.fieldGen(f.kind, f.W, f.R, T); });
      this._fields = out; this._fKey = tick;
    }
    return this._fields;
  }
  roadVals() {
    const t = this.state.t;
    if (this._rdKey !== t) { this._rd = this.sceneGen('highway', 200, 56, t * 0.1); this._rdKey = t; }
    return this._rd;
  }
  renderVals() {
    const s = this.state;
    const labels = ['A demo', 'Supporting the build', 'Press', 'Something else'];
    const field = (k) => ({ err: !!s.errs[k], inv: s.errs[k] ? 'true' : 'false', bg: s.errs[k] ? '#1a0f0e' : '#0b0b0a', bd: s.errs[k] ? '#ff7a6b' : '#2f2e2b' });
    const states = [['idle', 'IDLE'], ['sending', 'SENDING'], ['sent', 'SENT'], ['error', 'ERROR'], ['fields', 'FIELD ERRORS']];
    const cur = Object.keys(s.errs).length && s.status === 'idle' ? 'fields' : s.status;
    return {
      ...this.bgVals(),
      road: this.roadVals(),
      reasons: labels.map((l, i) => ({ label: l, on: i === s.reason, bd: i === s.reason ? '#1fbf7f' : '#2f2e2b', bg: i === s.reason ? '#0f1d17' : 'transparent', fg: i === s.reason ? '#ededE8' : '#9a978f', pick: () => this.setState({ reason: i }) })),
      pickDemo: () => this.setState({ reason: 0 }),
      vIdle: s.video === 'idle', vPlaying: s.video === 'playing',
      playVideo: (e) => {
        const box = e.currentTarget.parentNode, v = box && box.querySelector('video');
        if (v) { v.controls = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
        this.setState({ video: 'playing' });
      },
      fName: field('name'), fEmail: field('email'), fMsg: field('message'),
      notSent: s.status !== 'sent', sent: s.status === 'sent',
      isSending: s.status === 'sending', isError: s.status === 'error', canSend: s.status !== 'sending',
      previewStates: states.map(([k, l]) => ({ label: l, bd: k === cur ? '#1fbf7f' : '#2f2e2b', bg: k === cur ? '#0f1d17' : 'transparent', fg: k === cur ? '#ededE8' : '#9a978f',
        pick: () => this.setState(k === 'fields' ? { status: 'idle', errs: { name: 1, email: 1, message: 1 } } : { status: k, errs: {} }) })),
      submit: (e) => {
        e.preventDefault();
        const f = e.currentTarget.elements || {}, v = (n) => ((f[n] && f[n].value) || '').trim();
        const errs = {};
        if (!v('name')) errs.name = 1;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) errs.email = 1;
        if (!v('message')) errs.message = 1;
        if (Object.keys(errs).length) { this.setState({ errs: errs, status: 'idle' }); return; }
        // Site edit: there is no mail backend on a static site, so the message opens in the
        // visitor's mail app, addressed to the creator.
        const subject = (labels[this.state.reason] || 'Message') + ' · from ' + v('name');
        const body = v('message') + '\n\n' + v('name') + ' <' + v('email') + '>';
        window.location.href = 'mailto:tcrawford@nteg.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        this.setState({ errs: {}, status: 'sent' });
      }
    };
  }
}
