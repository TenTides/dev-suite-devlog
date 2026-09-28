import React, { useRef, useState } from 'react';
import { deskBefore, deskAfter, phoneBefore, phoneAfter } from './beforeAfterSvgs.js';
import { usePhone } from '../../useMedia.js';

// Inline **bold** and *italic* inside widget text props.
export function Rich({ text }) {
  if (!text) return null;
  const out = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0, m, k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(m[1] ? <strong key={k++}>{m[1]}</strong> : <em key={k++}>{m[2]}</em>);
    last = re.lastIndex;
  }
  out.push(text.slice(last));
  return <>{out}</>;
}

export function Caption({ tag, children }) {
  return (
    <figcaption className="cap">
      <span className="cap-tag">{tag}</span>
      <span>{children}</span>
    </figcaption>
  );
}

export function Note({ children }) {
  return (
    <div className="note">
      <span className="chip">NOTE</span>
      <span className="note-body">{children}</span>
    </div>
  );
}

export function Stats({ label, items }) {
  return (
    <div className="stats">
      {label ? <span className="eyebrow">{label}</span> : null}
      <div className="stats-grid">
        {items.map(([v, u], i) => (
          <div key={i} className="stat">
            <span className="stat-tick" />
            <span className="stat-v">{v}</span>
            <span className="stat-u"><Rich text={u} /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PullQuote({ children }) {
  return (
    <blockquote className="pull">
      <span aria-hidden="true" className="pull-mark">“</span>
      {children}
    </blockquote>
  );
}

export function List({ hollow, children }) {
  return <div className={'sq-list' + (hollow ? ' hollow' : '')}>{children}</div>;
}

export function WithNote({ note, children }) {
  return (
    <div className="with-note">
      {children}
      <aside aria-label="Margin note" className="margin-note">
        <span aria-hidden="true" className="margin-tick" />
        <span>{note}</span>
      </aside>
    </div>
  );
}

export function DataTable({ head, rows, featured, caption, tag }) {
  const last = head.length - 1;
  return (
    <figure className="fig">
      <div className="table-frame">
        <span aria-hidden="true" className="swipe">SWIPE TABLE →</span>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Scrollable table">
          <table className="tbl">
            <thead>
              <tr>
                {head.map((h, i) => (
                  <th key={i} scope="col" className={featured && i === last ? 'feat' : ''}><Rich text={h} /></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="row">
                  {r.map((c, ci) => (ci === 0
                    ? <th key={ci} scope="row"><Rich text={c} /></th>
                    : <td key={ci} className={featured && ci === last ? 'feat' : ci === last ? 'soft' : ''}><Rich text={c} /></td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Caption tag={tag}><Rich text={caption} /></Caption>
    </figure>
  );
}

export function BarChart({ title, tag, bars, axis, alt, caption, captionTag }) {
  const [hover, setHover] = useState(-1);
  // Same geometry as the design board: 400 problems span 600 units.
  const phone = usePhone();
  const [VW, PX, LS, VS, BH, GAP] = phone ? [320, 240 / 400, 13, 20, 30, 92] : [710, 600 / 400, 14, 24, 36, 100];
  const top = 30;
  const ybot = top + GAP * 2 - 18;
  const colors = ['#1fbf7f', '#57544f'];
  return (
    <figure className="fig">
      <div className="chart">
        <div className="chart-head">
          <span className="chart-title">{title}</span>
          <span className="tag-green">{tag}</span>
        </div>
        <div role="img" aria-label={alt} className="chart-body">
          <svg viewBox={`0 0 ${VW} ${ybot + 26}`} width="100%" fill="none" aria-hidden="true" style={{ display: 'block', overflow: 'visible' }}>
            {[0, 100, 200, 300, 400].map((v) => {
              const x = v * PX + 0.5;
              return (
                <g key={v}>
                  <path d={`M${x} 8V${ybot}`} stroke={v === 0 ? '#3a3935' : '#1d1d1b'} />
                  <text x={x} y={ybot + 18} textAnchor={v === 0 ? 'start' : 'middle'} fill="#6f6c66" fontFamily="Geist Mono" fontSize="11">{v}</text>
                </g>
              );
            })}
            {bars.map((b, i) => {
              const y = top + i * GAP, w = b.value * PX;
              return (
                <g key={i} className="bar-hit" opacity={hover < 0 || hover === i ? 1 : 0.4}
                  onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)} onPointerDown={() => setHover(i)}>
                  <text x="1" y={y} fill="#d6d4ce" fontFamily="Geist" fontSize={LS}>{b.label}</text>
                  <rect className="bar-growx" x="1" y={y + 10} width={w} height={BH} fill={colors[i] || '#57544f'} />
                  <text x={w + 12} y={y + 10 + BH / 2 + VS * 0.36} fill={i === 0 ? '#1fbf7f' : '#ededE8'} fontFamily="Geist" fontWeight="600" fontSize={VS} letterSpacing="-0.5">{b.value}</text>
                </g>
              );
            })}
          </svg>
          <span className="chart-axis">{axis}</span>
        </div>
      </div>
      <Caption tag={captionTag}>{caption}</Caption>
    </figure>
  );
}

export function BeforeAfter({ alt, caption, tag }) {
  const [pos, setPos] = useState(0.5);
  const drag = useRef(false);
  const set = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    if (r.width) setPos(Math.max(0.02, Math.min(0.98, (e.clientX - r.left) / r.width)));
  };
  const key = (e) => {
    const step = e.shiftKey ? 0.1 : 0.02;
    let v = pos;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') v -= step;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') v += step;
    else if (e.key === 'Home') v = 0.02;
    else if (e.key === 'End') v = 0.98;
    else return;
    e.preventDefault();
    setPos(Math.max(0.02, Math.min(0.98, v)));
  };
  const pct = (pos * 100).toFixed(1) + '%';
  return (
    <figure className="fig breakout">
      <div className="ba-desk">
        <div className="cmp" onPointerDown={(e) => { drag.current = true; e.currentTarget.setPointerCapture?.(e.pointerId); set(e); }}
          onPointerMove={(e) => drag.current && set(e)} onPointerUp={() => { drag.current = false; }} onPointerCancel={() => { drag.current = false; }}>
          <div role="img" aria-label={alt} className="cmp-img">
            <div className="cmp-pane after" dangerouslySetInnerHTML={{ __html: deskAfter }} />
            <div className="cmp-pane before" style={{ clipPath: `inset(0 ${((1 - pos) * 100).toFixed(1)}% 0 0)` }} dangerouslySetInnerHTML={{ __html: deskBefore }} />
          </div>
          <span aria-hidden="true" className="cmp-line" style={{ left: pct }} />
          <span className="knob" role="slider" tabIndex={0} aria-label="Before and after divider" aria-valuemin={0} aria-valuemax={100}
            aria-valuenow={Math.round(pos * 100)} aria-valuetext={Math.round(pos * 100) + '% before'} onKeyDown={key} style={{ left: pct }}>↔</span>
        </div>
      </div>
      <div className="ba-phone" role="img" aria-label={alt}>
        <div className="ba-panel" dangerouslySetInnerHTML={{ __html: phoneBefore }} />
        <div className="ba-panel" dangerouslySetInnerHTML={{ __html: phoneAfter }} />
      </div>
      <Caption tag={tag}>{caption}</Caption>
    </figure>
  );
}

function Mark({ v }) {
  if (v === 'yes') return <span className="mark yes"><span aria-hidden="true" className="sq" />yes</span>;
  if (v === 'partial') return <span className="mark partial"><span aria-hidden="true" className="sq" />partial</span>;
  return <span className="mark nd">n/d</span>;
}

const ENDS = [0, 2, 6];

export function CoverageGrid({ data }) {
  const [ends, setEnds] = useState(false);
  const on = (j) => !ends || ENDS.includes(j);
  const lens = (
    <div role="group" aria-label="Grid lens" className="lens">
      <span className="lens-label">LENS</span>
      <button type="button" className={'btn lens-b' + (!ends ? ' on' : '')} aria-pressed={!ends} onClick={() => setEnds(false)}>ALL EIGHT</button>
      <button type="button" className={'btn lens-b' + (ends ? ' on' : '')} aria-pressed={ends} onClick={() => setEnds(true)}>THE ENDS · 1 · 3 · 7</button>
    </div>
  );
  const legend = (
    <div className="legend"><Mark v="yes" /><Mark v="partial" /><Mark v="n/d" /><span>{data.legend}</span></div>
  );
  const last = data.families.length - 1;
  return (
    <figure className="fig breakout">
      <div className="grid-box" aria-describedby="fig-grid-alt">
        <div className="grid-head">
          <span className="chart-title">{data.title}</span>
          <span className="tag-amber">{data.tag}</span>
        </div>
        <div className="grid-controls">{legend}{lens}</div>
        <span id="fig-grid-alt" className="sr-only">{data.alt}</span>
        <table className="tbl cov">
          <thead>
            <tr>
              <th scope="col" className="cov-fam">FAMILY</th>
              {data.columns.map((c, j) => (
                <th key={j} scope="col" style={{ opacity: on(j) ? 1 : 0.28 }}>
                  <span className="cov-n" style={{ color: ends && on(j) ? '#e0a54a' : '#6f6c66' }}>{j + 1}</span>
                  <span className="cov-c">{c}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.families.map((f, i) => (
              <tr key={i} className={'row' + (i === last ? ' feat-row' : '')}>
                <th scope="row">
                  <span className="cov-name">{f.name}</span>
                  {f.tools ? <span className="cov-tools">{f.tools}</span> : null}
                </th>
                {f.values.map((v, j) => <td key={j} style={{ opacity: on(j) ? 1 : 0.28 }}><Mark v={v} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cov-cards">
          {data.families.map((f, i) => (
            <div key={i} className={'cov-card' + (i === last ? ' feat' : '')}>
              <span className="cov-name">{f.name}</span>
              {f.tools ? <span className="cov-tools">{f.tools}</span> : null}
              <ul>
                {f.values.map((v, j) => (
                  <li key={j} style={{ opacity: on(j) ? 1 : 0.28 }}>
                    <span className="cov-line"><span className="cov-n" style={{ color: ends && on(j) ? '#e0a54a' : '#6f6c66' }}>{j + 1}</span>{data.columns[j]}</span>
                    <Mark v={v} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="foot-list">
          {data.footnotes.map((t, i) => <li key={i}><span aria-hidden="true" className="dot" /><span><Rich text={t} /></span></li>)}
        </ul>
      </div>
      <Caption tag={data.captionTag}>{data.caption}</Caption>
    </figure>
  );
}

export function UnderTheHood({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="hood">
      <button type="button" className="hood-b" aria-expanded={open} aria-controls="hood-body" onClick={() => setOpen(!open)}>
        <span className="hood-head">
          <span className="hood-chips"><span className="chip">UNDER THE HOOD</span><span className="hood-skip">OPTIONAL · SAFE TO SKIP</span></span>
          <span className="hood-title">{title}</span>
        </span>
        <span aria-hidden="true" className="hood-icon">{open ? '−' : '+'}</span>
      </button>
      {open ? <div id="hood-body" className="hood-body sheet">{children}</div> : null}
    </div>
  );
}
