import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Object, CSS, ScssModules, StyledComponents } from "pages";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Object />,
  },
  {
    path: "/css",
    element: <CSS />,
  },
  {
    path: "/scss-modules",
    element: <ScssModules />,
  },
  {
    path: "/styled-components",
    element: <StyledComponents />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
