import { useLocalStorage } from "@hooks";

export const GuideUseLocalStorage = () => {
  const [token, setToken, removeToken] = useLocalStorage({
    key: "token",
    value: "need to insert any token",
  });

  return (
    <div>
      <p>{token}</p>
      <button onClick={() => setToken("Ew2313sd")}>Set Token</button>
      <button onClick={removeToken}>Reset Token</button>
    </div>
  );
};
