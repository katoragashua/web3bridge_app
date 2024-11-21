import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Student from "./pages/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      // action={rootAction}
      // errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />
      <Route path=":country" element={<Student />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
