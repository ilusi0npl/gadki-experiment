import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GadkiDlaDzieci } from "./screens/GadkiDlaDzieci";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <GadkiDlaDzieci />
  </StrictMode>,
);
