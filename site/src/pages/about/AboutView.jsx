import React from 'react';
import { Link } from 'react-router-dom';

const media = (f) => import.meta.env.BASE_URL + 'media/' + f;

// Generated from the design board About.dc.html, then edited by hand where noted.
export default function AboutView({ v }) {
  return (
    <div style={{ width: "100%", boxSizing: "border-box", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", background: "#0b0b0a", color: "#ededE8", fontFamily: "'Geist', sans-serif", isolation: "isolate" }} className="board-root">
      <header className="desk-only" style={{ flexShrink: "0", height: "72px", boxSizing: "border-box", padding: "0 var(--gx40)", display: "flex", alignItems: "center", gap: "40px", borderBottom: "1px solid #1d1d1b", background: "#0b0b0a" }}>
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
          <Link to="/" style={{ color: "#9a978f" }}>
            {"Articles"}
          </Link>
          <Link to="/about" style={{ color: "#ededE8" }}>
            {"About"}
          </Link>
        </nav>
        <div style={{ flexGrow: "1" }} />
        <a href="#contact" className="btn btn-ghost" style={{ fontSize: "14px", color: "#b9b6ae", border: "1px solid #2f2e2b", padding: "11px 18px" }}>
          {"Get in touch"}
        </a>
        <Link to="/#follow" className="btn btn-primary" style={{ fontSize: "14px", fontWeight: "500", color: "#06120c", background: "#1fbf7f", padding: "12px 18px" }}>
          {"Join the waitlist"}
        </Link>
      </header>
      <section className="ab-hero" style={{ position: "relative", isolation: "isolate", overflow: "hidden", flexShrink: "0", height: "848px", boxSizing: "border-box", padding: "104px var(--gx) 0", borderBottom: "1px solid #1d1d1b" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#3a3935" }}>
            {(v.road?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#6f6c66" }}>
            {(v.road?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#c9f5e0" }}>
            {(v.road?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#2fb57e" }}>
            {(v.road?.acc || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "900px" }}>
          <span className="rise" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
            {"ABOUT"}
          </span>
          <h1 className="rise d1 ab-h1" style={{ margin: "0", fontSize: "72px", lineHeight: "1", fontWeight: "600", letterSpacing: "-0.045em" }}>
            {"Productive AI agents, held accountable from the plan to the merge."}
          </h1>
          <p className="rise d2" style={{ margin: "0", maxWidth: "680px", fontSize: "19px", lineHeight: "1.65", color: "#b9b6ae" }}>
            {"Dev Suite is a governance harness for AI coding agents. From the plan to the merge, every step is visible, nothing ships on an agent's word alone, and it stays efficient with tokens. The software is private while it's built. This log is where the work is shown."}
          </p>
          <div className="ab-now" style={{ display: "flex", gap: "0", marginTop: "12px", borderTop: "1px solid #262522", borderBottom: "1px solid #262522", maxWidth: "640px" }}>
            <div style={{ flex: "1", padding: "16px 20px 16px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#6f6c66" }}>
                {"NOW"}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px" }}>
                <span className="pulse" style={{ width: "7px", height: "7px", background: "#1fbf7f" }} />
                {"Refining the guardrails and memory"}
              </span>
            </div>
            <div style={{ flex: "1", padding: "16px 20px", borderLeft: "1px solid #262522", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#6f6c66" }}>
                {"NEXT"}
              </span>
              <span style={{ fontSize: "15px" }}>
                {"Local-model orchestration, alongside refining the current setup"}
              </span>
            </div>
            <div style={{ flex: "1", padding: "16px 0 16px 20px", borderLeft: "1px solid #262522", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#6f6c66" }}>
                {"SOFTWARE"}
              </span>
              <span style={{ fontSize: "15px" }}>
                {"Private"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="ab-creator" style={{ flexShrink: "0", padding: "120px var(--gx)", display: "grid", gridTemplateColumns: "minmax(0, 585px) minmax(0, 1fr)", gap: "80px", alignItems: "start", borderBottom: "1px solid #1d1d1b" }}>
        <figure style={{ margin: "0", position: "relative", border: "1px solid #2f2e2b", padding: "8px", background: "#0e0e0d" }}>
          <div style={{ position: "relative", aspectRatio: "569 / 713", border: "1px solid #262522", overflow: "hidden", background: "#0f1411" }}>
            <video autoPlay muted loop playsInline poster={media('portrait.jpg')} aria-label="Portrait of Tyler Crawford" width="400" height="500" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
              <source src={media('portrait.webm')} type="video/webm" />
              <source src={media('portrait.mp4')} type="video/mp4" />
            </video>
          </div>
          <span style={{ position: "absolute", left: "-1px", top: "-1px", width: "16px", height: "16px", borderLeft: "2px solid #1fbf7f", borderTop: "2px solid #1fbf7f" }} />
          <span style={{ position: "absolute", right: "-1px", top: "-1px", width: "16px", height: "16px", borderRight: "2px solid #1fbf7f", borderTop: "2px solid #1fbf7f" }} />
          <span style={{ position: "absolute", left: "-1px", bottom: "-1px", width: "16px", height: "16px", borderLeft: "2px solid #1fbf7f", borderBottom: "2px solid #1fbf7f" }} />
          <span style={{ position: "absolute", right: "-1px", bottom: "-1px", width: "16px", height: "16px", borderRight: "2px solid #1fbf7f", borderBottom: "2px solid #1fbf7f" }} />
        </figure>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "8px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
            {"01 / THE CREATOR"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h2 style={{ margin: "0", fontSize: "44px", fontWeight: "600", letterSpacing: "-0.035em" }}>
              {"Tyler Crawford"}
            </h2>
            <span style={{ fontSize: "16px", color: "#9a978f" }}>
              {"Creator and sole engineer, Dev Suite"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "680px", fontSize: "18px", lineHeight: "1.7", color: "#b9b6ae" }}>
            <p style={{ margin: "0" }}>
              {"I'm a developer building Dev Suite, a governance harness for AI coding agents. It covers their work end to end, from the plan to the merge: every step is visible, nothing ships on an agent's word alone, and it stays efficient with tokens while doing it. I direct the agents; they write most of the code."}
            </p>
            <p style={{ margin: "0" }}>
              {"Claude Code, Cursor and the other harnesses I'd been using made agents fast. What they didn't give me was a way to trust a team of them, so I built that layer."}
              <br />
              <br />
              {"Currently, this is a private project, but I may release it as open source or as a paid product. If you are curious about the internal technical or would like to potentially get involved, please feel free to reach out!"}
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", paddingTop: "4px" }}>
            <a href="#contact" onClick={v.pickDemo} className="btn btn-primary" style={{ fontSize: "15px", fontWeight: "500", color: "#06120c", background: "#1fbf7f", padding: "15px 22px" }}>
              {"Request a demo"}
            </a>
            <a href="https://buymeacoffee.com/tylercrawford" target="_blank" rel="noopener" className="btn btn-ghost" style={{ fontSize: "15px", color: "#b9b6ae", border: "1px solid #2f2e2b", padding: "14px 22px" }}>
              {"Support the build"}
            </a>
            <a href="https://www.linkedin.com/in/tyler-l-crawford" target="_blank" rel="noopener" className="btn btn-ghost" style={{ fontSize: "15px", color: "#b9b6ae", border: "1px solid #2f2e2b", padding: "14px 22px" }}>
              {"LinkedIn \u2197"}
            </a>
          </div>
        </div>
      </section>
      <section className="ab-miles" style={{ position: "relative", isolation: "isolate", overflow: "hidden", flexShrink: "0", height: "640px", boxSizing: "border-box", padding: "120px var(--gx) 0", display: "flex", flexDirection: "column", gap: "56px", borderBottom: "1px solid #1d1d1b" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#19231f" }}>
            {(v.fMiles?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#22443a" }}>
            {(v.fMiles?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#2e6a50" }}>
            {(v.fMiles?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <span style={{ position: "absolute", right: "16px", top: "14px", fontSize: "10px", letterSpacing: "0.2em", color: "#4a4843" }}>
            {"FIELD 02 \u00b7 SIGNAL"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
            {"02 / MILESTONES"}
          </span>
          <h2 style={{ margin: "0", fontSize: "44px", fontWeight: "600", letterSpacing: "-0.035em" }}>
            {"Where it stands"}
          </h2>
        </div>
        <div className="ab-miles-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "0" }}>
          <span style={{ position: "absolute", left: "0", right: "0", top: "7px", height: "1px", background: "#1fbf7f" }} />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "32px" }}>
            <span style={{ width: "15px", height: "15px", boxSizing: "border-box", background: "#1fbf7f" }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#6f6c66" }}>
              {"2026-05-30"}
            </span>
            <span style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.3" }}>
              {"First parallel run"}
            </span>
            <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#9a978f" }}>
              {"Three agents, three pull requests, merged without a conflict."}
            </span>
          </div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "32px" }}>
            <span style={{ width: "15px", height: "15px", boxSizing: "border-box", background: "#1fbf7f" }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#6f6c66" }}>
              {"2026-06-05"}
            </span>
            <span style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.3" }}>
              {"Dev Suite begins"}
            </span>
            <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#9a978f" }}>
              {"The orchestration layer becomes its own project."}
            </span>
          </div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "32px" }}>
            <span style={{ width: "15px", height: "15px", boxSizing: "border-box", background: "#1fbf7f" }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#6f6c66" }}>
              {"2026-07-24"}
            </span>
            <span style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.3" }}>
              {"Deploys 76% faster"}
            </span>
            <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#9a978f" }}>
              {"A two-agent deploy from 32.0 s to 7.8 s, measured with the full test suite running."}
            </span>
          </div>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "32px" }}>
            <span style={{ width: "15px", height: "15px", boxSizing: "border-box", background: "#1fbf7f" }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#6f6c66" }}>
              {"2026-08"}
            </span>
            <span style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.3" }}>
              {"Several projects at once"}
            </span>
            <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#9a978f" }}>
              {"Separate repositories, each in its own sandbox, running their own agent deploys at the same time, from one application window, under the same governance."}
            </span>
          </div>
        </div>
        <p className="ab-miles-note" style={{ margin: "0", maxWidth: "760px", fontSize: "13px", lineHeight: "1.6", color: "#6f6c66" }}>
          {"Since June 5, 2026, reviewers attacking plans have caught more than 360 blocking problems before any code was written, and 275 pull requests have merged with none rolled back (as of Sept 25, 2026)."}
        </p>
      </section>
      <section id="contact" className="ab-contact" style={{ flexGrow: "1", padding: "120px var(--gx)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 640px", gap: "80px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", zIndex: "-1", overflow: "hidden", pointerEvents: "none", fontFamily: "'Geist Mono', monospace", fontSize: "12px", lineHeight: "16px", whiteSpace: "pre", textShadow: "none" }}>
          <div style={{ position: "absolute", inset: "0", color: "#1f2d26" }}>
            {(v.fContact?.dim || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#2c5c46" }}>
            {(v.fContact?.mid || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0", color: "#48a87c" }}>
            {(v.fContact?.hi || []).map((r, r__i) => (
              <React.Fragment key={r__i}>
                <div style={{ height: "16px" }}>
                  {r}
                </div>
              </React.Fragment>
            ))}
          </div>
          <span style={{ position: "absolute", right: "16px", top: "14px", fontSize: "10px", letterSpacing: "0.2em", color: "#4a4843" }}>
            {"FIELD 03 \u00b7 SIGNAL"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "12px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
            {"03 / CONTACT"}
          </span>
          <h2 className="ab-contact-h2" style={{ margin: "0", fontSize: "64px", fontWeight: "600", lineHeight: "1", letterSpacing: "-0.04em" }}>
            {"Interested? Say so."}
          </h2>
          <p style={{ margin: "0", maxWidth: "480px", fontSize: "18px", lineHeight: "1.65", color: "#9a978f" }}>
            {"Ask for a demo, offer support, or just tell the creator the work is worth doing. Every message is read."}
          </p>
          </div>
        <form className="ab-form" onSubmit={v.submit} noValidate style={{ alignSelf: "start", border: "1px solid #262522", background: "#111110", padding: "32px", display: "flex", flexDirection: "column", gap: "22px" }}>
          {v.notSent ? (
            <>
              <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <legend style={{ padding: "0 0 10px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                  {"I AM WRITING ABOUT"}
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(v.reasons || []).map((r, r__i) => (
                    <React.Fragment key={r__i}>
                      <button type="button" aria-pressed={r?.on} onClick={r?.pick} style={{ minHeight: "44px", padding: "0 16px", border: `1px solid ${r?.bd ?? ""}`, background: r?.bg, color: r?.fg, fontFamily: "'Geist', sans-serif", fontSize: "14px", cursor: "pointer", transition: "all .2s ease" }}>
                        {r?.label}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </fieldset>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="n" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                    {"NAME"}
                  </label>
                  <input id="n" name="name" type="text" aria-invalid={v.fName?.inv} style={{ minHeight: "52px", padding: "0 16px", background: v.fName?.bg, border: `1px solid ${v.fName?.bd ?? ""}`, color: "#ededE8", fontFamily: "'Geist', sans-serif", fontSize: "15px" }} />
                  {v.fName?.err ? (
                    <>
                      <span style={{ fontSize: "13px", color: "#ff9a8e" }}>
                        {"Enter your name."}
                      </span>
                    </>
                  ) : null}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="e" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                    {"EMAIL"}
                  </label>
                  <input id="e" name="email" type="email" aria-invalid={v.fEmail?.inv} style={{ minHeight: "52px", padding: "0 16px", background: v.fEmail?.bg, border: `1px solid ${v.fEmail?.bd ?? ""}`, color: "#ededE8", fontFamily: "'Geist', sans-serif", fontSize: "15px" }} />
                  {v.fEmail?.err ? (
                    <>
                      <span style={{ fontSize: "13px", color: "#ff9a8e" }}>
                        {"Enter an email like name@company.com."}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="m" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#9a978f" }}>
                  {"MESSAGE"}
                </label>
                <textarea id="m" name="message" rows="5" aria-invalid={v.fMsg?.inv} style={{ padding: "14px 16px", background: v.fMsg?.bg, border: `1px solid ${v.fMsg?.bd ?? ""}`, color: "#ededE8", fontFamily: "'Geist', sans-serif", fontSize: "15px", resize: "vertical" }} />
                {v.fMsg?.err ? (
                  <>
                    <span style={{ fontSize: "13px", color: "#ff9a8e" }}>
                      {"Write a message."}
                    </span>
                  </>
                ) : null}
              </div>
              {v.isError ? (
                <>
                  <div role="alert" className="rise" style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "52px", padding: "12px 16px", boxSizing: "border-box", border: "1px solid #ff7a6b", background: "#1a0f0e", fontSize: "15px", lineHeight: "1.5", color: "#ffb3aa" }}>
                    <span style={{ color: "#ff7a6b" }}>
                      {"!"}
                    </span>
                    <span>
                      {"That didn't send. Try again, or email "}
                      <a href="mailto:tyler007crawford@gmail.com" style={{ color: "#ffb3aa", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        {"tyler007crawford@gmail.com"}
                      </a>
                      {"."}
                    </span>
                  </div>
                </>
              ) : null}
              {v.isSending ? (
                <>
                  <button type="button" disabled="" style={{ alignSelf: "flex-start", minHeight: "52px", padding: "0 26px", border: "0", background: "#1d1d1b", color: "#6f6c66", fontFamily: "'Geist', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "default" }}>
                    {"Sending\u2026"}
                  </button>
                </>
              ) : null}
              {v.canSend ? (
                <>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", minHeight: "52px", padding: "0 26px", border: "0", background: "#1fbf7f", color: "#06120c", fontFamily: "'Geist', sans-serif", fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                    {"Send message"}
                  </button>
                </>
              ) : null}
              <span style={{ fontSize: "12px", lineHeight: "1.6", color: "#6f6c66" }}>
                {"Your name, email and message come only to me, to answer you. "}
                <Link to="/licensing#privacy" style={{ color: "#9a978f", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  {"Privacy \u2192"}
                </Link>
              </span>
            </>
          ) : null}
          {v.sent ? (
            <>
              <div className="rise" style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "40px 8px" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "32px", color: "#1fbf7f" }}>
                  {"\u2713"}
                </span>
                <span style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-0.02em" }}>
                  {"Message sent."}
                </span>
                <span style={{ fontSize: "15px", color: "#9a978f" }}>
                  {"Thanks for writing. I'll reply to the email you gave."}
                </span>
              </div>
            </>
          ) : null}
        </form>
      </section>
      <footer className="desk-only" style={{ flexShrink: "0", boxSizing: "border-box", padding: "40px var(--gx) 32px", borderTop: "1px solid #1d1d1b", display: "flex", flexDirection: "column", gap: "28px", background: "#0b0b0a" }}>
        <nav style={{ display: "flex", gap: "32px", fontSize: "14px" }}>
          <Link to="/#articles" style={{ color: "#9a978f" }}>
            {"Articles"}
          </Link>
          <Link to="/about" style={{ color: "#9a978f" }}>
            {"About"}
          </Link>
          <Link to="/licensing" style={{ color: "#9a978f" }}>
            {"Licensing & privacy"}
          </Link>
          <a href="#contact" style={{ color: "#9a978f" }}>
            {"Contact"}
          </a>
        </nav>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", borderTop: "1px solid #1d1d1b", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#6f6c66" }}>
          <span>
            {"\u00a9 2026 TYLER CRAWFORD. ARTICLE TEXT CC BY-NC-ND 4.0. DEV SUITE SOFTWARE IS PROPRIETARY."}
          </span>
          <span>
            {"EVERY ENTRY IS DATED. NONE DESCRIBES THE PRESENT."}
          </span>
        </div>
      </footer>
    </div>
  );
}
