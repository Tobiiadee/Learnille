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
import Consultation_Home from "./components/layout/Consultant_Layout/Consultant_Pages/Consultation_Home.tsx";
import My_Courses_Home from "./components/layout/My_Courses_Layout/My_Courses_Home.tsx";
import WishList from "./pages/Navigation_Pages/WishList.tsx";
import Course_Video_Home from "./components/layout/My_Courses_Layout/Courses_Video/Home/Course_Video_Home.tsx";
import MarketPlace from "./pages/Navigation_Pages/MarketPlace.tsx";
import Details_Home from "./components/layout/Market_Place_Layout/Alternate/Navigation_Pages/Courses/Course_Details/Home/Details_Home.tsx";
import Course_Details from "./components/layout/Market_Place_Layout/Alternate/Navigation_Pages/Courses/Course_Details/Details_Pages/Course_Details.tsx";
import Consultation_Details from "./components/layout/Market_Place_Layout/Alternate/Navigation_Pages/Consultations/Consultation_Details/Details_Pages/Consultation_Details.tsx";

const router = createBrowserRouter([
  {
    path: "/learnille",
    element: <Home />,
    errorElement: <Error />,
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
                path: "/learnille/:navId/market_place/:market_place_id/course/:details_page_id",
                element: <Course_Details />,
              },
              {
                path: "/learnille/:navId/market_place/:market_place_id/consultation/:consultation_details_page_id",
                element: <Consultation_Details/>,
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
