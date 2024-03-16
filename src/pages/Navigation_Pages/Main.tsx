/** @format */

import { useParams } from "react-router-dom";
import Overview from "./Overview";
import Consultations from "./Consultations";
import Chat from "./Chat";
import MyCertificate from "./MyCertificate";
import MyCourses from "./MyCourses";
import PurchaseHistory from "./PurchaseHistory";
import MarketPlace from "./MarketPlace";
import Settings from "./Settings";
import Support from "./Support";
import Wrapper from "@/components/ui/Wrapper/Wrapper";

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

    case "support":
      page = <Support />;
      break;

    default:
      page = <Overview />;
      break;
  }

  return <Wrapper>{page}</Wrapper>;
}
