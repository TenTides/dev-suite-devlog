import React from 'react';
import { Link } from 'react-router-dom';

// Generated from the design board Main.dc.html, then edited by hand where noted.
export default function HomeDesktopView({ v }) {
  return (
    <div style={{ width: "100%", boxSizing: "border-box", position: "relative", overflow: "hidden", background: "#0b0b0a", color: "#ededE8", fontFamily: "'Geist', sans-serif", isolation: "isolate" }} className="board-root">
      <header style={{ position: "absolute", top: "0", left: "0", right: "0", zIndex: "5", height: "72px", boxSizing: "border-box", padding: "0 var(--gx40)", display: "flex", alignItems: "center", gap: "40px", borderBottom: "1px solid #1d1d1b", background: "rgba(11,11,10,0.72)", backdropFilter: "blur(12px)" }}>
        <Link to="/" aria-label="dev/suite home" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M19 8H10V40H19" stroke="#ededE8" strokeWidth="5" />
            <path d="M24 8H30L38 16V32L30 40H24" stroke="#ededE8" strokeWidth="5" strokeLinejoin="miter" />
            <rect className="lg-pulse" x="15" y="31" width="12" height="5" fill="#1fbf7f" />
          </svg>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "18px", fontWeight: "500", letterSpacing: "-0.02em" }}>
            {"dev/suite"}
            <span className="lg-pulse" style={{ color: "#1fbf7f" }}>
              {"_"}
            </span>
          </span>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#9a978f", border: "1px solid #2f2e2b", padding: "4px 8px" }}>
            {"DEV LOG"}
          </span>
        </Link>
        <nav style={{ display: "flex", gap: "32px", fontSize: "14px" }}>
          <a href="#articles" style={{ color: "#ededE8" }}>
            {"Articles"}
          </a>
          <Link to="/about" style={{ color: "#9a978f" }}>
            {"About"}
          </Link>
        </nav>
        <div style={{ flexGrow: "1" }} />
        <Link to="/about#contact" className="btn btn-ghost" style={{ fontSize: "14px", color: "#b9b6ae", border: "1px solid #2f2e2b", padding: "11px 18px" }}>
          {"Get in touch"}
        </Link>
        <a href="#follow" className="btn btn-primary" style={{ fontSize: "14px", fontWeight: "500", color: "#06120c", background: "#1fbf7f", padding: "12px 18px" }}>
          {"Join the waitlist"}
        </a>
      </header>
      <section onMouseMove={v.onHeroMove} onMouseLeave={v.onHeroLeave} style={{ position: "relative", height: "820px", overflow: "hidden", borderBottom: "1px solid #1d1d1b" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "64px", right: "0", bottom: "0", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#22302a" }}>
            {(v.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#178a5c" }}>
            {(v.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#5ff0b4" }}>
            {(v.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", zIndex: "2", padding: "144px var(--gx) 0", display: "flex", flexDirection: "column", gap: "26px", maxWidth: "1000px" }}>
          <span className="rise" style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.18em", color: "#b9b6ae", border: "1px solid #2f2e2b", background: "rgba(11,11,10,0.8)", padding: "8px 12px" }}>
            <span className="pulse" style={{ width: "7px", height: "7px", background: "#1fbf7f" }} />
            {"PRIVATE SOFTWARE \u00b7 PUBLIC NOTES"}
          </span>
          <h1 className="rise d1" style={{ margin: "0", fontSize: "84px", lineHeight: "0.98", fontWeight: "600", letterSpacing: "-0.045em" }}>
            {"A governance harness for AI coding agents."}
            <br />
            <span style={{ color: "#6f6c66" }}>
              {"Notes from the build."}
            </span>
          </h1>
          <p className="rise d2" style={{ margin: "0", maxWidth: "760px", fontSize: "19px", lineHeight: "1.6", color: "#b9b6ae" }}>
            {"Dev Suite runs teams of AI coding agents in sandboxes. Independent reviewers attack the plan before any code is written and review the code before it merges. A person green-lights every deploy, and nothing merges on an agent's word. This is the log of how it gets made."}
          </p>
          <div className="rise d3" style={{ display: "flex", gap: "12px", paddingTop: "8px" }}>
            <a href="#articles" className="btn btn-primary" style={{ fontSize: "15px", fontWeight: "500", color: "#06120c", background: "#1fbf7f", padding: "16px 24px" }}>
              {"Read the latest \u2192"}
            </a>
            <a href="#follow" className="btn btn-ghost" style={{ fontSize: "15px", color: "#b9b6ae", border: "1px solid #2f2e2b", background: "rgba(11,11,10,0.8)", padding: "15px 24px" }}>
              {"Join the waitlist"}
            </a>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", zIndex: "2", height: "52px", borderTop: "1px solid #1d1d1b", background: "rgba(11,11,10,0.86)", overflow: "hidden", display: "flex", alignItems: "center" }}>
          <div className="marquee" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.2em", color: "#9a978f" }}>
            <span>
              {"WRITE THE PLAN"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"ATTACK IT"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"SPLIT IT"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"GREEN-LIGHT IT"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"BUILD IN SANDBOXES"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"WATCH IT LIVE"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"VERIFY, MERGE, REMEMBER"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"WRITE THE PLAN"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"ATTACK IT"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"SPLIT IT"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"GREEN-LIGHT IT"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"BUILD IN SANDBOXES"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"WATCH IT LIVE"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
            <span>
              {"VERIFY, MERGE, REMEMBER"}
            </span>
            <span style={{ color: "#1fbf7f" }}>
              {"\u25c6"}
            </span>
          </div>
        </div>
      </section>
      <section id="articles" onMouseEnter={v.pause} onMouseLeave={v.resume} style={{ padding: "120px 0 110px", display: "flex", flexDirection: "column", gap: "44px", borderBottom: "1px solid #1d1d1b", position: "relative", overflow: "hidden", isolation: "isolate" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#3a3935" }}>
            {(v.fFeat?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#6f6c66" }}>
            {(v.fFeat?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#c9f5e0" }}>
            {(v.fFeat?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <span style={{ position: "absolute", right: "16px", top: "14px", fontSize: "10px", letterSpacing: "0.2em", color: "#4a4843" }}>
            {"FIELD 01 \u00b7 METEORS"}
          </span>
        </div>
        <div style={{ padding: "0 var(--gx)", marginBottom: "110px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
              {"01 / LATEST"}
            </span>
            <h2 style={{ margin: "0", fontSize: "52px", fontWeight: "600", letterSpacing: "-0.035em" }}>
              {"Featured articles"}
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "13px", color: "#9a978f" }}>
              <span style={{ color: "#ededE8" }}>
                {v.slideNum}
              </span>
              {" / " + v.count}
            </span>
            <button type="button" aria-label="Previous article" onClick={v.prev} className="btn btn-ghost" style={{ width: "52px", height: "52px", background: "transparent", border: "1px solid #2f2e2b", color: "#b9b6ae", fontSize: "18px", cursor: "pointer" }}>
              {"\u2190"}
            </button>
            <button type="button" aria-label="Next article" onClick={v.next} className="btn btn-ghost" style={{ width: "52px", height: "52px", background: "transparent", border: "1px solid #2f2e2b", color: "#b9b6ae", fontSize: "18px", cursor: "pointer" }}>
              {"\u2192"}
            </button>
          </div>
        </div>
        <div style={{ paddingLeft: "var(--gx)", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "24px", transform: `translateX(-${v.offset ?? ""}px)`, transition: "transform 700ms cubic-bezier(.2,.8,.2,1)" }}>
            {(v.articles || []).map((a, a__i) => (
              <React.Fragment key={a__i}>
                <Link to={a?.href} className="card" style={{ flexShrink: "0", width: "1100px", height: "520px", display: "grid", gridTemplateColumns: "640px minmax(0, 1fr)", border: "1px solid #262522", background: "#111110", opacity: a?.op, transition: "opacity .6s ease, border-color .3s ease, transform .3s ease" }}>
                  <div style={{ position: "relative", margin: "10px", border: "1px solid #2f2e2b", overflow: "hidden" }}>
                    <div className="pat" style={{ position: "absolute", inset: "0", backgroundColor: "#121211", backgroundImage: a?.bg, backgroundSize: a?.size }} />
                    <span style={{ position: "absolute", left: "24px", bottom: "6px", fontSize: "220px", fontWeight: "700", letterSpacing: "-0.06em", lineHeight: "1", color: "transparent", WebkitTextStroke: "1px #3a3935" }}>
                      {a?.n}
                    </span>
                    <span style={{ position: "absolute", right: "14px", top: "14px", fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#9a978f", background: "#0b0b0a", border: "1px solid #2f2e2b", padding: "5px 8px" }}>
                      {"[BANNER IMAGE]"}
                    </span>
                    <span style={{ position: "absolute", left: "-1px", top: "-1px", width: "14px", height: "14px", borderLeft: "2px solid #1fbf7f", borderTop: "2px solid #1fbf7f" }} />
                    <span style={{ position: "absolute", right: "-1px", bottom: "-1px", width: "14px", height: "14px", borderRight: "2px solid #1fbf7f", borderBottom: "2px solid #1fbf7f" }} />
                  </div>
                  <div style={{ padding: "44px 44px 40px 36px", display: "flex", flexDirection: "column", gap: "18px" }}>
                    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.2em", color: "#1fbf7f" }}>
                      {"ARTICLE "}
                      {a?.n}
                    </span>
                    <span style={{ fontSize: "38px", fontWeight: "600", lineHeight: "1.08", letterSpacing: "-0.03em" }}>
                      {a?.title}
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "1.65", color: "#9a978f" }}>
                      {a?.excerpt}
                    </span>
                    <div style={{ flexGrow: "1" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "18px", borderTop: "1px solid #262522", fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", color: "#9a978f" }}>
                      <span>
                        {a?.meta}
                      </span>
                      <span className="go" style={{ fontSize: "16px" }}>
                        {"\u2192"}
                      </span>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ padding: "0 var(--gx)", display: "grid", gridTemplateColumns: `repeat(${(v.segs || []).length || 1}, minmax(0, 1fr))`, gap: "8px" }}>
          {(v.segs || []).map((s, s__i) => (
            <React.Fragment key={s__i}>
              <button type="button" aria-label={s?.label} onClick={s?.go} style={{ height: "28px", padding: "0", background: "transparent", border: "0", cursor: "pointer", display: "flex", alignItems: "center" }}>
                <span style={{ position: "relative", display: "block", width: "100%", height: "2px", background: "#262522" }}>
                  <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: s?.w, background: "#1fbf7f" }} />
                </span>
              </button>
            </React.Fragment>
          ))}
        </div>
      </section>
      <section style={{ position: "relative", padding: "140px var(--gx)", borderBottom: "1px solid #1d1d1b", overflow: "hidden", background: "#0b0b0a" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", color: "#25312b", pointerEvents: "none" }}>
          {(v.bgRows || []).map((r, r__i) => (
            <React.Fragment key={r__i}>
              <div style={{ height: "16px" }}>
                {r}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div style={{ position: "relative", zIndex: "1", display: "flex", flexDirection: "column", gap: "44px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
                {"02 / ARCHITECTURE"}
              </span>
              <h2 style={{ margin: "0", fontSize: "52px", fontWeight: "600", lineHeight: "1.02", letterSpacing: "-0.035em" }}>
                {"How Dev Suite fits together."}
              </h2>
              <p style={{ margin: "0", maxWidth: "760px", fontSize: "18px", lineHeight: "1.6", color: "#b9b6ae" }}>
                {"Five views of one system: the path a feature takes, who does what, what one agent gets, what a deploy is built from, and what it remembers."}
              </p>
            </div>
            <div role="tablist" aria-label="Diagrams" style={{ display: "flex", gap: "4px", padding: "4px", border: "1px solid #262522", background: "rgba(11,11,10,0.9)" }}>
              {(v.diagTabs || []).map((d, d__i) => (
                <React.Fragment key={d__i}>
                  <button type="button" role="tab" aria-selected={d?.on} onClick={d?.pick} style={{ minHeight: "44px", padding: "0 16px", border: "0", cursor: "pointer", fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", background: d?.bg, color: d?.fg, transition: "background-color .25s ease, color .25s ease" }}>
                    {d?.n}
                    {"  "}
                    {d?.title}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "902px minmax(0, 1fr)", gap: "20px" }}>
            <div style={{ position: "relative", border: "1px solid #2f2e2b", background: "rgba(11,11,10,0.94)", padding: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", border: "1px solid #262522", borderBottom: "0", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="pulse" style={{ width: "7px", height: "7px", background: "#1fbf7f" }} />
                  {v.diagTitle}
                </span>
                <span>
                  {v.diagHint}
                </span>
              </div>
              <div style={{ position: "relative", width: "880px", height: "560px", border: "1px solid #262522", backgroundImage: "radial-gradient(#1b1b19 1px, transparent 1px)", backgroundSize: "16px 16px", overflow: "hidden" }}>
                {v.frameOn ? (
                  <>
                    <div aria-hidden="true" style={{ position: "absolute", left: "600px", top: "100px", width: "152px", height: "350px", boxSizing: "border-box", border: "1px dashed #1fbf7f", opacity: "0.7", pointerEvents: "none" }} />
                    <span style={{ position: "absolute", left: "600px", top: "82px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", color: "#6f6c66", pointerEvents: "none" }}>
                      {"WORKSPACE SANDBOX"}
                    </span>
                  </>
                ) : null}
                <svg width="880" height="560" viewBox="0 0 880 560" fill="none" style={{ position: "absolute", left: "0", top: "0" }}>
                  {(v.edges || []).map((e, e__i) => (
                    <React.Fragment key={e__i}>
                      <path className="flow" d={e?.d} stroke={e?.stroke} strokeWidth="1.5" style={{ transition: "stroke .3s ease", strokeDasharray: e?.dash, animation: e?.anim }} />
                    </React.Fragment>
                  ))}
                </svg>
                {(v.edges || []).map((e, e__i) => (
                  <React.Fragment key={e__i}>
                    <span style={{ position: "absolute", left: "0", top: "0", width: "6px", height: "6px", margin: "-3px 0 0 -3px", background: e?.dot, offsetPath: `path('${e?.d ?? ""}')`, offsetRotate: "0deg", animation: `travel ${e?.dur ?? ""}s linear infinite`, animationDelay: `${e?.delay ?? ""}s`, opacity: e?.dotOp }} />
                  </React.Fragment>
                ))}
                {(v.nodes || []).map((n, n__i) => (
                  <React.Fragment key={n__i}>
                    <button type="button" aria-pressed={n?.on} onClick={n?.pick} style={{ position: "absolute", left: `${n?.x ?? ""}px`, top: `${n?.y ?? ""}px`, width: `${n?.w ?? ""}px`, height: "64px", boxSizing: "border-box", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "4px", textAlign: "left", cursor: "pointer", border: `1px ${n?.bs ?? ""} ${n?.bd ?? ""}`, background: n?.bg, color: n?.lc, fontFamily: "'Geist', sans-serif", transition: "left .7s cubic-bezier(.2,.8,.2,1), top .7s cubic-bezier(.2,.8,.2,1), width .7s cubic-bezier(.2,.8,.2,1), border-color .25s ease, background-color .25s ease", boxShadow: n?.glow }}>
                      <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.16em", color: n?.tagc }}>
                        {n?.tag}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.01em" }}>
                        {n?.label}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{ border: "1px solid #2f2e2b", background: "rgba(17,17,16,0.96)", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                <span style={{ color: v.selTagc }}>
                  {v.selTag}
                </span>
                <span>
                  {v.selPos}
                </span>
              </div>
              <span style={{ fontSize: "28px", fontWeight: "600", lineHeight: "1.1", letterSpacing: "-0.025em" }}>
                {v.selLabel}
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.7", color: "#b9b6ae" }}>
                {v.selDesc}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px", borderTop: "1px solid #262522" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                  {"CONNECTS TO"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {(v.links || []).map((l, l__i) => (
                    <React.Fragment key={l__i}>
                      <button type="button" onClick={l?.pick} className="btn btn-ghost" style={{ minHeight: "36px", padding: "0 10px", border: "1px solid #2f2e2b", background: "transparent", color: "#b9b6ae", fontFamily: "'Geist', sans-serif", fontSize: "13px", cursor: "pointer" }}>
                        {l?.text}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{ flexGrow: "1" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button type="button" aria-label="Previous block" onClick={v.selPrev} className="btn btn-ghost" style={{ width: "44px", height: "44px", border: "1px solid #2f2e2b", background: "transparent", color: "#b9b6ae", cursor: "pointer" }}>
                  {"\u2190"}
                </button>
                <button type="button" aria-label="Next block" onClick={v.selNext} className="btn btn-ghost" style={{ width: "44px", height: "44px", border: "1px solid #2f2e2b", background: "transparent", color: "#b9b6ae", cursor: "pointer" }}>
                  {"\u2192"}
                </button>
                <div style={{ flexGrow: "1" }} />
                <button type="button" onClick={v.toggleTour} aria-pressed={v.tour} className="btn btn-ghost" style={{ minHeight: "44px", padding: "0 14px", display: "flex", alignItems: "center", gap: "8px", border: `1px solid ${v.tourBd ?? ""}`, background: "transparent", color: "#ededE8", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", cursor: "pointer" }}>
                  {v.tourIcon}
                  {" "}
                  {v.tourLabel}
                </button>
              </div>
            </div>
          </div>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#6f6c66" }}>
            {"SIMPLIFIED, NOT A BLUEPRINT \u00b7 CLICK ANY BLOCK \u00b7 SKILL = BUILT INTO THE AGENTS' SKILLS \u00b7 PLANNED = NOT BUILT YET \u00b7 AS OF [YYYY-MM-DD]"}
          </span>
        </div>
      </section>
      <section style={{ padding: "120px var(--gx)", display: "flex", flexDirection: "column", gap: "44px", borderBottom: "1px solid #1d1d1b", position: "relative", overflow: "hidden", isolation: "isolate" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#3a3935" }}>
            {(v.fArch?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#6f6c66" }}>
            {(v.fArch?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#c9f5e0" }}>
            {(v.fArch?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
              {"03 / ARCHIVE"}
            </span>
            <h2 style={{ margin: "0", fontSize: "52px", fontWeight: "600", letterSpacing: "-0.035em" }}>
              {"All articles"}
            </h2>
          </div>
          <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
            {"Newest first"}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "24px" }}>
          {(v.articles || []).map((a, a__i) => (
            <React.Fragment key={a__i}>
              <Link to={a?.href} className="card" style={{ display: "flex", flexDirection: "column", border: "1px solid #262522", background: "#111110" }}>
                <div style={{ position: "relative", height: "230px", margin: "8px", border: "1px solid #2f2e2b", overflow: "hidden" }}>
                  <div className="pat" style={{ position: "absolute", inset: "0", backgroundColor: "#121211", backgroundImage: a?.bg, backgroundSize: a?.size }} />
                  <span style={{ position: "absolute", left: "16px", bottom: "0", fontSize: "110px", fontWeight: "700", letterSpacing: "-0.06em", lineHeight: "1", color: "transparent", WebkitTextStroke: "1px #3a3935" }}>
                    {a?.n}
                  </span>
                  <span style={{ position: "absolute", left: "-1px", top: "-1px", width: "10px", height: "10px", borderLeft: "2px solid #1fbf7f", borderTop: "2px solid #1fbf7f" }} />
                  <span style={{ position: "absolute", right: "-1px", bottom: "-1px", width: "10px", height: "10px", borderRight: "2px solid #1fbf7f", borderBottom: "2px solid #1fbf7f" }} />
                </div>
                <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#9a978f" }}>
                    {a?.meta}
                  </span>
                  <span style={{ fontSize: "23px", fontWeight: "600", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                    {a?.title}
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                    {a?.excerpt}
                  </span>
                  <span className="go" style={{ paddingTop: "6px", fontSize: "14px", color: "#b9b6ae" }}>
                    {"Read \u2192"}
                  </span>
                </div>
              </Link>
            </React.Fragment>
          ))}
          <a href="#follow" onClick={v.pickArticles} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px dashed #2f2e2b", padding: "32px", minHeight: "420px", boxSizing: "border-box" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.18em", color: "#9a978f" }}>
              {"NEXT ENTRY"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "40px", color: "#1fbf7f" }}>
                {"_"}
              </span>
              <span style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>
                {"More is being written."}
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"Get an email when the next article lands."}
              </span>
            </div>
            <span className="go" style={{ fontSize: "14px", color: "#b9b6ae" }}>
              {"Notify me \u2192"}
            </span>
          </a>
        </div>
      </section>
      <section id="follow" style={{ position: "relative", padding: "120px var(--gx)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 560px", gap: "80px", overflow: "hidden", isolation: "isolate" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#1f2d26" }}>
            {(v.fFollow?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#2c5c46" }}>
            {(v.fFollow?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#48a87c" }}>
            {(v.fFollow?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <span style={{ position: "absolute", right: "16px", top: "14px", fontSize: "10px", letterSpacing: "0.2em", color: "#4a4843" }}>
            {"FIELD 04 \u00b7 SIGNAL"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
            {"04 / FOLLOW THE BUILD"}
          </span>
          <h2 style={{ margin: "0", fontSize: "64px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" }}>
            {"Be early to Dev Suite."}
          </h2>
          <p style={{ margin: "0", maxWidth: "520px", fontSize: "18px", lineHeight: "1.65", color: "#9a978f" }}>
            {"Join the waitlist for access when it opens, or just get the next article in your inbox."}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px", paddingTop: "24px", maxWidth: "620px" }}>
            <Link to="/about#contact" className="card" style={{ border: "1px solid #262522", background: "#111110", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "17px", fontWeight: "600" }}>
                {"Get in touch "}
                <span className="go">
                  {"\u2192"}
                </span>
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#9a978f" }}>
                {"Want a demo, or want to talk about the work? Write to the creator."}
              </span>
            </Link>
            <a href="[BUY ME A COFFEE URL]" target="_blank" rel="noopener" className="card" style={{ border: "1px solid #262522", background: "#111110", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "17px", fontWeight: "600" }}>
                {"Support the build "}
                <span className="go">
                  {"\u2192"}
                </span>
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#9a978f" }}>
                {"Buy me a coffee while it's being made."}
              </span>
            </a>
          </div>
        </div>
        <form onSubmit={v.submit} style={{ alignSelf: "start", border: "1px solid #262522", background: "#111110", padding: "12px", display: "flex", flexDirection: "column", gap: "0" }}>
          <div role="tablist" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "4px", padding: "4px", background: "#0b0b0a", border: "1px solid #262522" }}>
            <button type="button" role="tab" onClick={v.pickWaitlist} style={{ minHeight: "44px", border: "0", cursor: "pointer", fontFamily: "'Geist', sans-serif", fontSize: "14px", fontWeight: "500", background: v.tabA?.bg, color: v.tabA?.fg, transition: "background-color .25s ease" }}>
              {"Waitlist"}
            </button>
            <button type="button" role="tab" onClick={v.pickArticles} style={{ minHeight: "44px", border: "0", cursor: "pointer", fontFamily: "'Geist', sans-serif", fontSize: "14px", fontWeight: "500", background: v.tabB?.bg, color: v.tabB?.fg, transition: "background-color .25s ease" }}>
              {"New articles"}
            </button>
          </div>
          <div style={{ padding: "32px 24px 24px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-0.02em" }}>
              {v.formTitle}
            </span>
            <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#9a978f" }}>
              {v.formBody}
            </span>
            {v.notSent ? (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="email" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                    {"EMAIL"}
                  </label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input id="email" type="email" placeholder="you@company.com" style={{ flexGrow: "1", minHeight: "52px", boxSizing: "border-box", padding: "0 16px", background: "#0b0b0a", border: "1px solid #2f2e2b", color: "#ededE8", fontFamily: "'Geist', sans-serif", fontSize: "15px", transition: "border-color .2s ease" }} />
                    <button type="submit" className="btn btn-primary" style={{ minHeight: "52px", padding: "0 22px", border: "0", background: "#1fbf7f", color: "#06120c", fontFamily: "'Geist', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                      {v.cta}
                    </button>
                  </div>
                </div>
              </>
            ) : null}
            {v.sent ? (
              <>
                <div className="rise" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "0 16px", border: "1px solid #1f5f45", background: "#0f1d17", fontSize: "15px", color: "#b9f2d8" }}>
                  <span style={{ color: "#1fbf7f" }}>
                    {"\u2713"}
                  </span>
                  {v.doneText}
                </div>
              </>
            ) : null}
            <span style={{ fontSize: "12px", lineHeight: "1.6", color: "#6f6c66" }}>
              {v.fine}
              {" "}
              <Link to="/licensing#privacy" style={{ color: "#9a978f", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                {"Privacy \u2192"}
              </Link>
            </span>
          </div>
        </form>
      </section>
      <footer style={{ position: "relative", boxSizing: "border-box", padding: "48px var(--gx) 36px", borderTop: "1px solid #1d1d1b", display: "flex", flexDirection: "column", gap: "40px", background: "#0b0b0a" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M19 8H10V40H19" stroke="#ededE8" strokeWidth="5" />
              <path d="M24 8H30L38 16V32L30 40H24" stroke="#ededE8" strokeWidth="5" strokeLinejoin="miter" />
              <rect className="lg-pulse" x="15" y="31" width="12" height="5" fill="#1fbf7f" />
            </svg>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "16px", fontWeight: "500", letterSpacing: "-0.02em" }}>
              {"dev/suite"}
              <span className="lg-pulse" style={{ color: "#1fbf7f" }}>
                {"_"}
              </span>
            </span>
          </div>
          <nav style={{ display: "flex", gap: "32px", fontSize: "14px", color: "#9a978f" }}>
            <a href="#articles" style={{ color: "#9a978f" }}>
              {"Articles"}
            </a>
            <Link to="/about" style={{ color: "#9a978f" }}>
              {"About"}
            </Link>
            <Link to="/licensing" style={{ color: "#9a978f" }}>
              {"Licensing & privacy"}
            </Link>
            <Link to="/about#contact" style={{ color: "#9a978f" }}>
              {"Contact"}
            </Link>
          </nav>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "24px", borderTop: "1px solid #1d1d1b", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#6f6c66" }}>
          <span>
            {"\u00a9 2026 nTEG, LLC. ARTICLE TEXT CC BY-NC-ND 4.0. DEV SUITE SOFTWARE IS PROPRIETARY."}
          </span>
          <span>
            {"EVERY ENTRY IS DATED. NONE DESCRIBES THE PRESENT."}
          </span>
        </div>
      </footer>
    </div>
  );
}
