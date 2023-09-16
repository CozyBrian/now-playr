import React, { useState } from "react";
import { MotionProps, motion } from "framer-motion";

type ImgProps = {
  external?: boolean;
  show?: boolean;
} & MotionProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const Img = ({ external = false, show = false, ...props }: ImgProps) => {
  const [loaded, setLoaded] = useState(false);

  const animate = () => {
    if (external) {
      return show ? (loaded ? 1 : 0) : 0;
    } else {
      return loaded ? 1 : 0;
    }
  };

  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: animate() }}
      exit={{ opacity: 0 }}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default Img;
