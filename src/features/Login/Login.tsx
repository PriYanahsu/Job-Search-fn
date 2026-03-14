"use client";

import { InputBox } from "@/components/InputBox";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const { loginForm, loginData, handleChange, loading } = useLogin();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .login-page {
          min-height: 100vh;
          background: #f4f4f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: 'DM Sans', sans-serif;
        }

        .login-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 880px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
        }

        /* ---- LEFT PANEL ---- */
        .login-left {
          background: #0a0f1e;
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .login-left::before {
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

        .login-left::after {
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

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-icon {
          width: 34px;
          height: 34px;
          background: #6366f1;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: white;
          letter-spacing: -0.3px;
        }

        .hero-text {
          position: relative;
          z-index: 1;
        }

        .hero-tag {
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

        .hero-h {
          font-family: 'Syne', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: white;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .hero-h span {
          color: #818cf8;
        }

        .hero-p {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.7;
          max-width: 260px;
        }

        .stats {
          display: flex;
          gap: 24px;
        }

        .stat-n {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: white;
        }

        .stat-l {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.35);
          margin-top: 2px;
          letter-spacing: 0.3px;
        }

        /* ---- RIGHT PANEL ---- */
        .login-right {
          background: #ffffff;
          padding: 44px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-head {
          margin-bottom: 24px;
        }

        .form-h {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0a0f1e;
          letter-spacing: -0.3px;
          margin-bottom: 6px;
        }

        .form-sub {
          font-size: 13.5px;
          color: #6b7280;
        }

        /* Social buttons */
        .social-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        .btn-social {
          height: 40px;
          border: 0.5px solid #e5e7eb;
          border-radius: 8px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          color: #374151;
          cursor: pointer;
          transition: background 0.12s;
        }

        .btn-social:hover {
          background: #f9fafb;
        }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 4px 0 20px;
        }

        .divider-line {
          flex: 1;
          height: 0.5px;
          background: #e5e7eb;
        }

        .divider span {
          font-size: 12px;
          color: #9ca3af;
          white-space: nowrap;
        }

        /* Fields */
        .field-wrap {
          margin-bottom: 14px;
        }

        .forgot-row {
          text-align: right;
          margin-bottom: 20px;
        }

        .forgot-row a {
          font-size: 12.5px;
          color: #6366f1;
          text-decoration: none;
          font-weight: 500;
        }

        .forgot-row a:hover {
          text-decoration: underline;
        }

        /* Submit button */
        .btn-submit {
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
          margin-bottom: 20px;
        }

        .btn-submit:hover:not(:disabled) {
          background: #4338ca;
        }

        .btn-submit:active:not(:disabled) {
          transform: scale(0.98);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Signup row */
        .signup-row {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
        }

        .signup-row a {
          color: #6366f1;
          font-weight: 500;
          text-decoration: none;
        }

        .signup-row a:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .login-card {
            grid-template-columns: 1fr;
          }
          .login-left {
            padding: 36px 28px;
            min-height: 260px;
          }
          .login-right {
            padding: 36px 28px;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">

          {/* LEFT — Branding panel */}
          <div className="login-left">
            <div className="brand">
              <div className="brand-icon">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                  <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.5V13H7v-2h2V9.5h2V11h2v2h-2v1.5h-2zm1-8a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </div>
              <span className="brand-name">JobSearch</span>
            </div>

            <div className="hero-text">
              <div className="hero-tag">Trusted by 2M+ job seekers</div>
              <h1 className="hero-h">
                Your next <span>career move</span> starts here.
              </h1>
              <p className="hero-p">
                Connect with top employers, discover roles that match your skills,
                and land the job you deserve.
              </p>
            </div>

            <div className="stats">
              <div>
                <div className="stat-n">48K+</div>
                <div className="stat-l">Live jobs</div>
              </div>
              <div>
                <div className="stat-n">12K+</div>
                <div className="stat-l">Companies</div>
              </div>
              <div>
                <div className="stat-n">94%</div>
                <div className="stat-l">Placed in 30 days</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form panel */}
          <div className="login-right">
            <div className="form-head">
              <h2 className="form-h">Welcome back</h2>
              <p className="form-sub">Sign in to access your job dashboard</p>
            </div>

            {/* Social login */}
            <div className="social-row">
              <button type="button" className="btn-social">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button type="button" className="btn-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </button>
            </div>

            <div className="divider">
              <div className="divider-line" />
              <span>or sign in with email</span>
              <div className="divider-line" />
            </div>

            {/* Form */}
            <form onSubmit={loginForm}>
              <div className="field-wrap">
                <InputBox
                  type="text"
                  name="email"
                  label="Email address"
                  size="md"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-wrap">
                <InputBox
                  type="password"
                  name="password"
                  label="Password"
                  size="md"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="forgot-row">
                <a href="#">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-submit"
              >
                {loading ? "Signing in..." : "Sign in to JobSearch"}
              </button>
            </form>

            <p className="signup-row">
              New to JobSearch?{" "}
              <a href="/register">Create a free account</a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;