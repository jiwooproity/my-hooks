import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuideUseLoading } from "@/guide/useLoading";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-loading" element={<GuideUseLoading />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
