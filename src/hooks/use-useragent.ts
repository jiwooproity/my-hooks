import { useEffect, useState } from "react";

const BROWSERS = [
  "Chrome",
  "Opera",
  "WebTV",
  "Whale",
  "Beonex",
  "Chimera",
  "NetPositive",
  "Phoenix",
  "Firefox",
  "Safari",
  "SkipStone",
  "Netscape",
  "Mozilla",
];

type ReturnTypes = [string];

const useUserAgent = (): ReturnTypes => {
  const [browser, setBrowser] = useState("searching ...");

  const searchBrows = (userAgent: string) => {
    switch (userAgent) {
      case "edg":
        return "Edge";
      case "trident":
      case "msie":
        return "Internet Explorer";
      default:
        const matchBrows = (b: string) => userAgent.includes(b.toLowerCase());
        const browser = BROWSERS.find(matchBrows);
        return browser || "other";
    }
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const userBrowser = searchBrows(userAgent);
    setBrowser(userBrowser);
  }, []);

  return [browser];
};

export default useUserAgent;
