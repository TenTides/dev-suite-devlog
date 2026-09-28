import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="site-f">
      <nav className="site-f-nav">
        <Link to="/#articles">Articles</Link>
        <Link to="/about">About</Link>
        <Link to="/licensing">Licensing &amp; privacy</Link>
        <Link to="/about#contact">Contact</Link>
      </nav>
      <div className="site-f-legal">
        <span>© 2026 nTEG, LLC. ARTICLE TEXT CC BY-NC-ND 4.0. DEV SUITE SOFTWARE IS PROPRIETARY.</span>
        <span>EVERY ENTRY IS DATED. NONE DESCRIBES THE PRESENT.</span>
      </div>
    </footer>
  );
}
