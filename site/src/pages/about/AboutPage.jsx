import React from 'react';
import { useDC } from '../../dc/runtime.js';
import Logic, { defaults } from './AboutLogic.js';
import View from './AboutView.jsx';
import SiteHeader from '../../components/SiteHeader.jsx';
import SiteFooter from '../../components/SiteFooter.jsx';
import './about.css';

export default function AboutPage() {
  const v = useDC(Logic, defaults);
  return (
    <div className="about">
      <div className="phone-only"><SiteHeader /></div>
      <View v={v} />
      <div className="phone-only"><SiteFooter /></div>
    </div>
  );
}
