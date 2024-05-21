import React from "react";


export const Main = React.lazy(() => import("../../../Main.tsx"));

export const Consultation_Home = React.lazy(
  () => import("../../layout/Consultation/Main/Consultations.tsx")
);
export const My_Courses_Home = React.lazy(
  () => import("../../layout/My_Courses/Main/MyCourses.tsx")
);
export const WishList = React.lazy(
  () => import("../../layout/Wishlist/Main/WishList.tsx")
);
export const Course_Video_Home = React.lazy(
  () => import("../../layout/My_Courses/Courses_Video/Home/Course_Video_Home.tsx")
);
export const MarketPlace = React.lazy(
  () => import("../../layout/Market_Place/Main/MarketPlace.tsx")
);
export const Details_Home = React.lazy(
  () =>
    import(
      "../../layout/Market_Place/Alternate/Navigation_Pages/Courses/Course_Details/Home/Details_Home.tsx"
    )
);
export const Course_Details = React.lazy(
  () =>
    import(
      "../../layout/Market_Place/Alternate/Navigation_Pages/Courses/Course_Details/Home/Details_Home.tsx"
    )
);
export const Consultation_Details = React.lazy(
  () =>
    import(
      "../../layout/Market_Place/Alternate/Navigation_Pages/Consultations/Consultation_Details/Details_Pages/Consultation_Details.tsx"
    )
);