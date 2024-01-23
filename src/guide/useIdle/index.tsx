import useIdle from "@/hooks/use-idle";

export const GuideUseIdle = () => {
  const [isIdle] = useIdle({ limit: 1 });
  return <div>{isIdle ? "is Idle" : "not Idle"}</div>;
};
