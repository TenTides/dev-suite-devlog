import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';

export default function NotFound() {
  return (
    <div className="article-page">
      <SiteHeader />
      <section className="nf">
        <span className="eyebrow g">404</span>
        <h1>Nothing is logged here.</h1>
        <p>The page may have moved, or the link is from a draft. <Link to="/">Back to the log →</Link></p>
      </section>
      <SiteFooter />
    </div>
  );
}
