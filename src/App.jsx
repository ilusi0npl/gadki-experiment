import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext";
import { MenuOverlay } from "./components/MenuOverlay";
import { ScrollToTop } from "./components/ScrollToTop";
import { GadkiStronaGwna } from "./screens/GadkiStronaGwna";
import { GadkiOKampanii } from "./routes/sections/screens/GadkiOKampanii";
import { GadkiDlaDzieci } from "./routes/GadkiDlaDzieci/screens/GadkiDlaDzieci";
import { GadkiDlaDzieci46 } from "./routes/GadkiDlaDzieci/screens/GadkiDlaDzieci4-6";
import { GadkiDlaDzieci79 } from "./routes/GadkiDlaDzieci/screens/GadkiDlaDzieci7-9";
import { GadkiDlaDzieci1012 } from "./routes/GadkiDlaDzieci/screens/GadkiDlaDzieci10-12";
import { GadkiDlaRodzicwI } from "./routes/sections/screens/GadkiDlaRodzicwI";
import { GadkiDlaEdukatorw } from "./routes/GadkiDlaEdukatorw/screens/GadkiDlaEdukatorw";
import { GadkiFaq } from "./routes/sections/screens/GadkiFaq";
import { GadkiLogowanie } from "./routes/sections/screens/GadkiLogowanie";
import { GadkiKonto } from "./routes/sections/screens/GadkiKonto";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MenuProvider>
        <MenuOverlay />
        <Routes>
          <Route path="/" element={<GadkiStronaGwna />} />
          <Route path="/o-kampanii" element={<GadkiOKampanii />} />
          <Route path="/dla-dzieci" element={<GadkiDlaDzieci46 />} />
          <Route path="/dla-dzieci/4-6" element={<GadkiDlaDzieci46 />} />
          <Route path="/dla-dzieci/7-9" element={<GadkiDlaDzieci79 />} />
          <Route path="/dla-dzieci/10-12" element={<GadkiDlaDzieci1012 />} />
          <Route path="/dla-rodzicow-i-opiekunow" element={<GadkiDlaRodzicwI />} />
          <Route path="/dla-edukatorow" element={<GadkiDlaEdukatorw />} />
          <Route path="/faq" element={<GadkiFaq />} />
          <Route path="/logowanie" element={<GadkiLogowanie />} />
          <Route path="/konto" element={<GadkiKonto />} />
        </Routes>
      </MenuProvider>
    </Router>
  );
};
