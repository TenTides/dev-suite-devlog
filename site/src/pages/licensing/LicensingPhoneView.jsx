import React from 'react';
import { Link } from 'react-router-dom';

// Generated from the design board LicensingPhone.dc.html, then edited by hand where noted.
export default function LicensingPhoneView({ v }) {
  return (
    <div style={{ width: "100%", boxSizing: "border-box", position: "relative", overflow: "hidden", background: "#0b0b0a", color: "#ededE8", fontFamily: "'Geist', sans-serif", isolation: "isolate" }} className="board-root">
      <header style={{ height: "64px", boxSizing: "border-box", padding: "0 12px 0 16px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #1d1d1b", background: "#0b0b0a" }}>
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
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", letterSpacing: "0.16em", color: "#9a978f", border: "1px solid #2f2e2b", padding: "6px 8px" }}>
          {"LICENSING & PRIVACY"}
        </span>
      </header>
      <section style={{ padding: "48px 16px 48px", display: "flex", flexDirection: "column", gap: "24px", borderBottom: "1px solid #1d1d1b" }}>
        <span className="rise" style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
          {"LICENSING & PRIVACY"}
        </span>
        <h1 className="rise d1" style={{ margin: "0", maxWidth: "980px", fontSize: "38px", lineHeight: "1.02", fontWeight: "600", letterSpacing: "-0.045em" }}>
          {"What you can reuse, and what happens to your email."}
        </h1>
        <p className="rise d2" style={{ margin: "0", maxWidth: "720px", fontSize: "17px", lineHeight: "1.65", color: "#b9b6ae" }}>
          {"Dev Suite and this log are a solo project by Tyler Crawford. The writing is shared under a Creative Commons licence; the images, the software it describes and the name stay with me. The privacy section says exactly what the email forms collect. As of 2026-10-01."}
        </p>
        <nav aria-label="On this page" style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "8px" }}>
          <a href="#licensing" className="btn btn-ghost" style={{ minHeight: "44px", display: "flex", alignItems: "center", padding: "0 16px", border: "1px solid #2f2e2b", fontSize: "14px", color: "#b9b6ae" }}>
            {"Licensing \u2193"}
          </a>
          <a href="#privacy" className="btn btn-ghost" style={{ minHeight: "44px", display: "flex", alignItems: "center", padding: "0 16px", border: "1px solid #2f2e2b", fontSize: "14px", color: "#b9b6ae" }}>
            {"Privacy \u2193"}
          </a>
        </nav>
      </section>
      <section id="licensing" style={{ padding: "56px 16px", display: "flex", flexDirection: "column", gap: "28px", borderBottom: "1px solid #1d1d1b" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
            {"01 / LICENSING"}
          </span>
          <h2 style={{ margin: "0", fontSize: "30px", fontWeight: "600", letterSpacing: "-0.035em" }}>
            {"What you can reuse"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "1px", background: "#262522", border: "1px solid #262522" }}>
          <div style={{ background: "#0b0b0a", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "baseline" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6f6c66" }}>
                {"ARTICLE TEXT"}
              </span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#1fbf7f" }}>
                {"\u00b7 CC BY-NC-ND 4.0"}
              </span>
            </div>
            <span aria-hidden="true" style={{ height: "1px", background: "#262522" }} />
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "24px", fontSize: "15px", lineHeight: "1.6" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#1fbf7f" }}>
                  {"YOU MAY"}
                </span>
                <span className="cap" style={{ color: "#d6d4ce" }}>
                  {"share an article, unchanged, with credit and a link"}
                </span>
                <span className="cap" style={{ color: "#d6d4ce" }}>
                  {"quote from it"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#9a978f" }}>
                  {"YOU MAY NOT"}
                </span>
                <span className="cap" style={{ color: "#9a978f" }}>
                  {"use it commercially"}
                </span>
                <span className="cap" style={{ color: "#9a978f" }}>
                  {"publish edited or adapted versions"}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "4px" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#9a978f" }}>
                {"CREDIT MEANS"}
              </span>
              <span className="cap" style={{ fontSize: "15px", lineHeight: "1.7", color: "#d6d4ce" }}>
                {"name the author, keep the copyright and licence notices, and link to the article and the licence."}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#9a978f" }}>
                {"EXAMPLE"}
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.7", color: "#d6d4ce", borderLeft: "2px solid #262522", paddingLeft: "14px" }}>
                {"\"Why I built my own coding harness\" by Tyler Crawford, \u00a9 2026 Tyler Crawford, https://tentides.github.io/dev-suite-devlog/articles/why-i-built-my-own-coding-harness, licensed CC BY-NC-ND 4.0."}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "14px" }}>
              <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener" style={{ color: "#1fbf7f" }}>
                {"Read the summary \u2197"}
              </a>
              <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.en" target="_blank" rel="noopener" style={{ color: "#1fbf7f" }}>
                {"Read the full licence \u2197"}
              </a>
            </div>
          </div>
          <div style={{ background: "#0b0b0a", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6f6c66" }}>
              {"IMAGES, DIAGRAMS, VIDEO"}
            </span>
            <span aria-hidden="true" style={{ height: "1px", background: "#262522" }} />
            <span style={{ fontSize: "22px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
              {"\u00a9 2026 Tyler Crawford, all rights reserved."}
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "24px", fontSize: "15px", lineHeight: "1.6" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#1fbf7f" }}>
                  {"YOU MAY"}
                </span>
                <span className="cap" style={{ color: "#d6d4ce" }}>
                  {"link to them"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#9a978f" }}>
                  {"YOU MAY NOT"}
                </span>
                <span className="cap" style={{ color: "#9a978f" }}>
                  {"reuse them without asking"}
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "#0b0b0a", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6f6c66" }}>
              {"DEV SUITE SOFTWARE"}
            </span>
            <span aria-hidden="true" style={{ height: "1px", background: "#262522" }} />
            <span style={{ fontSize: "22px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
              {"Proprietary, closed source."}
            </span>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#b9b6ae" }}>
              {"Nothing on this site gives a right to use, copy or run it. The articles describe it; they don't license it."}
            </p>
          </div>
          <div style={{ background: "#0b0b0a", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6f6c66" }}>
              {"NAME AND LOGO"}
            </span>
            <span aria-hidden="true" style={{ height: "1px", background: "#262522" }} />
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#b9b6ae" }}>
              {"\"Dev Suite\" and its logo belong to Tyler Crawford. Please don't use them in a way that suggests endorsement or a partnership that doesn't exist."}
            </p>
          </div>
          <div style={{ background: "#0b0b0a", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6f6c66" }}>
              {"OTHER NAMES"}
            </span>
            <span aria-hidden="true" style={{ height: "1px", background: "#262522" }} />
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#b9b6ae" }}>
              {"Claude Code is a trademark of Anthropic, PBC. Cursor is a trademark of Anysphere, Inc. This log names them as tools that inspired Dev Suite's design; naming them implies no endorsement, sponsorship or affiliation."}
            </p>
          </div>
          <div style={{ background: "#0b0b0a", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6f6c66" }}>
              {"DISCLOSURES"}
            </span>
            <span aria-hidden="true" style={{ height: "1px", background: "#262522" }} />
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#b9b6ae" }}>
              {"The articles are drafted from the project's own records; the opinions are the author's, and every number is checked against its source. gitmem, the memory system the articles describe, is a separate tool; the author is part of the team that builds it, and its lead beta tester. Dev Suite and this site are a solo project by Tyler Crawford. No tool named on this site sponsors it."}
            </p>
          </div>
          <div style={{ background: "#0b0b0a", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6f6c66" }}>
              {"THIS SITE'S CODE"}
            </span>
            <span aria-hidden="true" style={{ height: "1px", background: "#262522" }} />
            <span style={{ fontSize: "22px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-0.02em" }}>
              {"\u00a9 2026 Tyler Crawford. All rights reserved."}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px 24px", fontSize: "14px", color: "#9a978f" }}>
          <span>
            {"Questions about reuse? "}
            <a href="mailto:tyler007crawford@gmail.com" style={{ color: "#1fbf7f" }}>
              {"tyler007crawford@gmail.com"}
            </a>
          </span>
          <a href="https://www.linkedin.com/in/tyler-l-crawford" target="_blank" rel="noopener" style={{ color: "#1fbf7f" }}>
            {"LinkedIn \u2197"}
          </a>
        </div>
      </section>
      <section id="privacy" style={{ padding: "56px 16px 72px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.22em", color: "#1fbf7f" }}>
            {"PRIVACY"}
          </span>
          <h2 style={{ margin: "0", fontSize: "30px", fontWeight: "600", lineHeight: "1.08", letterSpacing: "-0.035em" }}>
            {"What happens to the email you give me."}
          </h2>
        </div>
        <ol style={{ margin: "0", padding: "0", listStyle: "none", borderBottom: "1px solid #262522" }}>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"01"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"WHO'S COLLECTING IT."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              {"Tyler Crawford, the solo developer behind Dev Suite \u00b7 "}
              <a href="mailto:tyler007crawford@gmail.com" style={{ color: "#1fbf7f", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                {"tyler007crawford@gmail.com"}
              </a>
              {"."}
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"02"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"WHAT I COLLECT."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              {"The email address you enter to join the waitlist or get new articles. If you use the contact form: your name, email and message. This site sets no cookies and runs no analytics or tracking. GitHub Pages, which hosts it, keeps standard server logs, and the fonts load from Google Fonts."}
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"03"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"WHY."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              {"To tell you when the beta opens, to send new articles, or to answer your message. Nothing else. It's never sold or shared."}
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"04"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"ON WHAT BASIS."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              {"Your consent, given when you submit a form. You're only added to a list after you confirm by email."}
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"05"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"WHO HANDLES IT."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              {"Kit (kit.com) stores the lists and sends the emails. Formspree (formspree.io) delivers contact messages to me. Neither uses your details for anything else. Both may process them outside the EU, the EEA and the UK (for example, in the US), under their own data-transfer safeguards."}
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"06"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"HOW LONG."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              {"List emails: until you unsubscribe. Contact messages: until you ask me to delete them."}
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"07"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"YOUR CHOICES."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              {"Every list email has a one-click unsubscribe link. "}
              {"You can also ask to see, correct or delete what I hold, or withdraw consent, by writing to "}
              <a href="mailto:tyler007crawford@gmail.com" style={{ color: "#1fbf7f", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                {"tyler007crawford@gmail.com"}
              </a>
              {". If you're in the EU, the EEA or the UK, you can also complain to your data-protection authority."}
            </div>
          </li>
          <li style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "22px 0", borderTop: "1px solid #262522" }}>
            <span style={{ display: "flex", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em" }}>
              <span style={{ color: "#1fbf7f" }}>
                {"08"}
              </span>
              <span style={{ color: "#9a978f" }}>
                {"CONTACT."}
              </span>
            </span>
            <div style={{ fontSize: "16px", lineHeight: "1.7", color: "#d6d4ce" }}>
              <a href="mailto:tyler007crawford@gmail.com" style={{ color: "#1fbf7f", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                {"tyler007crawford@gmail.com"}
              </a>
            </div>
          </li>
        </ol>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "#6f6c66" }}>
          {"AS OF 2026-10-01"}
        </span>
      </section>
      <footer style={{ position: "relative", boxSizing: "border-box", padding: "24px 16px", borderTop: "1px solid #1d1d1b", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "'Geist Mono', monospace", fontSize: "10px", lineHeight: "1.6", letterSpacing: "0.1em", color: "#6f6c66" }}>
        <span style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", fontFamily: "'Geist', sans-serif", fontSize: "13px", letterSpacing: "0" }}>
          <Link to="/#articles" style={{ color: "#9a978f" }}>
            {"Articles"}
          </Link>
          <Link to="/about" style={{ color: "#9a978f" }}>
            {"About"}
          </Link>
          <Link to="/licensing" style={{ color: "#ededE8" }}>
            {"Licensing & privacy"}
          </Link>
          <Link to="/about#contact" style={{ color: "#9a978f" }}>
            {"Contact"}
          </Link>
        </span>
        <span>
          {"\u00a9 2026 TYLER CRAWFORD. ARTICLE TEXT CC BY-NC-ND 4.0. DEV SUITE SOFTWARE IS PROPRIETARY."}
        </span>
        <span>
          {"EVERY ENTRY IS DATED. NONE DESCRIBES THE PRESENT."}
        </span>
      </footer>
    </div>
  );
}
