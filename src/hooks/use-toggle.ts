import { useState } from "react";

type ReturnTypes = [boolean, () => void];

const useToggle = (): ReturnTypes => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, onToggle];
};

export default useToggle;
