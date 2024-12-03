import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbare } from "./Compenentes/Navbare";
import { Cv } from "./Compenentes/Cv";
import { Aboute2 } from "./Compenentes/Aboute2";
import { Skills } from "./Compenentes/Skills";
import { Contacte } from "./Compenentes/Contacte";
import { Footer } from "./Compenentes/Footer";
import { Projects } from "./Compenentes/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // إعداد مدة الحركة
  }, []);

  return (
    <div >
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navbare />} />
          <Route path="/Aboute" element={<Aboute2 />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/contact" element={<Contacte />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
