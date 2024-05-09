/** @format */

import { useParams } from "react-router-dom";
import Overview from "@/layout/Overview/Main/Overview";
import Consultations from "@/layout/Consultation/Main/Consultations";
import Chat from "@/layout/Chat/Main/Chat";
import MyCertificate from "@/layout/My_Certificate/MyCertificate";
import MyCourses from "@/layout/My_Courses/Main/MyCourses";
import PurchaseHistory from "@/layout/Purchase_History/Main/PurchaseHistory";
import MarketPlace from "@/layout/Market_Place/Main/MarketPlace";
import Settings from "@/layout/Settings/Main/Settings";
import Support from "../../Support/Support";
import Wrapper from "@/components/ui/Wrapper/Wrapper";
import WishList from "@/layout/Wishlist/Main/WishList";

export default function Main() {
  const { navId } = useParams();

  let page;

  switch (navId) {
    case "overview":
      page = <Overview />;
      break;
    case "consultation":
      page = <Consultations />;
      break;
    case "chat":
      page = <Chat />;
      break;
    case "my certificate":
      page = <MyCertificate />;
      break;

    case "my courses":
      page = <MyCourses />;
      break;

    case "purchase history":
      page = <PurchaseHistory />;
      break;
    case "market place":
      page = <MarketPlace />;
      break;

    case "settings":
      page = <Settings />;
      break;

    case "wishlist":
      page = <WishList/>;
      break;

    case "support":
      page = <Support />;
      break;

    default:
      page = <Overview />;
      break;
  }

  return <Wrapper>{page}</Wrapper>;
}
