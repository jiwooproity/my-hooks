import { useRealTime } from "@hooks";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Time = styled.span`
  font-size: 22px;
  line-height: 22px;
  color: white;
`;

export const GuideUseRealTime = () => {
  let interval: number;

  const [count, setCount] = useState(0);
  const [hour, min, second] = useRealTime({ count });

  useEffect(() => {
    interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Time>{`${hour} : ${min} : ${second}`}</Time>
    </Container>
  );
};
