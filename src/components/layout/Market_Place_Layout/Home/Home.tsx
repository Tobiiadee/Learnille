/** @format */

import { useParams } from "react-router-dom";
import Avaliable_Consultations from "../Nav_pages/Available_Consultations/Main/Avaliable_Consultations";
import Reviews from "../Nav_pages/Reviews/Reviews";
import Overview from "../Nav_pages/Overview/Main/Overview";

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
  return <main className="pb-8">{page}</main>;
}
