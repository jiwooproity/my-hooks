import { useEffect, useState } from "react";

type PropsTypes = {
  resource: string;
};

type ReturnTypes = [
  HTMLAudioElement,
  boolean,
  () => void,
  (resource: string) => void
];

export const useAudio = (props: PropsTypes): ReturnTypes => {
  const { resource } = props;

  const [audio, setAudio] = useState(new Audio());
  const [play, setPlay] = useState(false);

  const onToggle = () => {
    audio[play ? "pause" : "play"]();
    setPlay(!play);
  };

  const onUpdate = (resource: string) => {
    setAudio(new Audio(resource));
  };

  useEffect(() => {
    onUpdate(resource);
  }, [resource]);

  useEffect(() => {
    audio.addEventListener("pause", () => setPlay(false));
    return () => audio.removeEventListener("pause", () => setPlay(false));
  }, [audio]);

  return [audio, play, onToggle, onUpdate];
};
