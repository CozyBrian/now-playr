import Particles from "react-particles";
import type { Engine, IOptions } from "tsparticles-engine";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./constants";
import { useGlobalContext } from "@/services/appProvider";

export default function ParticlesView() {
  const { colors, backgroundColor } = useGlobalContext().global;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const config = {
    ...particlesOptions,
    particles: {
      ...particlesOptions.particles,
      color: {
        ...particlesOptions.particles?.color,
        value: colors,
      },
    },
    background: {
      ...particlesOptions.background,
      color: {
        value: backgroundColor,
      },
    },
  } as IOptions;

  return (
    <div className="fixed bg-zinc-900 w-screen h-screen">
      <Particles id="tsparticles" init={particlesInit} options={config} />;
    </div>
  );
}
