import { useCallback, useEffect, useRef, useState } from "react";

type ResizeHooksTypes = () => [boolean];

const useResize: ResizeHooksTypes = () => {
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<number>();

  const resizing = () => {
    const width = window.innerWidth as number;
    setIsMobile(width <= 1280);
  };

  const checkMedia = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(resizing, 100);
    } else {
      timerRef.current = setTimeout(resizing, 100);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkMedia);
    return () => window.removeEventListener("resize", checkMedia);
  }, [checkMedia]);

  return [isMobile];
};

export default useResize;
