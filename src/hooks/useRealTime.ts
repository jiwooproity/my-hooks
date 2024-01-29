type CalcFuncType = (calc: number) => void;
type ReturnTypes = [
  number | string,
  number | string,
  number | string,
  CalcFuncType,
  CalcFuncType,
  CalcFuncType
];

type PropsTypes = {
  count: number;
  format?: "HH:mm:ss" | "H:m:s";
};

const useRealTime = (props: PropsTypes): ReturnTypes => {
  const { count, format = "HH:mm:ss" } = props;

  const convertFormat = (calc: number) => {
    const time = Math.floor(calc);
    if (format === "HH:mm:ss") return String(time).padStart(2, "0");
    else if (format === "H:m:s") return time;
    else return time;
  };

  const countToHour = (count: number) => {
    const calc = (count / (60 * 60)) % 24;
    return convertFormat(calc);
  };

  const countToMin = (count: number) => {
    const calc = (count / 60) % 60;
    return convertFormat(calc);
  };

  const countToSecond = (count: number) => {
    const calc = count % 60;
    return convertFormat(calc);
  };

  const hour = countToHour(count);
  const min = countToMin(count);
  const second = countToSecond(count);

  return [hour, min, second, countToHour, countToMin, countToSecond];
};

export default useRealTime;
