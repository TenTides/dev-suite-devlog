import React from 'react';
import { Link } from 'react-router-dom';

// Generated from the design board Mobile.dc.html, then edited by hand where noted.
export default function HomePhoneView({ v }) {
  return (
    <div style={{ width: "100%", boxSizing: "border-box", position: "relative", overflow: "hidden", background: "#0b0b0a", color: "#ededE8", fontFamily: "'Geist', sans-serif", isolation: "isolate" }} className="board-root">
      <header style={{ position: "absolute", top: "0", left: "0", right: "0", zIndex: "6", height: "64px", boxSizing: "border-box", padding: "0 12px 0 16px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #1d1d1b", background: "rgba(11,11,10,0.85)", backdropFilter: "blur(12px)" }}>
        <Link to="/" aria-label="dev/suite home" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
        </Link>
        <div style={{ flexGrow: "1" }} />
        <button type="button" aria-label={v.menuLabel} onClick={v.toggleMenu} style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1px solid #2f2e2b", color: "#ededE8", fontSize: "16px", cursor: "pointer" }}>
          {v.menuIcon}
        </button>
      </header>
      {v.menuOpen ? (
        <>
          <div className="sheet" style={{ position: "absolute", top: "64px", left: "0", right: "0", zIndex: "5", background: "#0b0b0a", borderBottom: "1px solid #262522", padding: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <a href="#articles" style={{ padding: "16px 4px", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em", borderBottom: "1px solid #1d1d1b" }}>
              {"Articles"}
            </a>
            <Link to="/about" style={{ padding: "16px 4px", fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em", borderBottom: "1px solid #1d1d1b" }}>
              {"About"}
            </Link>
            <a href="#follow" style={{ marginTop: "16px", minHeight: "52px", display: "flex", alignItems: "center", justifyContent: "center", background: "#1fbf7f", color: "#06120c", fontSize: "15px", fontWeight: "500" }}>
              {"Join the waitlist"}
            </a>
          </div>
        </>
      ) : null}
      <section style={{ position: "relative", minHeight: "660px", boxSizing: "border-box", paddingBottom: "56px", overflow: "hidden", borderBottom: "1px solid #1d1d1b" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "64px", bottom: "0", fontFamily: "'Geist Mono', monospace", fontSize: "11px", lineHeight: "14px", whiteSpace: "pre", pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#22302a" }}>
            {(v.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#178a5c" }}>
            {(v.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#5ff0b4" }}>
            {(v.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", zIndex: "2", padding: "112px 16px 0", display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#b9b6ae", border: "1px solid #2f2e2b", background: "rgba(11,11,10,0.8)", padding: "7px 10px" }}>
            <span className="pulse" style={{ width: "6px", height: "6px", background: "#1fbf7f" }} />
            {"PRIVATE SOFTWARE \u00b7 PUBLIC NOTES"}
          </span>
          <h1 style={{ margin: "0", fontSize: "44px", lineHeight: "0.98", fontWeight: "600", letterSpacing: "-0.045em" }}>
            {"A governance harness for AI coding agents."}
            <br />
            <span style={{ color: "#6f6c66" }}>
              {"Notes from the build."}
            </span>
          </h1>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#b9b6ae" }}>
            {"Dev Suite runs teams of AI coding agents in sandboxes. Plans are attacked before any code is written, and nothing merges on an agent's word. This is the log of how it gets made."}
          </p>
          <a href="#articles" style={{ alignSelf: "flex-start", minHeight: "52px", display: "flex", alignItems: "center", padding: "0 22px", background: "#1fbf7f", color: "#06120c", fontSize: "15px", fontWeight: "500" }}>
            {"Read the latest \u2192"}
          </a>
        </div>
      </section>
      <section id="articles" style={{ padding: "64px 0 56px", display: "flex", flexDirection: "column", gap: "24px", borderBottom: "1px solid #1d1d1b", position: "relative", overflow: "hidden", isolation: "isolate" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "11px", lineHeight: "14px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#1f2d26" }}>
            {(v.fFeat?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#2c5c46" }}>
            {(v.fFeat?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#48a87c" }}>
            {(v.fFeat?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <span style={{ position: "absolute", right: "16px", top: "14px", fontSize: "10px", letterSpacing: "0.2em", color: "#4a4843" }}>
            {"FIELD 01"}
          </span>
        </div>
        <div style={{ padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#1fbf7f" }}>
              {"01 / LATEST"}
            </span>
            <h2 style={{ margin: "0", fontSize: "32px", fontWeight: "600", letterSpacing: "-0.03em" }}>
              {"Featured"}
            </h2>
          </div>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", color: "#9a978f" }}>
            <span style={{ color: "#ededE8" }}>
              {v.slideNum}
            </span>
            {" / " + v.count}
          </span>
        </div>
        <div style={{ paddingLeft: "16px", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "12px", transform: `translateX(-${v.offset ?? ""}px)`, transition: "transform 600ms cubic-bezier(.2,.8,.2,1)" }}>
            {(v.articles || []).map((a, a__i) => (
              <React.Fragment key={a__i}>
                <Link to={a?.href} style={{ flexShrink: "0", width: "322px", border: "1px solid #262522", background: "#111110", display: "flex", flexDirection: "column", opacity: a?.op, transition: "opacity .5s ease" }}>
                  <div style={{ position: "relative", height: "200px", margin: "6px", border: "1px solid #2f2e2b", overflow: "hidden", backgroundColor: "#121211", backgroundImage: a?.bg, backgroundSize: a?.size }}>
                    <span style={{ position: "absolute", left: "12px", bottom: "-4px", fontSize: "110px", fontWeight: "700", letterSpacing: "-0.06em", lineHeight: "1", color: "transparent", WebkitTextStroke: "1px #3a3935" }}>
                      {a?.n}
                    </span>
                    <span style={{ position: "absolute", left: "-1px", top: "-1px", width: "10px", height: "10px", borderLeft: "2px solid #1fbf7f", borderTop: "2px solid #1fbf7f" }} />
                  </div>
                  <div style={{ padding: "14px 18px 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "#9a978f" }}>
                      {a?.meta}
                    </span>
                    <span style={{ fontSize: "21px", fontWeight: "600", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                      {a?.title}
                    </span>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ padding: "0 16px", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ flexGrow: "1", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "6px" }}>
            {(v.segs || []).map((s, s__i) => (
              <React.Fragment key={s__i}>
                <span style={{ position: "relative", height: "2px", background: "#262522" }}>
                  <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: s?.w, background: "#1fbf7f" }} />
                </span>
              </React.Fragment>
            ))}
          </div>
          <button type="button" aria-label="Previous article" onClick={v.prev} style={{ width: "44px", height: "44px", border: "1px solid #2f2e2b", background: "transparent", color: "#b9b6ae", cursor: "pointer" }}>
            {"\u2190"}
          </button>
          <button type="button" aria-label="Next article" onClick={v.next} style={{ width: "44px", height: "44px", border: "1px solid #2f2e2b", background: "transparent", color: "#b9b6ae", cursor: "pointer" }}>
            {"\u2192"}
          </button>
        </div>
      </section>
      <section id="how" style={{ padding: "56px 16px", display: "flex", flexDirection: "column", gap: "20px", borderBottom: "1px solid #1d1d1b" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#1fbf7f" }}>
            {"02 / HOW IT WORKS"}
          </span>
          <h2 style={{ margin: "0", fontSize: "32px", fontWeight: "600", lineHeight: "1.05", letterSpacing: "-0.03em" }}>
            {"One feature, plan to merge."}
          </h2>
        </div>
        <ol style={{ margin: "0", padding: "0", listStyle: "none", borderBottom: "1px solid #1d1d1b" }}>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"01"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Written plan"}
                </span>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "#1fbf7f", border: "1px solid #1fbf7f", padding: "2px 6px" }}>
                  {"SKILL"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"Every feature starts as a written plan, not a prompt: what changes, why, and how you'll know it worked."}
              </span>
            </span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"02"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Cross-validated"}
                </span>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "#1fbf7f", border: "1px solid #1fbf7f", padding: "2px 6px" }}>
                  {"SKILL"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"Independent AI reviewers try to break the plan before any code exists, checking every claim against the real code. A plan that fails goes back to be rewritten."}
              </span>
            </span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"03"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Split into slices"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"The conductor cuts the approved plan into slices, each scoped to its own part of the code, so agents working in parallel never collide."}
              </span>
            </span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"04"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Green-lit"}
                </span>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "#e0a54a", border: "1px solid #e0a54a", padding: "2px 6px" }}>
                  {"YOU"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"You see what each slice may touch, sign off on anything risky, and release the deploy."}
              </span>
            </span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"05"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Built"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"Each agent builds its slice in its own copy of the code, inside its workspace's sandbox, with only the permissions its slice needs."}
              </span>
            </span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"06"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Watched live"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"A live view shows what every agent is doing, what it touched and how it ended. You can step in at any time."}
              </span>
            </span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"07"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Checked"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"A reviewer who didn't write the code gives it an adversarial review, and linting, type checks and the full back-end test suite at 100% coverage must pass. Where it matters, a live drill proves it on the real system and the result is measured, not assumed. Anything that fails goes back to its agent."}
              </span>
            </span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "32px minmax(0, 1fr)", gap: "10px", padding: "18px 0", borderTop: "1px solid #1d1d1b" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "24px", color: "#1fbf7f" }}>
              {"08"}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.015em" }}>
                  {"Merged"}
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
                {"It merges once every check passes. Whatever went wrong along the way is written into gitmem for next time."}
              </span>
            </span>
          </li>
        </ol>
        <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#9a978f" }}>
          {"Every agent is assembled from the shared library: its persona, skills, MCP servers and sandbox setup. Before the plan is written and before each agent starts, it checks memory and knowledge: past lessons in gitmem, a map of the code, and a knowledge graph of the work in flight. Lessons are kept by gitmem, made by nTEG Labs; I'm part of the team that builds it."}
        </span>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", lineHeight: "1.6", letterSpacing: "0.14em", color: "#6f6c66" }}>
          {"FIVE INTERACTIVE VIEWS ON A LARGER SCREEN \u00b7 AS OF 2026-09-30"}
        </span>
      </section>
      <section style={{ padding: "56px 16px", display: "flex", flexDirection: "column", gap: "8px", borderBottom: "1px solid #1d1d1b" }}>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#1fbf7f", paddingBottom: "12px" }}>
          {"03 / ALL ARTICLES"}
        </span>
        {(v.articles || []).map((a, a__i) => (
          <React.Fragment key={a__i}>
            <Link to={a?.href} style={{ display: "grid", gridTemplateColumns: "76px minmax(0, 1fr)", gap: "14px", padding: "14px 0", borderBottom: "1px solid #1d1d1b" }}>
              <span style={{ height: "76px", border: "1px solid #2f2e2b", backgroundColor: "#121211", backgroundImage: a?.bg, backgroundSize: a?.size }} />
              <span style={{ display: "flex", flexDirection: "column", gap: "6px", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "#9a978f" }}>
                  {a?.n}
                  {" \u00b7 "}
                  {a?.meta}
                </span>
                <span style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.015em" }}>
                  {a?.title}
                </span>
              </span>
            </Link>
          </React.Fragment>
        ))}
      </section>
      <section id="follow" style={{ padding: "56px 16px 64px", display: "flex", flexDirection: "column", gap: "18px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "11px", lineHeight: "14px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#1f2d26" }}>
            {(v.fFollow?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#2c5c46" }}>
            {(v.fFollow?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#48a87c" }}>
            {(v.fFollow?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "14px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <span style={{ position: "absolute", right: "16px", top: "14px", fontSize: "10px", letterSpacing: "0.2em", color: "#4a4843" }}>
            {"FIELD 02"}
          </span>
        </div>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#1fbf7f" }}>
          {"04 / FOLLOW THE BUILD"}
        </span>
        <h2 style={{ margin: "0", fontSize: "36px", fontWeight: "600", lineHeight: "1.02", letterSpacing: "-0.04em" }}>
          {"Be early to Dev Suite."}
        </h2>
        <form onSubmit={v.submit} style={{ border: "1px solid #262522", background: "#111110", padding: "10px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "4px", padding: "4px", background: "#0b0b0a", border: "1px solid #262522" }}>
            <button type="button" onClick={v.pickWaitlist} style={{ minHeight: "44px", border: "0", fontFamily: "'Geist', sans-serif", fontSize: "14px", fontWeight: "500", background: v.tabA?.bg, color: v.tabA?.fg, cursor: "pointer" }}>
              {"Waitlist"}
            </button>
            <button type="button" onClick={v.pickArticles} style={{ minHeight: "44px", border: "0", fontFamily: "'Geist', sans-serif", fontSize: "14px", fontWeight: "500", background: v.tabB?.bg, color: v.tabB?.fg, cursor: "pointer" }}>
              {"New articles"}
            </button>
          </div>
          <div style={{ padding: "8px 10px 12px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {v.notSent ? (
              <>
                <label htmlFor="me" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                  {"EMAIL"}
                </label>
                <input id="me" name="email" type="email" autoComplete="email" aria-invalid={v.formErr ? "true" : "false"} placeholder="you@company.com" style={{ minHeight: "52px", padding: "0 14px", background: "#0b0b0a", border: "1px solid #2f2e2b", color: "#ededE8", fontFamily: "'Geist', sans-serif", fontSize: "16px" }} />
                <button type="submit" disabled={v.busy} style={{ minHeight: "52px", border: "0", background: "#1fbf7f", color: "#06120c", fontFamily: "'Geist', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                  {v.cta}
                </button>
                {v.formErr ? (
                  <span role="alert" style={{ fontSize: "13px", lineHeight: "1.5", color: "#ff9a8e" }}>
                    {v.formErr}
                  </span>
                ) : null}
              </>
            ) : null}
            {v.sent ? (
              <>
                <div style={{ minHeight: "52px", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px", border: "1px solid #1f5f45", background: "#0f1d17", color: "#b9f2d8", fontSize: "15px" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
          <Link to="/about#contact" style={{ minHeight: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #2f2e2b", fontSize: "14px", color: "#b9b6ae" }}>
            {"Get in touch"}
          </Link>
          <a href="https://buymeacoffee.com/tylercrawford" target="_blank" rel="noopener" style={{ minHeight: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #2f2e2b", fontSize: "14px", color: "#b9b6ae" }}>
            {"Support the build"}
          </a>
        </div>
      </section>
      <footer style={{ position: "relative", boxSizing: "border-box", padding: "24px 16px", borderTop: "1px solid #1d1d1b", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "10px", lineHeight: "1.6", letterSpacing: "0.1em", color: "#6f6c66" }}>
        <span style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", fontFamily: "'Geist', sans-serif", fontSize: "13px", letterSpacing: "0" }}>
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
        </span>
        <span>
          {"\u00a9 2026 nTEG, LLC. ARTICLE TEXT CC BY-NC-ND 4.0. DEV SUITE SOFTWARE IS PROPRIETARY."}
        </span>
        <span>
          {"EVERY ENTRY IS DATED. NONE DESCRIBES THE PRESENT."}
        </span>
      </footer>
    </div>
  );
}
