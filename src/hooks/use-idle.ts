import { useEffect, useState } from "react";

type ReturnTypes = [boolean];

type PropsTypes = {
  limit: number;
};

const useIdle = (props: PropsTypes): ReturnTypes => {
  let timer: number;

  const { limit } = props;
  const [isIdle, setIsIdle] = useState(false);

  const checkIdle = () => {
    const limitTime = 1000 * 60 * limit;
    const startTime = new Date().getTime();

    const countdown = () => {
      if (startTime - new Date().getTime() < -limitTime) {
        endTimer();
        setIsIdle(true);
      }
    };

    setIsIdle(false);
    clearInterval(timer);
    timer = setInterval(countdown, 1000);
  };

  const startTimer = () => {
    document.addEventListener("click", checkIdle);
    document.addEventListener("keydown", checkIdle);
    checkIdle();
  };

  const endTimer = () => {
    document.removeEventListener("click", checkIdle);
    document.removeEventListener("keydown", checkIdle);
    clearInterval(timer);
  };

  useEffect(() => {
    startTimer();
    document.addEventListener("click", startTimer);

    return () => {
      endTimer();
      document.removeEventListener("click", startTimer);
    };
  }, []);

  return [isIdle];
};

export default useIdle;
