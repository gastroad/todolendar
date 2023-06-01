import React from "react";
import { createRoot } from "react-dom/client";

import "core-js";
import "regenerator-runtime/runtime";
import "@assets/styles/reset.scss"

import App from "./App";

createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
