"use client";

import { InputBox } from "@/components/InputBox";
import { useRegistration } from "./hooks/useRegistration";

const Registration = () => {
  const { registerForm, registerData, handleChange, loading } = useRegistration();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .reg-page {
          min-height: 100vh;
          background: #f4f4f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: 'DM Sans', sans-serif;
        }

        .reg-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 880px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
        }

        /* ---- LEFT PANEL ---- */
        .reg-left {
          background: #0a0f1e;
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .reg-left::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          border: 1px solid rgba(99, 102, 241, 0.18);
          pointer-events: none;
        }

        .reg-left::after {
          content: '';
          position: absolute;
          bottom: 40px;
          left: -30px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 1px solid rgba(99, 102, 241, 0.12);
          pointer-events: none;
        }

        .reg-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .reg-brand-icon {
          width: 34px;
          height: 34px;
          background: #6366f1;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reg-brand-name {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: white;
          letter-spacing: -0.3px;
        }

        .reg-hero {
          position: relative;
          z-index: 1;
        }

        .reg-hero-tag {
          display: inline-block;
          background: rgba(99, 102, 241, 0.15);
          color: #a5b4fc;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          border: 0.5px solid rgba(99, 102, 241, 0.3);
          margin-bottom: 20px;
        }

        .reg-hero-h {
          font-family: 'Syne', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: white;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .reg-hero-h span {
          color: #818cf8;
        }

        .reg-hero-p {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.7;
          max-width: 260px;
        }

        /* Perks list */
        .reg-perks {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .reg-perk {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .reg-perk-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.2);
          border: 0.5px solid rgba(99, 102, 241, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .reg-perk-dot svg {
          width: 13px;
          height: 13px;
          stroke: #a5b4fc;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .reg-perk-text {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
        }

        /* ---- RIGHT PANEL ---- */
        .reg-right {
          background: #ffffff;
          padding: 44px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .reg-form-head {
          margin-bottom: 24px;
        }

        .reg-form-h {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0a0f1e;
          letter-spacing: -0.3px;
          margin-bottom: 6px;
        }

        .reg-form-sub {
          font-size: 13.5px;
          color: #6b7280;
        }

        /* Two-column name + email grid */
        .reg-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 14px;
        }

        .reg-field {
          margin-bottom: 14px;
        }

        /* Password strength bar */
        .strength-bar-wrap {
          margin-top: 6px;
          display: flex;
          gap: 4px;
        }

        .strength-seg {
          flex: 1;
          height: 3px;
          border-radius: 100px;
          background: #e5e7eb;
          transition: background 0.2s;
        }

        .strength-seg.active-weak   { background: #ef4444; }
        .strength-seg.active-fair   { background: #f59e0b; }
        .strength-seg.active-strong { background: #10b981; }

        .strength-label {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 4px;
          text-align: right;
        }

        /* Divider */
        .reg-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 4px 0 18px;
        }

        .reg-divider-line {
          flex: 1;
          height: 0.5px;
          background: #e5e7eb;
        }

        .reg-divider span {
          font-size: 12px;
          color: #9ca3af;
          white-space: nowrap;
        }

        /* Submit */
        .reg-btn-submit {
          width: 100%;
          height: 44px;
          background: #4f46e5;
          border: none;
          border-radius: 8px;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
          letter-spacing: 0.2px;
          margin-bottom: 18px;
        }

        .reg-btn-submit:hover:not(:disabled) {
          background: #4338ca;
        }

        .reg-btn-submit:active:not(:disabled) {
          transform: scale(0.98);
        }

        .reg-btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Terms */
        .reg-terms {
          font-size: 11.5px;
          color: #9ca3af;
          text-align: center;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .reg-terms a {
          color: #6366f1;
          text-decoration: none;
        }

        .reg-terms a:hover {
          text-decoration: underline;
        }

        /* Login redirect */
        .reg-login-row {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
        }

        .reg-login-row a {
          color: #6366f1;
          font-weight: 500;
          text-decoration: none;
        }

        .reg-login-row a:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .reg-card {
            grid-template-columns: 1fr;
          }
          .reg-left {
            padding: 36px 28px;
            min-height: 220px;
          }
          .reg-right {
            padding: 36px 28px;
          }
          .reg-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="reg-page">
        <div className="reg-card">

          {/* LEFT — Branding panel */}
          <div className="reg-left">
            <div className="reg-brand">
              <div className="reg-brand-icon">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                  <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.5V13H7v-2h2V9.5h2V11h2v2h-2v1.5h-2zm1-8a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </div>
              <span className="reg-brand-name">JobSearch</span>
            </div>

            <div className="reg-hero">
              <div className="reg-hero-tag">Free forever — no credit card</div>
              <h1 className="reg-hero-h">
                Join <span>thousands</span> landing their dream jobs.
              </h1>
              <p className="reg-hero-p">
                Create your profile once and let top companies come to you.
              </p>
            </div>

            <div className="reg-perks">
              <div className="reg-perk">
                <div className="reg-perk-dot">
                  <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,10.5 12,4" /></svg>
                </div>
                <span className="reg-perk-text">Access 48,000+ live job listings</span>
              </div>
              <div className="reg-perk">
                <div className="reg-perk-dot">
                  <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,10.5 12,4" /></svg>
                </div>
                <span className="reg-perk-text">Get matched by AI to relevant roles</span>
              </div>
              <div className="reg-perk">
                <div className="reg-perk-dot">
                  <svg viewBox="0 0 14 14"><polyline points="2,7 5.5,10.5 12,4" /></svg>
                </div>
                <span className="reg-perk-text">One-click apply to top companies</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Form panel */}
          <div className="reg-right">
            <div className="reg-form-head">
              <h2 className="reg-form-h">Create your account</h2>
              <p className="reg-form-sub">Start your job search in under a minute</p>
            </div>

            <form onSubmit={registerForm}>

              {/* Full Name */}
              <div className="reg-field">
                <InputBox
                  type="text"
                  name="name"
                  label="Full Name"
                  size="md"
                  value={registerData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="reg-field">
                <InputBox
                  type="email"
                  name="email"
                  label="Email address"
                  size="md"
                  value={registerData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="reg-field">
                <InputBox
                  type="password"
                  name="password"
                  label="Password"
                  size="md"
                  value={registerData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="reg-field">
                <InputBox
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  size="md"
                  value={registerData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Terms */}
              <p className="reg-terms">
                By creating an account you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="reg-btn-submit"
              >
                {loading ? "Creating Account..." : "Create Free Account"}
              </button>

            </form>

            <div className="reg-divider">
              <div className="reg-divider-line" />
            </div>

            <p className="reg-login-row">
              Already have an account?{" "}
              <a href="/login">Sign in</a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Registration;