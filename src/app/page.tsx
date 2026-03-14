"use client";

import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .lp-root {
          min-height: 100vh;
          background: #0a0f1e;
          font-family: 'DM Sans', sans-serif;
          color: white;
          overflow-x: hidden;
        }

        /* ── NOISE OVERLAY ── */
        .lp-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ── GLOW ORBS ── */
        .lp-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .lp-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          top: -120px; right: -100px;
        }
        .lp-orb-2 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%);
          bottom: 60px; left: -80px;
        }

        /* ── NAV ── */
        .lp-nav {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 48px;
          border-bottom: 0.5px solid rgba(255,255,255,0.06);
        }

        .lp-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .lp-brand-icon {
          width: 34px; height: 34px;
          background: #6366f1;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .lp-brand-name {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: white;
          letter-spacing: -0.3px;
        }

        .lp-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .lp-nav-links a {
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.15s;
        }
        .lp-nav-links a:hover { color: white; }

        .lp-nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lp-btn-ghost {
          height: 38px;
          padding: 0 18px;
          border: 0.5px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
          text-decoration: none;
          display: flex; align-items: center;
        }
        .lp-btn-ghost:hover {
          border-color: rgba(255,255,255,0.4);
          color: white;
        }

        .lp-btn-primary {
          height: 38px;
          padding: 0 20px;
          background: #6366f1;
          border: none;
          border-radius: 8px;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
          text-decoration: none;
          display: flex; align-items: center;
        }
        .lp-btn-primary:hover { background: #4f46e5; }
        .lp-btn-primary:active { transform: scale(0.98); }

        /* ── HERO ── */
        .lp-hero {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          padding: 100px 24px 80px;
          text-align: center;
        }

        .lp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(99,102,241,0.12);
          border: 0.5px solid rgba(99,102,241,0.3);
          border-radius: 100px;
          padding: 5px 14px 5px 8px;
          margin-bottom: 28px;
        }

        .lp-hero-badge-dot {
          width: 6px; height: 6px;
          background: #818cf8;
          border-radius: 50%;
          animation: lp-pulse 2s ease-in-out infinite;
        }

        @keyframes lp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .lp-hero-badge span {
          font-size: 12px;
          color: #a5b4fc;
          letter-spacing: 0.3px;
        }

        .lp-hero-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 6vw, 60px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin-bottom: 22px;
          color: white;
        }

        .lp-hero-h1 .accent {
          color: #818cf8;
          font-style: italic;
        }

        .lp-hero-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          max-width: 480px;
          margin: 0 auto 40px;
        }

        .lp-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .lp-btn-hero {
          height: 50px;
          padding: 0 28px;
          background: #6366f1;
          border: none;
          border-radius: 10px;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
        }
        .lp-btn-hero:hover {
          background: #4f46e5;
          box-shadow: 0 12px 32px rgba(99,102,241,0.45);
          transform: translateY(-1px);
        }

        .lp-btn-hero-outline {
          height: 50px;
          padding: 0 28px;
          border: 0.5px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
          text-decoration: none;
          display: inline-flex; align-items: center;
        }
        .lp-btn-hero-outline:hover {
          border-color: rgba(255,255,255,0.4);
          color: white;
        }

        /* ── SOCIAL PROOF ── */
        .lp-proof {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 40px;
        }

        .lp-avatars {
          display: flex;
        }

        .lp-avatar {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 2px solid #0a0f1e;
          margin-left: -8px;
          font-size: 12px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 600;
          font-family: 'Syne', sans-serif;
        }
        .lp-avatar:first-child { margin-left: 0; }

        .av1 { background: #6366f1; }
        .av2 { background: #8b5cf6; }
        .av3 { background: #06b6d4; }
        .av4 { background: #10b981; }

        .lp-proof-text {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.4;
        }

        .lp-proof-text strong {
          color: rgba(255,255,255,0.75);
          font-weight: 500;
        }

        /* ── STATS STRIP ── */
        .lp-stats {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          gap: 0;
          border-top: 0.5px solid rgba(255,255,255,0.06);
          border-bottom: 0.5px solid rgba(255,255,255,0.06);
          margin: 0 48px;
        }

        .lp-stat {
          flex: 1;
          max-width: 200px;
          padding: 32px 24px;
          text-align: center;
          border-right: 0.5px solid rgba(255,255,255,0.06);
        }
        .lp-stat:last-child { border-right: none; }

        .lp-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: white;
          letter-spacing: -1px;
          margin-bottom: 4px;
        }

        .lp-stat-num span { color: #818cf8; }

        .lp-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ── FEATURES ── */
        .lp-features {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 80px auto;
          padding: 0 48px;
        }

        .lp-section-tag {
          display: inline-block;
          background: rgba(99,102,241,0.12);
          color: #a5b4fc;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          border: 0.5px solid rgba(99,102,241,0.25);
          margin-bottom: 16px;
        }

        .lp-section-h {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 48px;
          line-height: 1.15;
        }

        .lp-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .lp-feat-card {
          background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 28px 24px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .lp-feat-card:hover {
          background: rgba(99,102,241,0.07);
          border-color: rgba(99,102,241,0.2);
          transform: translateY(-2px);
        }

        .lp-feat-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(99,102,241,0.15);
          border: 0.5px solid rgba(99,102,241,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }

        .lp-feat-icon svg {
          width: 18px; height: 18px;
          stroke: #a5b4fc;
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .lp-feat-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
        }

        .lp-feat-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          line-height: 1.65;
        }

        /* ── CTA BANNER ── */
        .lp-cta {
          position: relative;
          z-index: 1;
          margin: 0 48px 80px;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%);
          border-radius: 20px;
          padding: 56px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          overflow: hidden;
        }

        .lp-cta::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          pointer-events: none;
        }

        .lp-cta::after {
          content: '';
          position: absolute;
          bottom: -60px; left: 30%;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }

        .lp-cta-text { position: relative; z-index: 1; }

        .lp-cta-h {
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.4px;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .lp-cta-p {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          max-width: 360px;
        }

        .lp-cta-btn {
          position: relative; z-index: 1;
          flex-shrink: 0;
          height: 50px;
          padding: 0 32px;
          background: white;
          border: none;
          border-radius: 10px;
          color: #4f46e5;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.15s;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .lp-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.25);
        }

        /* ── FOOTER ── */
        .lp-footer {
          position: relative;
          z-index: 1;
          border-top: 0.5px solid rgba(255,255,255,0.06);
          padding: 28px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .lp-footer-copy {
          font-size: 12.5px;
          color: rgba(255,255,255,0.25);
        }

        .lp-footer-links {
          display: flex;
          gap: 24px;
          list-style: none;
        }

        .lp-footer-links a {
          font-size: 12.5px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.15s;
        }
        .lp-footer-links a:hover { color: rgba(255,255,255,0.7); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .lp-nav { padding: 18px 24px; }
          .lp-nav-links { display: none; }
          .lp-hero { padding: 72px 24px 56px; }
          .lp-stats { margin: 0 24px; }
          .lp-stat { padding: 24px 16px; }
          .lp-features { padding: 0 24px; margin: 56px auto; }
          .lp-features-grid { grid-template-columns: 1fr; }
          .lp-cta { margin: 0 24px 56px; padding: 40px 28px; flex-direction: column; }
          .lp-cta-btn { width: 100%; justify-content: center; }
          .lp-footer { padding: 24px; flex-direction: column; gap: 16px; text-align: center; }
        }
      `}</style>

      <div className="lp-root">
        {/* Glow orbs */}
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />

        {/* ── NAV ── */}
        <nav className="lp-nav">
          <Link href="/" className="lp-brand">
            <div className="lp-brand-icon">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.5V13H7v-2h2V9.5h2V11h2v2h-2v1.5h-2zm1-8a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </div>
            <span className="lp-brand-name">JobSearch</span>
          </Link>

          <ul className="lp-nav-links">
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">Salaries</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          <div className="lp-nav-cta">
            <Link href="/login" className="lp-btn-ghost">Sign in</Link>
            <Link href="/register" className="lp-btn-primary">Get started</Link>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="lp-hero">
          <div className="lp-hero-badge">
            <div className="lp-hero-badge-dot" />
            <span>48,000+ live listings updated daily</span>
          </div>

          <h1 className="lp-hero-h1">
            Your next <span className="accent">great job</span><br />
            is one search away.
          </h1>

          <p className="lp-hero-sub">
            Create a free profile, get matched by AI, and apply to top companies — all in one place.
          </p>

          <div className="lp-hero-actions">
            <Link href="/register" className="lp-btn-hero">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11H9v-4h2v4zm0-6H9V5h2v2z"/>
              </svg>
              Create Free Account
            </Link>
            <a href="#" className="lp-btn-hero-outline">Browse Jobs</a>
          </div>

          {/* Social proof */}
          <div className="lp-proof">
            <div className="lp-avatars">
              <div className="lp-avatar av1">A</div>
              <div className="lp-avatar av2">K</div>
              <div className="lp-avatar av3">R</div>
              <div className="lp-avatar av4">M</div>
            </div>
            <p className="lp-proof-text">
              <strong>12,400+ people</strong> found their dream job this month
            </p>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="lp-stats">
          <div className="lp-stat">
            <div className="lp-stat-num">48<span>K+</span></div>
            <div className="lp-stat-label">Live Listings</div>
          </div>
          <div className="lp-stat">
            <div className="lp-stat-num">6<span>K+</span></div>
            <div className="lp-stat-label">Companies</div>
          </div>
          <div className="lp-stat">
            <div className="lp-stat-num">94<span>%</span></div>
            <div className="lp-stat-label">Match Rate</div>
          </div>
          <div className="lp-stat">
            <div className="lp-stat-num">1<span>min</span></div>
            <div className="lp-stat-label">To Apply</div>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <section className="lp-features">
          <div className="lp-section-tag">Why JobSearch</div>
          <h2 className="lp-section-h">Everything you need to land the role.</h2>

          <div className="lp-features-grid">
            <div className="lp-feat-card">
              <div className="lp-feat-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <div className="lp-feat-title">Smart Job Matching</div>
              <div className="lp-feat-desc">Our AI reads your profile and surfaces only the roles that truly fit your skills, experience, and salary range.</div>
            </div>

            <div className="lp-feat-card">
              <div className="lp-feat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
                </svg>
              </div>
              <div className="lp-feat-title">One-Click Apply</div>
              <div className="lp-feat-desc">Your profile is your resume. Apply to any job instantly without filling out the same form a hundred times.</div>
            </div>

            <div className="lp-feat-card">
              <div className="lp-feat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
                </svg>
              </div>
              <div className="lp-feat-title">Salary Insights</div>
              <div className="lp-feat-desc">See real salary ranges before you apply. Know your worth and negotiate from a position of confidence.</div>
            </div>

            <div className="lp-feat-card">
              <div className="lp-feat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="lp-feat-title">Company Profiles</div>
              <div className="lp-feat-desc">Research culture, benefits, reviews, and growth opportunities before investing your time in an application.</div>
            </div>

            <div className="lp-feat-card">
              <div className="lp-feat-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <div className="lp-feat-title">Real-Time Alerts</div>
              <div className="lp-feat-desc">Get notified the moment a role matching your preferences goes live — before the first wave of applicants.</div>
            </div>

            <div className="lp-feat-card">
              <div className="lp-feat-icon">
                <svg viewBox="0 0 24 24">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="lp-feat-title">Application Tracker</div>
              <div className="lp-feat-desc">Keep every application, interview, and follow-up organised in one clean dashboard — never lose track again.</div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <div className="lp-cta">
          <div className="lp-cta-text">
            <h3 className="lp-cta-h">Ready to find your next role?</h3>
            <p className="lp-cta-p">Join thousands of job seekers who have already built their profile. It's free, always.</p>
          </div>
          <Link href="/register" className="lp-cta-btn">
            Get started — it's free
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h12M11 5l5 5-5 5"/>
            </svg>
          </Link>
        </div>

        {/* ── FOOTER ── */}
        <footer className="lp-footer">
          <span className="lp-footer-copy">© 2025 JobSearch. All rights reserved.</span>
          <ul className="lp-footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </footer>

      </div>
    </>
  );
};

export default LandingPage;