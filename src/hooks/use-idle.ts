import { useEffect, useState } from "react";

type ReturnTypes = [boolean, () => void];

type PropsTypes = {
  limit: number;
  event: () => void;
};

const useIdle = (props: PropsTypes): ReturnTypes => {
  const { limit, event } = props;

  let timer: number;

  const [isIdle, setIsIdle] = useState(false);

  const startTime = () => {
    document.addEventListener("click", checkIdle);
    document.addEventListener("keydown", checkIdle);
    checkIdle();
  };

  const endTime = () => {
    document.removeEventListener("click", checkIdle);
    document.removeEventListener("keydown", checkIdle);
    setIsIdle(true);
  };

  const countdown = (limit: number, start: number) => {
    if (start - new Date().getTime() < -limit) {
      clearInterval(timer);
      endTime();
      event();
    }
  };

  const checkIdle = () => {
    const limitTime = 1000 * 60 * limit;
    const startTime = new Date().getTime();

    clearInterval(timer);
    timer = setInterval(() => countdown(limitTime, startTime), 1000);
  };

  const activeIdle = () => {
    setIsIdle(false);
  };

  useEffect(() => {
    startTime();
    return () => endTime();
  }, []);

  return [isIdle, activeIdle];
};

export default useIdle;
