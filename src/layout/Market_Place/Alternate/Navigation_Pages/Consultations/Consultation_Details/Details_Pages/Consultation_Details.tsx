/** @format */

import { useParams } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Consultation_Pricing from "../Aside/Consultation_Pricing";
import Consultation_Overview from "./pages/Consultations_Overview/Consultation_Overview";
import Consultation_Reviews from "./pages/Consultation_Reviews/Consultation_Reviews";

export default function Consultation_Details() {
  const { consultation_details_page_id } = useParams();

  let page;

  switch (consultation_details_page_id) {
    case "consultation overview":
      page = <Consultation_Overview />;
      break;
    case "reviews":
      page = <Consultation_Reviews />;
      break;
    default:
      break;
  }

  return (
    <>
      <h2 className='text-xs text-text'>
        Market Place / Consultations / How to make millions.. /{" "}
        <span className='text-layout-bg underline'>Consultation Overview</span>
      </h2>
      <main className='mt-2 grid nb:grid-cols-[600px_600px_420px] gap-4'>
        <section className='flex flex-col gap-2'>
          <section>
            <Navigation />
          </section>
          <section>{page}</section>
          <main>
            <h2 className='text-lg text-black font-semibold'>
              Similar Consultations
            </h2>
          </main>
        </section>
        <section>
          <Consultation_Pricing />
        </section>
      </main>
    </>
  );
}
