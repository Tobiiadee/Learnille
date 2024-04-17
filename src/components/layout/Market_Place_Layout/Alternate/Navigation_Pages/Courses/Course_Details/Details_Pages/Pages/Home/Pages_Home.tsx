/** @format */

import { useParams } from "react-router-dom";

import Overview from "../Overview/Overview";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import Review from "../Reviews/Review";

export default function Pages_Home() {
  const { details_page_id } = useParams();

  let page;

  switch (details_page_id) {
    case "overview":
      page = <Overview />;
      break;
    case "curriculum":
      page = <Curriculum />;
      break;
    case "instructor":
      page = <Instructor />;
      break;
    case "review":
      page = <Review />;
      break;

    default:
      page = <Overview />;
      break;
  }
  return <div>{page}</div>;
}
