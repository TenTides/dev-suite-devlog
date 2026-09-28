import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M19 8H10V40H19" stroke="#ededE8" strokeWidth="5" />
      <path d="M24 8H30L38 16V32L30 40H24" stroke="#ededE8" strokeWidth="5" strokeLinejoin="miter" />
      <rect className="lg-pulse" x="15" y="31" width="12" height="5" fill="#1fbf7f" />
    </svg>
  );
}

// Header used on article pages (the other pages carry the header from their own board).
export default function SiteHeader({ current }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="site-h">
        <Link to="/" aria-label="dev/suite home" className="site-logo">
          <Logo />
          <span className="wordmark">dev/suite<span className="lg-pulse g">_</span></span>
          <span className="badge">DEV LOG</span>
        </Link>
        <nav className="site-nav">
          <Link to="/#articles" aria-current={current === 'articles' ? 'page' : undefined}>Articles</Link>
          <Link to="/about">About</Link>
        </nav>
        <span className="grow" />
        <Link to="/#follow" className="btn btn-primary site-cta">Join the waitlist</Link>
        <button type="button" className="site-menu-b" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? '✕' : '☰'}</button>
      </header>
      {menu ? (
        <div className="site-sheet sheet">
          <Link to="/#articles" onClick={() => setMenu(false)}>Articles</Link>
          <Link to="/about" onClick={() => setMenu(false)}>About</Link>
          <Link to="/#follow" className="btn btn-primary" onClick={() => setMenu(false)}>Join the waitlist</Link>
        </div>
      ) : null}
    </>
  );
}
