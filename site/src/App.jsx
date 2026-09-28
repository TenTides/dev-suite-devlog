import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import LicensingPage from './pages/licensing/LicensingPage.jsx';
import ArticlePage from './pages/article/ArticlePage.jsx';
import NotFound from './pages/NotFound.jsx';

const TITLES = { '/': 'Dev Log · Dev Suite', '/about': 'About · Dev Log', '/licensing': 'Licensing & privacy · Dev Log' };

// Scroll to the top on a new page, or to #hash once the target exists.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (TITLES[pathname]) document.title = TITLES[pathname];
    if (!hash) { window.scrollTo(0, 0); return undefined; }
    let tries = 0;
    const iv = setInterval(() => {
      const el = document.getElementById(hash.slice(1));
      if (el || ++tries > 20) {
        clearInterval(iv);
        if (el) el.scrollIntoView({ block: 'start' });
      }
    }, 50);
    return () => clearInterval(iv);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/licensing" element={<LicensingPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
