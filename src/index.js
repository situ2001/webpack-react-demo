import React from "react";
import { createRoot } from "react-dom/client";
import Index from "./index.tsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Index />);
