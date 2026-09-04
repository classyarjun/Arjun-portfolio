import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Preloader.css";

const STATUS_MESSAGES = [
  "initializing...",
  "loading assets...",
  "loading components...",
  "preparing experience...",
  "almost ready...",
];

const MIN_DISPLAY_TIME = 7000;

function useProgress() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(STATUS_MESSAGES[0]);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef(0);
  const progressMotion = useMotionValue(0);
  const springProgress = useSpring(progressMotion, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    startTimeRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const ratio = Math.min(elapsed / MIN_DISPLAY_TIME, 1);

      let nextTarget = 0;
      if (ratio < 0.2) {
        nextTarget = 10 + ratio * 50;
        setStatus(STATUS_MESSAGES[0]);
      } else if (ratio < 0.45) {
        nextTarget = 20 + (ratio - 0.2) * 120;
        setStatus(STATUS_MESSAGES[1]);
      } else if (ratio < 0.7) {
        nextTarget = 40 + (ratio - 0.45) * 120;
        setStatus(STATUS_MESSAGES[2]);
      } else if (ratio < 0.9) {
        nextTarget = 60 + (ratio - 0.7) * 160;
        setStatus(STATUS_MESSAGES[3]);
      } else {
        nextTarget = 80 + (ratio - 0.9) * 200;
        setStatus(STATUS_MESSAGES[4]);
      }

      targetRef.current = Math.min(nextTarget, 100);
      progressMotion.set(targetRef.current);
      setProgress(targetRef.current);

      if (ratio < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        targetRef.current = 100;
        progressMotion.set(100);
        setProgress(100);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [progressMotion]);

  return { progress: springProgress, status, rawProgress: progress };
}

export default function Preloader({ onComplete }) {
  const { progress, status, rawProgress } = useProgress();
  const [isExiting, setIsExiting] = useState(false);
  const prefersReducedMotion = useRef(false);
  const preloaderStartRef = useRef(Date.now());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;

    let exitTimer;
    const handleComplete = () => {
      setIsExiting(true);
      exitTimer = setTimeout(() => {
        onComplete?.();
      }, prefersReducedMotion.current ? 50 : 600);
    };

    const finishAfterMinimumTime = () => {
      const elapsed = Date.now() - preloaderStartRef.current;
      const remaining = Math.max(MIN_DISPLAY_TIME + 300 - elapsed, 0);
      exitTimer = setTimeout(handleComplete, remaining);
    };

    const onLoad = () => {
      finishAfterMinimumTime();
    };

    window.addEventListener("load", onLoad);
    if (document.readyState === "complete") onLoad();

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.02 : 1 }}
      transition={{ duration: prefersReducedMotion.current ? 0.2 : 0.6, ease: "easeOut" }}
      aria-hidden="true"
    >
      <div className="preloader-noise" />
      <div className="preloader-grid" />
      <div className="preloader-inner">
        <div className="preloader-topline">
          <span className="preloader-mark">AR</span>
          <span>Independent developer / 2026</span>
          <span className="preloader-topline-index">01 — 05</span>
        </div>

        <div className="preloader-content">
          <div className="preloader-heading-wrap">
            <motion.span
              className="preloader-kicker"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Welcome to
            </motion.span>
            <motion.h1
              className="preloader-title"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            >
              Arjun<br /><em>Rajput</em>
            </motion.h1>
          </div>

          <motion.div
            className="preloader-counter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span>{String(Math.round(rawProgress)).padStart(2, "0")}</span><small>%</small>
          </motion.div>
        </div>

        <div className="preloader-bottomline">
          <motion.div
            className="preloader-status"
            key={status}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="status-pip" />
            {status}
          </motion.div>

          <motion.div
            className="preloader-progress-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="preloader-track">
              <motion.div
                className="preloader-bar"
                style={{ scaleX: progress, transformOrigin: "left" }}
              />
            </div>
          </motion.div>
          <span className="preloader-caption">Selected work &amp; digital experiences</span>
        </div>
      </div>
    </motion.div>
  );
}
