import React, { useLayoutEffect, useState } from "react";
import { MotionProps, motion } from "framer-motion";

type ImgProps = {
  external?: boolean;
  show?: boolean;
} & MotionProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const Img = ({ external = false, show = false, ...props }: ImgProps) => {
  const [loaded, setLoaded] = useState(false);

  const animate = (show: boolean, loaded: boolean) => {
    if (external) {
      return show ? (loaded ? 1 : 0) : 0;
    } else {
      return loaded ? 1 : 0;
    }
  };

  useLayoutEffect(() => {
    setLoaded(false);
  }, [props.src]);

  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: animate(show, loaded) }}
      transition={{ duration: 0.3 }}
      onLoad={() => setLoaded(true)}
      sizes=""
      {...props}
    />
  );
};

export default Img;
