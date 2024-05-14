import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import PaintingService from "./pages/PaintingService";
import RemodelingService from "./pages/RemodelingService";
import FlooringService from "./pages/FlooringService";
import WashingService from "./pages/PowerWashingService";
import ConstructionService from "./pages/Construction";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.getElementById("root").classList.add("font-Montserat");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "painting-service",
    element: <PaintingService />,
  },
  {
    path: "remodeling-service",
    element: <RemodelingService />,
  },
  {
    path: "flooring-service",
    element: <FlooringService />,
  },
  {
    path: "washing-service",
    element: <WashingService />,
  },
  {
    path: "construction-service",
    element: <ConstructionService />,
  },
]);

root.render(<RouterProvider router={router} />);
