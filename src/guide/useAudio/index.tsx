import { useAudio } from "@/hooks/use-audio";
import chicken from "./chicken.mp3";

export const GuideUseAudio = () => {
  const [, /* audio */ play, onToggle /* onUpdate */] = useAudio({
    resource: chicken,
  });

  return (
    <div>
      <button onClick={onToggle}>{play ? "Pause" : "Play"}</button>
    </div>
  );
};
