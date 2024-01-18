import { useEffect, useState } from "react";

type PropsTypes = {
  resource: string;
};

type ReturnTypes = [
  HTMLAudioElement,
  number,
  string,
  string,
  boolean,
  () => void,
  (resource: string) => void
];

const getMinSec = (time: number) => {
  const min = Math.floor(time / 60).toString();
  const sec = Math.floor(time % 60).toString();
  return [min.padStart(2, "0"), sec.padStart(2, "0")];
};

const useAudio = (props: PropsTypes): ReturnTypes => {
  const { resource } = props;

  const [audio, setAudio] = useState(new Audio());
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");

  const onInit = () => {
    onPause();
    setProgress(0);
    setCurrentTime("00:00");
    setTotalTime("00:00");
    audio.pause();
  };

  // const onPlay = () => setPlay(true);
  const onPause = () => setPlay(false);

  const onToggle = () => {
    audio[play ? "pause" : "play"]();
    setPlay(!play);
  };

  const onUpdate = (resource: string) => {
    onInit();

    const audioResource = new Audio(resource);
    setAudio(audioResource);

    audioResource.onloadeddata = () => {
      const { duration } = audioResource;
      const [min, sec] = getMinSec(duration);
      setTotalTime(`${min}:${sec}`);
    };
  };

  const timeUpdate = () => {
    const { currentTime, duration } = audio;
    setProgress((currentTime / duration) * 100);

    const [min, sec] = getMinSec(currentTime);
    setCurrentTime(`${min}:${sec}`);
  };

  useEffect(() => {
    setAudio(new Audio(resource));
  }, [resource]);

  useEffect(() => {
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", timeUpdate);
    return () => {
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", timeUpdate);
    };
  }, [audio]);

  return [audio, progress, totalTime, currentTime, play, onToggle, onUpdate];
};

export default useAudio;
