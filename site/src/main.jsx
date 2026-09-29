import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';
import './styles/site.css';

// VITE_PREVIEW=1 builds a copy that keeps navigation in memory, for hosts that can't serve
// deep links (such as a hosted preview). The real site uses normal URLs.
const Router = import.meta.env.VITE_PREVIEW === '1'
  ? ({ children }) => <MemoryRouter>{children}</MemoryRouter>
  : ({ children }) => <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>{children}</BrowserRouter>;

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
