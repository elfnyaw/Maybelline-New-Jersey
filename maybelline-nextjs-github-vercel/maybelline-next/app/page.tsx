'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Search, ShoppingBag, Instagram, Youtube, Music2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const products = [
  { name: 'Fit Me Matte + Poreless', type: 'FOUNDATION', detail: 'A natural-looking matte finish.', shade: '40 shades', image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85', tag: 'THE EVERYDAY ICON' },
  { name: 'Lash Sensational Sky High', type: 'MASCARA', detail: 'Length that goes beyond limits.', shade: 'Very Black', image: 'https://images.unsplash.com/photo-1631214540242-6a0f4a4a5c11?auto=format&fit=crop&w=900&q=85', tag: 'LASH EXPECTATIONS' },
  { name: 'Super Stay Matte Ink', type: 'LIP COLOR', detail: 'Your color. Your rules. All day.', shade: '20+ shades', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85', tag: 'NO PLANS TO FADE' },
];

const looks = [
  { title: 'THE AFTER-HOURS LOOK', copy: 'A little extra never hurt.', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=85', number: '01' },
  { title: 'THE MAIN CHARACTER', copy: 'Eyes up. World yours.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85', number: '02' },
  { title: 'THE NO-PLANS PLAN', copy: 'Effortless is an art form.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85', number: '03' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lookIndex, setLookIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [quizChoice, setQuizChoice] = useState('');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.includes('@')) setSubscribed(true);
  };

  return (
    <main>
      <div className="announcement"><span>NEW YORK ENERGY. EVERYWHERE YOU GO.</span><span>MAKE IT HAPPEN <ArrowUpRight size={12} /></span></div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Maybelline New York home">MAYBELLINE<span>NEW YORK</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <button onClick={() => scrollTo('products')}>PRODUCTS</button>
          <button onClick={() => scrollTo('looks')}>THE LOOKS</button>
          <button onClick={() => scrollTo('studio')}>BEAUTY STUDIO</button>
          <button onClick={() => scrollTo('story')}>OUR WORLD</button>
        </nav>
        <div className="header-actions"><button aria-label="Search" onClick={() => scrollTo('products')}><Search size={19}/></button><button aria-label="Shopping bag" onClick={() => scrollTo('products')}><ShoppingBag size={19}/></button><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow"><span className="pink-dot"/> MAYBELLINE NEW YORK PRESENTS</p>
          <h1>NEW YORK.<br/><em>NEW RULES.</em></h1>
          <p className="hero-sub">Beauty moves fast.<br/>Make your own rules.</p>
          <button className="button button-yellow" onClick={() => scrollTo('products')}>FIND YOUR NEXT <ArrowUpRight size={17}/></button>
        </div>
        <div className="hero-side-note">CITY MADE. WORLD READY.</div>
        <div className="hero-bottom"><span>01 / 04</span><span className="hero-line"/><span>THE NEW BEAUTY STANDARD</span><ArrowDownRight size={18}/></div>
        <span className="scribble scribble-one">✳</span>
      </section>

      <section className="manifesto" id="story">
        <div className="manifesto-title"><span className="eyebrow dark-eyebrow">THE CITY NEVER SETTLES</span><h2>BE YOUR<br/><i>OWN</i><br/>BEAUTY.</h2><span className="underline-mark"/></div>
        <div className="manifesto-copy"><p className="manifesto-kicker">A NEW YORK STATE OF MIND.</p><p>For the early starts, the late nights, and every plot twist in between. Beauty is not about fitting in. It is about showing up as every version of you.</p><button className="text-link" onClick={() => scrollTo('studio')}>MEET YOUR BEAUTY ERA <ArrowUpRight size={16}/></button></div>
        <div className="manifesto-stamp">NO<br/>APOLOGIES<br/><b>JUST YOU.</b></div>
      </section>

      <section className="ticker" aria-label="Brand message"><div className="ticker-track"><span>MAKE IT HAPPEN</span><b>✳</b><span>OWN YOUR LOOK</span><b>✳</b><span>MAKE IT HAPPEN</span><b>✳</b><span>OWN YOUR LOOK</span><b>✳</b></div></section>

      <section className="products section-pad" id="products">
        <div className="section-heading"><div><span className="eyebrow pink-eyebrow">THE LINEUP</span><h2>ICON STATUS.<br/><i>INCOMING.</i></h2></div><p>Good makeup days are made.<br/>Start with the icons.</p></div>
        <div className="product-grid">
          {products.map((product, i) => <article className="product-card" key={product.name}>
            <div className="product-image-wrap"><Image src={product.image} alt={`${product.name} beauty product editorial`} fill sizes="(max-width: 700px) 90vw, 30vw" unoptimized/><span className="product-index">0{i + 1}</span><span className="product-tag">{product.tag}</span><button className="round-arrow" aria-label={`Explore ${product.name}`} onClick={() => scrollTo('studio')}><ArrowUpRight size={20}/></button></div>
            <div className="product-meta"><span>{product.type} / {product.shade}</span><h3>{product.name}</h3><p>{product.detail}</p></div>
          </article>)}
        </div>
        <button className="button button-outline" onClick={() => scrollTo('studio')}>EXPLORE THE LINEUP <ArrowRight size={16}/></button>
      </section>

      <section className="duo-feature" id="studio">
        <article className="feature-panel face-panel"><div className="feature-photo face-photo"/><div className="feature-overlay"><span className="eyebrow">01 / FACE</span><h2>FACE<br/><i>FORWARD.</i></h2><p>Your skin. Your canvas.</p><button className="circle-link" onClick={() => scrollTo('products')} aria-label="Explore face products"><ArrowUpRight/></button></div><span className="feature-vertical">COMPLEXION, REIMAGINED</span></article>
        <article className="feature-panel eye-panel"><div className="feature-photo eye-photo"/><div className="feature-overlay"><span className="eyebrow">02 / EYES</span><h2>LOOK<br/><i>TWICE.</i></h2><p>Let your eyes do the talking.</p><button className="circle-link" onClick={() => scrollTo('products')} aria-label="Explore eye products"><ArrowUpRight/></button></div><span className="feature-vertical">THE EYES HAVE IT</span></article>
      </section>

      <section className="lip-section">
        <div className="lip-copy"><span className="eyebrow">03 / LIPS</span><h2>COLOR<br/>OUTSIDE<br/><i>THE LINES.</i></h2><p>One swipe. Whole new energy.</p><button className="button button-black" onClick={() => scrollTo('products')}>MEET YOUR MATCH <ArrowUpRight size={17}/></button></div>
        <div className="lip-visual"><div className="lip-photo"/><span className="lip-vertical">COLOR THAT STAYS LOUD.</span><span className="lip-star">✳</span></div>
      </section>

      <section className="looks-section section-pad" id="looks">
        <div className="section-heading looks-heading"><div><span className="eyebrow pink-eyebrow">OUT IN THE WORLD</span><h2>THE LOOK<br/><i>BOOK.</i></h2></div><div className="look-controls"><button onClick={() => setLookIndex((lookIndex + looks.length - 1) % looks.length)} aria-label="Previous look"><ChevronLeft/></button><button onClick={() => setLookIndex((lookIndex + 1) % looks.length)} aria-label="Next look"><ChevronRight/></button></div></div>
        <div className="look-feature"><div className="look-image"><Image src={looks[lookIndex].image} alt={looks[lookIndex].title} fill sizes="(max-width: 700px) 100vw, 65vw" unoptimized/><span className="look-number">{looks[lookIndex].number}</span></div><div className="look-caption"><span className="eyebrow">MAYBELLINE STREET FILES</span><h3>{looks[lookIndex].title}</h3><p>{looks[lookIndex].copy}</p><button className="text-link" onClick={() => setLookIndex((lookIndex + 1) % looks.length)}>NEXT LOOK <ArrowUpRight size={16}/></button></div></div>
        <div className="look-dots">{looks.map((look, i) => <button key={look.number} className={i === lookIndex ? 'active' : ''} onClick={() => setLookIndex(i)} aria-label={`Show look ${i + 1}`}/>)}</div>
      </section>

      <section className="quiz-section">
        <div className="quiz-decoration">YOUR<br/>RULES.</div><div className="quiz-content"><span className="eyebrow">A LITTLE SELF-DISCOVERY</span><h2>WHAT'S YOUR<br/><i>BEAUTY MOOD?</i></h2><p>Pick your energy. We'll bring the inspiration.</p><div className="quiz-options">{['SOFT BUT BOLD', 'FULL MAIN CHARACTER', 'OFF-DUTY COOL'].map(choice => <button key={choice} className={quizChoice === choice ? 'selected' : ''} onClick={() => setQuizChoice(choice)}>{choice}<ArrowUpRight size={15}/></button>)}</div>{quizChoice && <p className="quiz-result"><Sparkles size={16}/> Your mood: {quizChoice}. Your look, your rules.</p>}</div><div className="quiz-side">M / NY<br/><span>BEAUTY<br/>WITHOUT<br/>A SCRIPT.</span></div>
      </section>

      <section className="newsletter section-pad" id="join"><div><span className="eyebrow pink-eyebrow">GET IN THE KNOW</span><h2>GOOD THINGS.<br/><i>IN YOUR INBOX.</i></h2><p>New drops, fresh looks, and a little New York energy.</p></div><form className="newsletter-form" onSubmit={submitEmail}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="email-row"><input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required/><button type="submit" aria-label="Subscribe"><ArrowUpRight/></button></div><span className="form-note">{subscribed ? 'YOU’RE ON THE LIST. SEE YOU IN YOUR INBOX.' : 'By subscribing, you agree to receive Maybelline updates.'}</span></form></section>

      <footer className="footer"><div className="footer-top"><a className="wordmark footer-logo" href="#top">MAYBELLINE<span>NEW YORK</span></a><p>MAKEUP FOR<br/>THE WAY YOU MOVE.</p><div className="socials"><a href="https://www.instagram.com/maybelline/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href="https://www.youtube.com/user/maybelline" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube/></a><a href="https://www.tiktok.com/@maybelline" target="_blank" rel="noreferrer" aria-label="TikTok"><Music2/></a></div></div><div className="footer-bottom"><span>© 2025 MAYBELLINE NEW YORK. ALL RIGHTS RESERVED.</span><div><a href="#products">PRODUCTS</a><a href="#looks">INSPIRATION</a><a href="#story">ABOUT</a><a href="#join">CONTACT</a></div><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
