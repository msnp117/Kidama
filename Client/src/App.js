import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import LetraPage from "./pages/letterPage/LetterPage";
import AbcPage from "./pages/abc-mainPage/AbcPage";
import SoundsPage from "./pages/sounds-mainPage/SoundsPage";
import CanvasPage from "./pages/canvas/CanvasPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abc" element={<AbcPage />} />
          <Route path="/abc/sonidos" element={<SoundsPage />} />
          <Route path="/abc/canvas" element={<CanvasPage />} />
          <Route path="/abc/:letra" element={<LetraPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
