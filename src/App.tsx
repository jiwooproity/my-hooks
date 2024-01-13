import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuideUseLoading } from "@/guide/useLoading";
import { GuideUseLocalStorage } from "./guide/useLocalStorage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-loading" element={<GuideUseLoading />} />
        <Route path="/use-local-storage" element={<GuideUseLocalStorage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
