import { useEffect, useRef, useState } from "react";

const useBoxScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  const onScroll = () => {
    console.log("scroll");
  };

  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener("wheel", onScroll, { passive: false });
  }, [ref]);

  return [ref];
};

export default useBoxScroll;
