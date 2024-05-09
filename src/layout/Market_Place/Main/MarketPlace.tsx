/** @format */

import Home from "../Alternate/Home/Home";
import Cart from "../Alternate/Navigation_Pages/Cart/Cart";
import Consultation_Details from "../Alternate/Navigation_Pages/Consultations/Consultation_Details/Details_Pages/Consultation_Details";
import Details_Home from "../Alternate/Navigation_Pages/Courses/Course_Details/Home/Details_Home";
import Gift_Course from "../Alternate/Navigation_Pages/Gift_Course/Gift_Course";
import Make_Payment from "../Alternate/Navigation_Pages/Make_Payment/Make_Payment";
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
    case "course_details":
      page = <Details_Home />;
      break;
    case "consultation_details":
      page = <Consultation_Details />;
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
