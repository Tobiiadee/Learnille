/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Lazy_Loading from "./components/Lazy/Lazy_Loading.tsx";

import { Provider } from "react-redux";
import store from "./store/Main/Store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.tsx";
import "./index.css";

import {
  Main,
  My_Courses_Home,
  WishList,
  Course_Video_Home,
  MarketPlace,
  Details_Home,
  Course_Details,
  Consultation_Details,
  Consultation_Home
} from "./components/Lazy/Lazy_Imports.ts";

import Not_Found from "./components/ui/Not_Found/Not_Found.tsx";

const router = createBrowserRouter([
  {
    path: "/learnille",
    element: (
      <Lazy_Loading>
        <Home />
      </Lazy_Loading>
    ),
    errorElement: <Not_Found />,
    children: [
      {
        path: "/learnille/:navId",
        element: <Main />,
        children: [
          {
            path: `/learnille/:navId/:consultation_id`,
            element: <Consultation_Home />,
          },
          {
            path: "/learnille/:navId/courses/:courses_id",
            element: <My_Courses_Home />,
            children: [
              {
                path: "/learnille/:navId/courses/:courses_id/:play_course_id",
                element: <Course_Video_Home />,
              },
            ],
          },

          {
            path: "/learnille/:navId/wishlist/:wishlist_id",
            element: <WishList />,
          },
          {
            path: "/learnille/:navId/market_place/:market_place_id",
            element: <MarketPlace />,
            children: [
              {
                path: "/learnille/:navId/market_place/:market_place_id/:market_id",
                element: <Details_Home />,
              },
              {
                path: "/learnille/:navId/market_place/:market_place_id/:course/:details_page_id",
                element: <Course_Details />,
              },
              {
                path: "/learnille/:navId/market_place/:market_place_id/consultation/:consultation_details_page_id",
                element: <Consultation_Details />,
              },
            ],
          },
        ],
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
