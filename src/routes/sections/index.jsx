import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GadkiKonto } from "./screens/GadkiKonto";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <GadkiKonto />
  </StrictMode>,
);
