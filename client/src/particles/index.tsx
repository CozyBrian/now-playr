import Particles from "react-particles";
import type { Engine, IOptions } from "tsparticles-engine";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./constants";

type ParticlesViewProps = {
  test?: string[];
};
export default function ParticlesView({
  test = ["#65e6bd"],
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
        value: test,
      },
    },
  } as IOptions;

  return <Particles id="tsparticles" init={particlesInit} options={config} />;
}
