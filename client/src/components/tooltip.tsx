import { useDebounce } from "@/hooks/useDebounce";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type TooltipProps = {
  children: React.ReactNode;
  text?: string;
};

const Tooltip = ({ children, text = "tooltip" }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const dshowTooltip = useDebounce(showTooltip, 1000);

  const whichToshow = showTooltip ? dshowTooltip : showTooltip;

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="relative w-fit"
    >
      <AnimatePresence>
        {whichToshow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 1,
              duration: 0.1,
            }}
            className="absolute z-50 text-sm px-2 py-1 top-full w-max bg-white border rounded-md text-[#5c5c5c] flex flex-row items-center justify-center"
          >
            <p className="text-center">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default Tooltip;
