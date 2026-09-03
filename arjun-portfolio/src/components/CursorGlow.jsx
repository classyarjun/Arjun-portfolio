import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import "./CursorGlow.css";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const isVisible = useRef(false);
  const hideTimer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible.current) {
        isVisible.current = true;
      }

      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        isVisible.current = false;
      }, 2000);
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      clearTimeout(hideTimer.current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(hideTimer.current);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="cursor-glow" aria-hidden="true">
      <div
        className="cursor-glow-orb"
        style={{
          x: springX,
          y: springY,
        }}
      />
    </div>
  );
}
