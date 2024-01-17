import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuideUseLoading } from "@/guide/useLoading";
import { GuideUseLocalStorage } from "./guide/useLocalStorage";
import { GuideUseAudio } from "./guide/useAudio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-loading" element={<GuideUseLoading />} />
        <Route path="/use-local-storage" element={<GuideUseLocalStorage />} />
        <Route path="/use-audio" element={<GuideUseAudio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
