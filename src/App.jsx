import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GadkiStronaGwna } from "./screens/GadkiStronaGwna";
import { GadkiMenuGwne } from "./routes/GadkiMenuGwne/screens/GadkiMenuGwne";
import { GadkiOKampanii } from "./routes/sections/screens/GadkiOKampanii";
import { GadkiDlaDzieci } from "./routes/GadkiDlaDzieci/screens/GadkiDlaDzieci";
import { GadkiDlaRodzicwI } from "./routes/sections/screens/GadkiDlaRodzicwI";
import { GadkiDlaEdukatorw } from "./routes/GadkiDlaEdukatorw/screens/GadkiDlaEdukatorw";
import { GadkiFaq } from "./routes/sections/screens/GadkiFaq";
import { GadkiLogowanie } from "./routes/sections/screens/GadkiLogowanie";
import { GadkiKonto } from "./routes/sections/screens/GadkiKonto";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GadkiStronaGwna />} />
        <Route path="/menu" element={<GadkiMenuGwne />} />
        <Route path="/o-kampanii" element={<GadkiOKampanii />} />
        <Route path="/dla-dzieci" element={<GadkiDlaDzieci />} />
        <Route path="/dla-rodzicow-i-opiekunow" element={<GadkiDlaRodzicwI />} />
        <Route path="/dla-edukatorow" element={<GadkiDlaEdukatorw />} />
        <Route path="/faq" element={<GadkiFaq />} />
        <Route path="/logowanie" element={<GadkiLogowanie />} />
        <Route path="/konto" element={<GadkiKonto />} />
      </Routes>
    </Router>
  );
};
