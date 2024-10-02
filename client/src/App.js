import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/custom/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Main from "./pages/Main";
import Footer from "./components/custom/Footer";
import CheckOut from "./components/general/CheckOut";
import SingleDisease from "./components/general/SingleDisease";
import Data from "./components/general/Data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/singleDisease" element={<SingleDisease />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
