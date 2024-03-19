/** @format */

import { useParams } from "react-router-dom";
import Header from "../Header";
import Consultant_Tips from "../Consultant_Tips";
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
    <section className='tab:grid tab:grid-cols-3 gap-4 pr-2 pb-4'>
      <main className='col-span-2'>
        <Header />
        <main>{consultationPages} </main>
      </main>

      <main className='hidden tab:flex flex-col gap-2'>
        <Consultant_Tips />
        <Consultant_Tips />
        <Consultant_Tips />
      </main>
    </section>
  );
}
