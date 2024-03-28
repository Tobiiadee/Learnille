/** @format */

import { useParams } from "react-router-dom";
import Avaliable_Consultations from "../Nav_pages/Avaliable_Consultations";
import Reviews from "../Nav_pages/Reviews";
import Overview from "../Nav_pages/Overview/Overview";

export default function Home() {
  const { market_place_id } = useParams();

  let page;

  switch (market_place_id) {
    case "available_consultations":
      page = <Avaliable_Consultations />;
      break;
    case "reviews":
      page = <Reviews />;
      break;
    case "overview":
      page = <Overview />;
      break;

    default:
      page = <Overview />;
  }
  return <main>{page}</main>;
}
