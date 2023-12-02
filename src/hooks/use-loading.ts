import { useState } from "react";

type ReturnTypes = [(loaders: (() => Promise<void>)[]) => void, boolean];

const useLoading = (): ReturnTypes => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const done = () => setIsLoaded(true);

  const loadArray = (loaders: (() => Promise<void>)[]) => {
    Promise.all(loaders.map((load) => load())).then(done);
  };

  return [loadArray, isLoaded];
};

export default useLoading;
