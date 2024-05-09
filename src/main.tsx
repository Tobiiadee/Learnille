/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Lazy_Loading from "./components/Lazy/Lazy_Loading.tsx";

import { Provider } from "react-redux";
import store from "./store/Main/Store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.tsx";
import "./index.css";

import Not_Found from "./components/ui/Not_Found/Not_Found.tsx";

const Main = React.lazy(() => import("./layout/Home/Main/Main.tsx"));
const Consultation_Home = React.lazy(
  () => import("./layout/Consultation/Main/Consultations.tsx")
);
const My_Courses_Home = React.lazy(
  () => import("./layout/My_Courses/Main/MyCourses.tsx")
);
const WishList = React.lazy(
  () => import("./layout/Wishlist/Main/WishList.tsx")
);
const Course_Video_Home = React.lazy(
  () => import("./layout/My_Courses/Courses_Video/Home/Course_Video_Home.tsx")
);
const MarketPlace = React.lazy(
  () => import("./layout/Market_Place/Main/MarketPlace.tsx")
);
const Details_Home = React.lazy(
  () =>
    import(
      "./layout/Market_Place/Alternate/Navigation_Pages/Courses/Course_Details/Home/Details_Home.tsx"
    )
);
const Course_Details = React.lazy(
  () =>
    import(
      "./layout/Market_Place/Alternate/Navigation_Pages/Courses/Course_Details/Home/Details_Home.tsx"
    )
);
const Consultation_Details = React.lazy(
  () =>
    import(
      "./layout/Market_Place/Alternate/Navigation_Pages/Consultations/Consultation_Details/Details_Pages/Consultation_Details.tsx"
    )
);

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
