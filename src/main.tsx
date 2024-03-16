/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store/Main/Store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.tsx";
import "./index.css";

import Error from "./pages/Error/Error.tsx";
import Main from "./pages/Navigation_Pages/Main.tsx";

const router = createBrowserRouter([
  {
    path: "/learnille",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/learnille/:navId",
        element: <Main />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
