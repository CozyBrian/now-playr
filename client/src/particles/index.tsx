import Particles from "react-particles";
import type { Engine, IOptions } from "tsparticles-engine";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./constants";
import { useGlobalContext } from "@/services/appProvider";
import { motion } from "framer-motion";

export default function ParticlesView() {
  const { colors, backgroundColor, showBackground } = useGlobalContext().global;

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showBackground ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bg-zinc-900 w-screen h-screen"
    >
      <Particles id="tsparticles" init={particlesInit} options={config} />;
    </motion.div>
  );
}
