import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@src/router"

import "core-js";
import "regenerator-runtime/runtime";
import "@assets/styles/reset.scss"

createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
