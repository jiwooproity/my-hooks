import { useEffect, useState } from "react";

type PropsTypes = {
  key: string; // storage key
  value: string; // default value
};

type ReturnTypes = [string | null, (value: string) => void, () => void];

export const UseLocalStorage = (props: PropsTypes): ReturnTypes => {
  const { key, value } = props;
  const [token, setToken] = useState<string>(value);

  const updateState = (value: string) => {
    setToken(value);
  };

  const setStorage = (value: string) => {
    localStorage.setItem(key, value);
    updateState(value);
  };

  const removeStorage = () => {
    localStorage.removeItem(key);
    updateState("");
  };

  useEffect(() => {
    localStorage.setItem(key, value);
  }, []);

  return [token, setStorage, removeStorage];
};
