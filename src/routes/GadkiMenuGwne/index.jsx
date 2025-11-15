import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GadkiMenuGwne } from "./screens/GadkiMenuGwne";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <GadkiMenuGwne />
  </StrictMode>,
);
