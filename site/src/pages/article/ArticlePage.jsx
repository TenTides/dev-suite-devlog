import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { findPost, posts } from '../../content/posts.js';
import { sceneGen, fieldGen } from '../../ascii/engines.js';
import { AsciiLayers, useTick, useWidth } from '../../ascii/Ascii.jsx';
import { usePhone } from '../../useMedia.js';
import Eye from '../../components/Eye.jsx';
import SiteHeader from '../../components/SiteHeader.jsx';
import SiteFooter from '../../components/SiteFooter.jsx';
import * as W from '../../components/article/Widgets.jsx';
import NotFound from '../NotFound.jsx';

// Headings get ids s1..sN from the post's section list, matched by their text. The component
// must be defined once (not per render), or React remounts every heading on each update.
const SectionsCtx = React.createContext([]);
const textOf = (c) => (typeof c === 'string' ? c : Array.isArray(c) ? c.map(textOf).join('') : c && c.props ? textOf(c.props.children) : '');
function H2({ children }) {
  const sections = React.useContext(SectionsCtx);
  const t = textOf(children).trim();
  const i = sections.findIndex((s) => s.trim() === t);
  const n = i < 0 ? '' : String(i + 1);
  return <h2 id={n ? 's' + n : undefined}><span className="h2-n">{n ? '0' + n : ''}</span>{children}</h2>;
}
function A({ href, children }) {
  return href && href.startsWith('/') ? <Link to={href}>{children}</Link> : <a href={href}>{children}</a>;
}
const COMPONENTS = {
  h2: H2, a: A,
  Note: W.Note, Stats: W.Stats, PullQuote: W.PullQuote, List: W.List, WithNote: W.WithNote, DataTable: W.DataTable,
  BarChart: W.BarChart, BeforeAfter: W.BeforeAfter, CoverageGrid: W.CoverageGrid, UnderTheHood: W.UnderTheHood,
};
import './article.css';

const SCENE_COLORS = ['#3a3935', '#6f6c66', '#c9f5e0', '#2fb57e'];
const FIELD_COLORS = ['#1f2d26', '#2c5c46', '#48a87c'];
// Rows of scene to keep under the header text, per scene (desktop, phone).
const BELOW = { city: [14, 13], aurora: [12, 26], desert: [14, 14], lake: [14, 14], highway: [14, 14] };

function Hero({ post, phone }) {
  const ref = useRef(null);
  const textRef = useRef(null);
  const t = useTick(ref);
  const w = useWidth(ref);
  const [textRows, setTextRows] = useState(phone ? 30 : 36);
  const [textBox, setTextBox] = useState({ left: 80, width: 827 });
  const fs = phone ? 11 : 12, lh = phone ? 14 : 16, cw = fs * 0.6;
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => {
      const top = phone ? 36 : 72;
      setTextRows(Math.ceil((el.offsetHeight + top + 8) / lh));
      setTextBox({ left: el.offsetLeft, width: Math.min(el.offsetWidth, 840) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [phone, lh]);
  const kind = post.scene || 'city';
  const below = (BELOW[kind] || [14, 14])[phone ? 1 : 0];
  const R = phone ? textRows + below : Math.max(50, textRows + below);
  const Wc = Math.max(40, Math.ceil((w || (phone ? 390 : 1440)) / cw) + 1);
  const tz = phone
    ? (kind === 'aurora' ? { x: Wc, y: textRows, ay: textRows - 1, ax: 0.04, mh: 0.4 } : { x: Wc, y: textRows })
    : { x0: Math.floor(textBox.left / cw) - 3, x: Math.min(Wc, Math.ceil((textBox.left + textBox.width) / cw) + 1), y: textRows };
  const layers = useMemo(() => sceneGen(kind, Wc, R, t * 0.11, tz), [kind, Wc, R, t, tz.x, tz.y, tz.x0]);
  return (
    <section ref={ref} className="a-hero" style={{ height: R * lh }}>
      <AsciiLayers layers={layers} colors={SCENE_COLORS} fontSize={fs} lineHeight={lh} />
      <div ref={textRef} className="a-hero-text">
        <Link to="/#articles" className="back">← ALL ARTICLES</Link>
        <div className="rise a-meta"><span className="g">ARTICLE {post.number}</span><span className="sep">·</span><span>{post.date}</span><span className="sep">·</span><span>{post.readTime}</span></div>
        <h1 className="rise d1">{post.title}</h1>
        <p className="rise d2 stand">{post.standfirst}</p>
        <div className="byline"><Eye size={phone ? 40 : 44} /><span><span className="by-name">{post.author}</span><span className="by-role">{post.role}</span></span></div>
      </div>
    </section>
  );
}

function Share({ post }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href.split('#')[0] : '';
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="share">
      <span className="eyebrow">SHARE</span>
      <div className="share-row">
        <button type="button" className="btn btn-ghost share-b" onClick={copy}>{copied ? 'Copied ✓' : 'Copy link'}</button>
        <a className="btn btn-ghost share-i" aria-label="Share on X" target="_blank" rel="noopener noreferrer"
          href={'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(post.title)}>X</a>
        <a className="btn btn-ghost share-i" aria-label="Share on LinkedIn" target="_blank" rel="noopener noreferrer"
          href={'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url)}>in</a>
      </div>
    </div>
  );
}

function Toc({ sections, active, phone }) {
  const [open, setOpen] = useState(false);
  const items = sections.map((s, i) => (
    <a key={i} className="toc-a" href={'#s' + (i + 1)} aria-current={i === active ? 'true' : 'false'} onClick={() => setOpen(false)}>
      <span className="toc-n">{'0' + (i + 1)}</span><span>{s}</span>
    </a>
  ));
  if (!phone) {
    return (
      <nav aria-label="On this page" className="toc">
        <span className="eyebrow toc-label">ON THIS PAGE</span>
        {items}
      </nav>
    );
  }
  return (
    <div className="toc-m">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="toc-m-b">
        <span className="muted">ON THIS PAGE</span><span className="grow" /><span className="g">{'0' + (active + 1) + ' / 0' + sections.length}</span>
        <span className="toc-m-i">{open ? '−' : '+'}</span>
      </button>
      {open ? <nav aria-label="On this page" className="toc sheet">{items}</nav> : null}
    </div>
  );
}

function NextSection({ post, phone }) {
  const ref = useRef(null);
  const t = useTick(ref);
  const w = useWidth(ref);
  const [sent, setSent] = useState(false);
  const cw = (phone ? 11 : 12) * 0.6, lh = phone ? 14 : 16;
  const [h, setH] = useState(480);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const Wc = Math.max(40, Math.ceil((w || 1440) / cw) + 1);
  const R = Math.ceil(h / lh) + 1;
  const f = useMemo(() => fieldGen('ripple', Wc, R, t * 0.1), [Wc, R, t]);
  const idx = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = posts[idx + 1];
  const nx = post.next || {};
  const card = (
    <>
      <span className="next-pat" />
      <span className="next-text">
        <span className="eyebrow g">{nx.label}</span>
        <span className="next-title">{nx.title}</span>
        <span className="next-meta">{nx.meta}</span>
      </span>
    </>
  );
  return (
    <section ref={ref} className="a-next">
      <AsciiLayers layers={f} colors={FIELD_COLORS} fontSize={phone ? 11 : 12} lineHeight={lh} label={phone ? null : 'FIELD · SIGNAL'} />
      {nextPost ? <Link to={'/articles/' + nextPost.slug} className="card next-card">{card}</Link>
        : <Link to="/#articles" className="card next-card">{card}</Link>}
      <form className="sub" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <span className="sub-title">Get the next article by email.</span>
        {post.subscribe ? <span className="sub-note">{post.subscribe}</span> : null}
        {sent ? <span className="sub-done">✓ Subscribed. See you at the next entry.</span> : (
          <div className="sub-row">
            <label htmlFor="nl" className="sr-only">Email</label>
            <input id="nl" type="email" required placeholder="you@company.com" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </div>
        )}
        <Link to="/#follow" className="sub-alt">Or join the Dev Suite waitlist →</Link>
      </form>
    </section>
  );
}

function Licence() {
  return (
    <div className="licence">
      <span className="cc">cc</span>
      <div>
        <span className="lic-title">Text licensed CC BY-NC-ND 4.0</span>
        <span className="lic-body">Share this article with credit, unchanged, and not for commercial use. Images and demo video are © nTEG, LLC unless noted. Nothing here licenses the Dev Suite software. <Link to="/licensing#licensing">Licensing →</Link></span>
      </div>
    </div>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const post = findPost(slug);
  const phone = usePhone();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [asideOff, setAsideOff] = useState(false);
  const artRef = useRef(null);

  useEffect(() => {
    if (!post) return undefined;
    document.title = post.title + ' · Dev Log';
    const onScroll = () => {
      const hs = Array.from(document.querySelectorAll('.prose h2[id]'));
      let a = 0;
      hs.forEach((h, i) => { if (h.getBoundingClientRect().top < window.innerHeight * 0.35) a = i; });
      setActive(a);
      const aside = document.querySelector('.a-aside-in');
      if (aside) {
        const ar = aside.getBoundingClientRect();
        const hit = Array.from(document.querySelectorAll('.prose .breakout')).some((f) => {
          const r = f.getBoundingClientRect();
          return r.left < ar.right && r.bottom > ar.top - 16 && r.top < ar.bottom + 16;
        });
        setAsideOff(hit);
      }
      const el = artRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        setProgress(Math.max(0, Math.min(1, (window.innerHeight * 0.35 - r.top) / r.height)));
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [post]);

  if (!post) return <NotFound />;
  const { Content } = post;
  const sections = post.sections || [];
  const label = sections[active] ? '0' + (active + 1) + ' / 0' + sections.length + ' · ' + sections[active].toUpperCase() : '';
  return (
    <div className="article-page">
      <SiteHeader current="articles" />
      <div className="readbar">
        <span>ARTICLE {post.number}</span><span className="sep">/</span><span className="hi">{post.kicker}</span>
        <span className="grow" />
        <span className="rb-sec">{phone ? '0' + (active + 1) + ' / 0' + sections.length : label}</span>
        {phone ? null : <><span className="sep">·</span><span>{post.readTime}</span></>}
        <span className="rb-prog" style={{ width: (progress * 100).toFixed(1) + '%' }} />
      </div>
      <Hero post={post} phone={phone} />
      {phone ? <div className="m-tools"><Share post={post} /><Toc sections={sections} active={active} phone /></div> : null}
      <div className="a-grid">
        {phone ? null : <aside className="a-aside"><div className={'a-aside-in' + (asideOff ? ' off' : '')}><Toc sections={sections} active={active} /><Share post={post} /></div></aside>}
        <article ref={artRef} className="prose">
          <SectionsCtx.Provider value={sections}>
            <MDXProvider components={COMPONENTS}>
              <Content components={COMPONENTS} />
            </MDXProvider>
          </SectionsCtx.Provider>
          {post.sources ? (
            <div className="sources">
              <span className="chip">SOURCES</span>
              <ol>{post.sources.map((s, i) => <li key={i}><span className="src-n">{i + 1}</span><span>{s}</span></li>)}</ol>
            </div>
          ) : null}
          {post.drafting ? <p className="drafting">{post.drafting}</p> : null}
          <Licence />
        </article>
        {phone ? null : <div aria-hidden="true" />}
      </div>
      <NextSection post={post} phone={phone} />
      <SiteFooter />
    </div>
  );
}
