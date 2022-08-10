import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import LetraPage from "./pages/letterPage/LetraPage";
import AbcPage from "./pages/AbcPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abc" element={<AbcPage />} />
          <Route path="/abc/:letra" element={<LetraPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
