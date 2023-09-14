import type { IOptions, RecursivePartial } from "tsparticles-engine";

export const particlesOptions: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#0f172a",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: false,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#38bdf8",
    },
    links: {
      color: "#bae6fd",
      distance: 75,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 0.75,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 120,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};

if (particlesOptions.particles) {
  if (particlesOptions.particles.color) {
    particlesOptions.particles.color.value = "#38bdf8";
  }
}
