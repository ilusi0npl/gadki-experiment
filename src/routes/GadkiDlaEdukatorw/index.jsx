import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GadkiDlaEdukatorw } from "./screens/GadkiDlaEdukatorw";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <GadkiDlaEdukatorw />
  </StrictMode>,
);
