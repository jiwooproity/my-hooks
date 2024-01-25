import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuideUseLoading } from "@/guide/useLoading";
import { GuideUseLocalStorage } from "./guide/useLocalStorage";
import { GuideUseAudio } from "./guide/useAudio";
import { GuideUseUserAgent } from "./guide/useUserAgent";
import { GuideUseTyping } from "./guide/useTyping";
import { GuideUseIdle } from "./guide/useIdle";
import { GuideUseBoxScroll } from "./guide/useBoxScroll";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-loading" element={<GuideUseLoading />} />
        <Route path="/use-local-storage" element={<GuideUseLocalStorage />} />
        <Route path="/use-audio" element={<GuideUseAudio />} />
        <Route path="/use-useragent" element={<GuideUseUserAgent />} />
        <Route path="/use-typing" element={<GuideUseTyping />} />
        <Route path="/use-idle" element={<GuideUseIdle />} />
        <Route path="/use-box-scroll" element={<GuideUseBoxScroll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
