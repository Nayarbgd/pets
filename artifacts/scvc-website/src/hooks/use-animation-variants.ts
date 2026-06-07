import { useState, useEffect, useMemo } from "react";

export function useAnimationVariants() {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const fadeUp = useMemo(() => ({
    hidden: { opacity: 0, y: isTouch ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }), [isTouch]);

  const fadeUpLarge = useMemo(() => ({
    hidden: { opacity: 0, y: isTouch ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  }), [isTouch]);

  return { isTouch, fadeUp, fadeUpLarge };
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
