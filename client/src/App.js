import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/custom/Navbar";
import Section3 from "./components/general/Section3";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/section" element={<Section3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
