/** @format */

import Home from "@/components/layout/Market_Place_Layout/Alternate/Home/Home";
import Cart from "@/components/layout/Market_Place_Layout/Alternate/Navigation_Pages/Cart/Cart";
import Details_Home from "@/components/layout/Market_Place_Layout/Alternate/Navigation_Pages/Courses/Course_Details/Home/Details_Home";
import Gift_Course from "@/components/layout/Market_Place_Layout/Alternate/Navigation_Pages/Gift_Course/Gift_Course";
import Make_Payment from "@/components/layout/Market_Place_Layout/Alternate/Navigation_Pages/Make_Payment/Make_Payment";
import { useParams } from "react-router-dom";

export default function MarketPlace() {
  const { market_place_id } = useParams();

  let page;

  switch (market_place_id) {
    case "home":
      page = <Home />;
      break;
    case "cart":
      page = <Cart />;
      break;
    case "details":
      page = <Details_Home />;
      break;
    case "make payment":
      page = <Make_Payment />;
      break;
    case "gift course":
      page = <Gift_Course />;
      break;
    default:
      page = <Home />;
      break;
  }

  return <main className='tab:pr-6 nb:pr-0 pb-8'>{page}</main>;
}
