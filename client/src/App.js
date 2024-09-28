import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/custom/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Main from "./pages/Main";
import SingleCard4 from "./components/general/SingleCard4";
import Footer from "./components/custom/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single" element={<SingleCard4 />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
