import { useParams } from "react-router-dom";
import Completed_Consultation from "./Completed_Consultation/Completed_Consultation";
import Ongoing_Consultation from "./Ongoing_Consultation/Ongoing_Consultation";

export default function Consultation_Home() {

    const { consultation_id } = useParams();

    let consultationPages;
  
    switch (consultation_id) {
      case "completed_consultations":
        consultationPages = <Completed_Consultation />;
        break;
  
      default:
        consultationPages = <Ongoing_Consultation />;
        break;
    }

  return (
    <section>
      {consultationPages}
    </section>
  )
}
