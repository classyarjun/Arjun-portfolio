
import { useEffect, useRef } from "react";
import WebGLFluid from "webgl-fluid";

import "./FluidBackground.css";

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Respect user's reduced-motion preference
    if (
      !canvas ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    // Exact settings from PavelDoGreat-style configuration
    WebGLFluid(canvas, {
      // =========================
      // INPUT
      // =========================

      TRIGGER: "hover",
      IMMEDIATE: true,

      // =========================
      // SIMULATION
      // =========================

      SIM_RESOLUTION: window.innerWidth < 700 ? 96 : 128,

      DYE_RESOLUTION: window.innerWidth < 700 ? 512 : 1024,

      CAPTURE_RESOLUTION: 512,

      // Screenshot:
      // density diffusion = 1
      DENSITY_DISSIPATION: 1,

      // Screenshot:
      // velocity diffusion = 0.2
      VELOCITY_DISSIPATION: 0.2,

      // Screenshot:
      // pressure = 0.8
      PRESSURE: 0.8,

      PRESSURE_ITERATIONS: 20,

      // Screenshot:
      // vorticity = 30
      CURL: 30,

      // =========================
      // SPLAT
      // =========================

      // Screenshot:
      // splat radius = 0.25
      SPLAT_RADIUS: 0.25,

      // Strong colorful mouse movement
      SPLAT_FORCE: 6000,

      // =========================
      // COLOR
      // =========================

      // Screenshot:
      // shading = ON
      SHADING: true,

      // Screenshot:
      // colorful = ON
      COLORFUL: true,

      COLOR_UPDATE_SPEED: 10,

      // =========================
      // SIMULATION STATE
      // =========================

      PAUSED: false,

      // Screenshot:
      // background color = {0,0,0}
      BACK_COLOR: {
        r: 0,
        g: 0,
        b: 0,
      },

      // Screenshot:
      // transparent = OFF
      TRANSPARENT: false,

      // =========================
      // BLOOM
      // =========================

      // Screenshot:
      // enabled = ON
      BLOOM: true,

      // Screenshot:
      // intensity = 0.8
      BLOOM_INTENSITY: 0.8,

      // Screenshot:
      // threshold = 0.6
      BLOOM_THRESHOLD: 0.6,

      BLOOM_ITERATIONS: 8,

      BLOOM_RESOLUTION: 256,

      BLOOM_SOFT_KNEE: 0.7,

      // =========================
      // SUNRAYS
      // =========================

      // Screenshot:
      // enabled = ON
      SUNRAYS: true,

      SUNRAYS_RESOLUTION: 196,

      // Screenshot:
      // weight = 1
      SUNRAYS_WEIGHT: 1.0,
    });

    const handleMouseMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      const fluidEvent = new MouseEvent("mousemove", {
        clientX: event.clientX,
        clientY: event.clientY,
      });

      Object.defineProperties(fluidEvent, {
        offsetX: { value: event.clientX - bounds.left },
        offsetY: { value: event.clientY - bounds.top },
      });

      canvas.dispatchEvent(fluidEvent);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fluid-background"
      aria-hidden="true"
    />
  );
}