import { useEffect, useRef, useState } from "react";
import "./Preloader.css";

const LOADING_DURATION = 1000;
const EXIT_DURATION = 850;

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const exitTimerRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startedAt = performance.now();
    let animationFrame;

    const updateProgress = (now) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min((elapsed / LOADING_DURATION) * 100, 100);

      setProgress(nextProgress);
      if (nextProgress >= 100) {
        setCanContinue(true);
        return;
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(exitTimerRef.current);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleContinue = () => {
    if (!canContinue || isExiting) return;

    setIsExiting(true);
    exitTimerRef.current = window.setTimeout(
      onComplete,
      getReducedMotionPreference() ? 0 : EXIT_DURATION,
    );
  };

  return (
    <div className={`preloader${isExiting ? " preloader--exiting" : ""}`}>
      <div className="preloader-content" aria-label="Portfolio loading">
        <span className="preloader-dot" aria-hidden="true" />

        <h1 className="preloader-title"> ARJUN RAJPUT · PORTFOLIO</h1>

        <p className={`preloader-status${canContinue ? " is-ready" : ""}`}>
          READY WHEN YOU ARE
        </p>

        <div className="preloader-progress" aria-label={`${Math.round(progress)} percent loaded`}>
          <div className="preloader-track" aria-hidden="true">
            <div
              className="preloader-bar"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <span className="preloader-percentage">{Math.round(progress)} %</span>
        </div>

        <button
          className="preloader-continue"
          type="button"
          disabled={!canContinue || isExiting}
          onClick={handleContinue}
          aria-label="Continue to the portfolio"
        >
          CLICK TO CONTINUE
        </button>
      </div>
    </div>
  );
}
