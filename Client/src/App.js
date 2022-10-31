import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import Letras from "./pages/letras/Letra";
import AbcPage from "./pages/abc/AbcPage";
import Sonidos from "./pages/sonidos/Sonidos";
import Canvas from "./pages/canvas/Canvas";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abc" element={<AbcPage />} />
          <Route path="/abc/sonidos" element={<Sonidos />} />
          <Route path="/abc/canvas" element={<Canvas />} />
          <Route path="/abc/:letra" element={<Letras />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
