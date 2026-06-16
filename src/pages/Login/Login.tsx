import { useState } from "react";
import styles from "./Login.module.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.lgPage}>
      {/* ── LEFT – branding panel ── */}
      <div className={styles.lgLeft}>
        {/* corner brackets (matches CameraSetup / BranchHopper) */}
        <div className={`${styles.lgCorner} ${styles.lgCornerTl}`}></div>
        <div className={`${styles.lgCorner} ${styles.lgCornerTr}`}></div>
        <div className={`${styles.lgCorner} ${styles.lgCornerBl}`}></div>
        <div className={`${styles.lgCorner} ${styles.lgCornerBr}`}></div>

        <div className={styles.lgBrand}>
          {/* logo – stick figure SVG matching game pages */}
          <svg
            className={styles.lgLogoMark}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="MoveVerse logo"
          >
            <circle cx="40" cy="14" r="10" stroke="#38e1ff" strokeWidth="2.5" />
            <line x1="40" y1="24" x2="40" y2="52" stroke="#38e1ff" strokeWidth="2.5" />
            <line x1="40" y1="34" x2="22" y2="46" stroke="#38e1ff" strokeWidth="2.5" />
            <line x1="40" y1="34" x2="58" y2="46" stroke="#38e1ff" strokeWidth="2.5" />
            <line x1="40" y1="52" x2="26" y2="70" stroke="#38e1ff" strokeWidth="2.5" />
            <line x1="40" y1="52" x2="54" y2="70" stroke="#38e1ff" strokeWidth="2.5" />
            <circle cx="22" cy="46" r="4" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="58" cy="46" r="4" stroke="#f59e0b" strokeWidth="2" />
          </svg>

          <span className={styles.lgBrandName}>MoveVerse</span>

          <p className={styles.lgTagline}>
            Turn every push-up and squat into a game. Your body is the controller.
          </p>

          <div className={styles.lgStats}>
            <div className={styles.lgStatPill}>
              <span className={styles.lgStatPillIcon}>🔥</span>
              Streak Tracking
            </div>
            <div className={styles.lgStatPill}>
              <span className={styles.lgStatPillIcon}>⚡</span>
              XP &amp; Badges
            </div>
            <div className={styles.lgStatPill}>
              <span className={styles.lgStatPillIcon}>🎮</span>2 Games
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT – login form ── */}
      <div className={styles.lgRight}>
        <div className={styles.lgCard}>
          <h1 className={styles.lgCardTitle}>Welcome Back</h1>
          <p className={styles.lgCardSubtitle}>Sign in to continue your streak</p>

          <div className={styles.lgForm}>
            {/* Email */}
            <div className={styles.lgField}>
              <label className={styles.lgLabel} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={styles.lgInput}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className={styles.lgField}>
              <label className={styles.lgLabel} htmlFor="password">
                Password
              </label>
              <div className={styles.lgInputWrap}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={styles.lgInput}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.lgToggleBtn}
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button type="button" className={styles.lgForgot}>
              Forgot password?
            </button>

            <button type="button" className={styles.lgSubmitBtn}>
              Play Now →
            </button>

            <div className={styles.lgDivider}>
              <div className={styles.lgDividerLine}></div>
              <span className={styles.lgDividerText}>or</span>
              <div className={styles.lgDividerLine}></div>
            </div>

            <button type="button" className={styles.lgSocialBtn}>
              <span className={styles.lgSocialIcon}>G</span>
              Continue with Google
            </button>
          </div>

          <p className={styles.lgSignupPrompt}>
            No account yet?
            <button type="button" className={styles.lgSignupLink}>
              Sign up free
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
