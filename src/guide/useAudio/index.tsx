import { useAudio } from "@hooks";

import song from "./song.mp3";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AudioController = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const AudioProgressBar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  position: relative;
  background-color: rgba(220, 220, 220, 1);
  border-top: 0.5px solid rgba(54, 54, 54, 0.8);
  border-bottom: 0.5px solid rgba(54, 54, 54, 0.8);
  border-left: 0.5px solid rgba(54, 54, 54, 0.8);
`;

const AudioPercent = styled.span`
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  font-size: 9px;
  line-height: 9px;
  color: rgba(240, 240, 240, 1);
  mix-blend-mode: difference;
`;

const AudioCurrentBar = styled.div`
  width: 20%;
  height: 100%;
  border-right: 0.5px solid rgba(54, 54, 54, 0.8);
  background-color: rgba(255, 255, 255, 1);

  &.active {
    background-color: #ffbf00;
  }

  transition: background-color 0.5s ease;
`;

const AudioToggle = styled.button`
  width: 50px;
  padding: 3px 5px;
  font-size: 12px;
  line-height: 12px;
  border: 1px solid rgba(54, 54, 54, 0.8);
  border-radius: 5px;
  color: rgba(54, 54, 54, 1);
  background-color: rgba(255, 255, 255, 1);
`;

export const GuideUseAudio = () => {
  const [_, progress, totalTime, currentTime, play, onToggle] = useAudio({
    resource: song,
  });

  return (
    <Container>
      <AudioController>
        <AudioProgressBar>
          <AudioPercent>{`${progress.toFixed(1)}%`}</AudioPercent>
          {Array.from(Array(100 / 10), (_, i) => (i + 1) * 10).map((arr) => (
            <AudioCurrentBar
              key={arr}
              className={`${arr <= progress ? "active" : ""}`}
            />
          ))}
        </AudioProgressBar>
        {`${currentTime} / ${totalTime}`}
        <AudioToggle onClick={onToggle}>{play ? "Pause" : "Play"}</AudioToggle>
      </AudioController>
    </Container>
  );
};
