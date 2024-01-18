import { useAudio } from "@hooks";

import song from "./song.mp3";
import song2 from "./song2.mp3";

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
  height: 15px;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  border: 0.5px solid rgba(54, 54, 54, 0.8);
`;

const AudioProgressPercent = styled.div`
  width: 0%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);

  transition: width 0.5s ease;
`;

const AudioBlockBar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  position: relative;
  background-color: rgba(220, 220, 220, 1);
  border-top: 0.5px solid rgba(54, 54, 54, 0.8);
  border-bottom: 0.5px solid rgba(54, 54, 54, 0.8);
  border-left: 0.5px solid rgba(54, 54, 54, 0.8);
`;

const AudioBlockPercent = styled.span`
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
  cursor: pointer;
`;

const AudioChangeBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const AudioChangeBtn = styled.button`
  padding: 3px 5px;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  cursor: pointer;
`;

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <AudioProgressBar>
      <AudioBlockPercent>{`${progress.toFixed(1)}%`}</AudioBlockPercent>
      <AudioProgressPercent style={{ width: `${progress}%` }} />
    </AudioProgressBar>
  );
};

const BlockBar = ({ progress }: { progress: number }) => {
  return (
    <AudioBlockBar>
      <AudioBlockPercent>{`${progress.toFixed(1)}%`}</AudioBlockPercent>
      {Array.from(Array(100 / 10), (_, i) => (i + 1) * 10).map((arr) => (
        <AudioCurrentBar
          key={arr}
          className={`${arr <= progress ? "active" : ""}`}
        />
      ))}
    </AudioBlockBar>
  );
};

const TimeStamp = ({
  currentTime,
  totalTime,
}: {
  currentTime: string;
  totalTime: string;
}) => {
  return `${currentTime} / ${totalTime}`;
};

export const GuideUseAudio = () => {
  const [_, progress, totalTime, currentTime, play, onToggle, onUpdate] =
    useAudio({
      resource: song,
    });

  return (
    <Container>
      <AudioController>
        <ProgressBar progress={progress} />
        <BlockBar progress={progress} />
        <TimeStamp currentTime={currentTime} totalTime={totalTime} />
        <AudioToggle onClick={onToggle}>{play ? "Pause" : "Play"}</AudioToggle>
        <AudioChangeBtnWrapper>
          <AudioChangeBtn onClick={() => onUpdate(song)}>
            Song No.1
          </AudioChangeBtn>
          <AudioChangeBtn onClick={() => onUpdate(song2)}>
            Song No.2
          </AudioChangeBtn>
        </AudioChangeBtnWrapper>
      </AudioController>
    </Container>
  );
};
