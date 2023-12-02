import { useEffect, useState } from "react";
import { useLoading } from "@hooks";

export const GuideUseLoading = () => {
  const [loadArray, isLoaded] = useLoading();

  const [text, setText] = useState("");

  const getMessage = async () => {
    const message: string = await new Promise((resolve) => {
      setTimeout(() => resolve("Hello"), 3000);
    });
    setText(message);
  };

  const onLoad = async () => {
    const loaders = [getMessage];
    loadArray(loaders);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return <div>{isLoaded ? text : "loading..."}</div>;
};
