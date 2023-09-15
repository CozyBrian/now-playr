import Particles from "react-particles";
import type { Engine, IOptions } from "tsparticles-engine";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./constants";

type ParticlesViewProps = {
  colors?: string[];
};
export default function ParticlesView({
  colors = ["#912E17", "#3d832cb0", "#1C3ECC", "#6fecfabc"],
}: ParticlesViewProps) {
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
  } as IOptions;

  return <Particles id="tsparticles" init={particlesInit} options={config} />;
}
