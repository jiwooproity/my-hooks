import { RefObject, useEffect, useRef } from "react";

type PropsTypes = {
  text: string;
  delay: number;
  reverse?: boolean;
};

type ReturnTypes = [RefObject<HTMLSpanElement>];

const useTyping = (props: PropsTypes): ReturnTypes => {
  const { text, delay, reverse = false } = props;

  let interval: number;
  const textArr = [...text];
  const textRef = useRef<HTMLSpanElement>(null);

  const onTyping = () => {
    if (textRef.current && textArr.length > 0) {
      if (reverse) {
        textArr.pop();
        textRef.current.innerHTML = textArr.join("");
      } else {
        textRef.current.innerHTML += textArr.shift();
      }
    }

    if (textArr.length === 0) {
      clearInterval(interval);
      console.log("Clear!");
    }
  };

  useEffect(() => {
    interval = setInterval(onTyping, delay);
    return () => clearInterval(interval);
  }, []);

  return [textRef];
};

export default useTyping;
