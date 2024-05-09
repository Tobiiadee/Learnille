/** @format */

import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Completed_Consultation from "./Completed_Consultation/Completed_Consultation_List";
import Ongoing_Consultation from "./Ongoing_Consultation/Ongoing_Consultation_List";
import Consultation_Tips_List from "./Tips/Consultation_Tips_List";

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
    <section className='nb:grid nb:grid-cols-3 gap-4 pr-2 pb-4'>
      <main className='col-span-2'>
        <Header />
        <main>{consultationPages} </main>
      </main>

      <main className='hidden nb:block'>
        <Consultation_Tips_List />
      </main>
    </section>
  );
}
