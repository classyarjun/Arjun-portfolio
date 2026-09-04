import { useEffect, useRef } from "react";
import WebGLFluid from "webgl-fluid";
import "./FluidBackground.css";

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    WebGLFluid(canvas, {
      // Mouse interaction
      TRIGGER: "hover",

      // Initial colorful fluid
      IMMEDIATE: true,

      // Simulation quality
      SIM_RESOLUTION: window.innerWidth < 700 ? 96 : 128,
      DYE_RESOLUTION: window.innerWidth < 700 ? 512 : 1024,
      CAPTURE_RESOLUTION: 512,

      // Fluid behavior
      DENSITY_DISSIPATION: 1,
      VELOCITY_DISSIPATION: 0.25,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,

      // Mouse splash
      SPLAT_RADIUS: 0.30,
      SPLAT_FORCE: 6000,

      // Colors
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,

      // Background
      PAUSED: false,
      BACK_COLOR: {
        r: 0.005,
        g: 0.008,
        b: 0.015,
      },
      TRANSPARENT: false,

      // Glow
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,

      // Light rays
      SUNRAYS: false,
    });

    return undefined;
  }, []);

  return <canvas ref={canvasRef} className="fluid-background" aria-hidden="true" />;
}