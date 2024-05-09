/** @format */

import About from "../About/About";
import Achievements from "../Achievements/Achievements";
import Background_Information from "../Background_Information/Background_Information";
import Booked_Consultations from "../Booked_Consultations/Booked_Consultations";
import Experience from "../Experience/Experience";
import Similar_Consultations from "../Similar_Consultations/Similar_Consultations";

export default function Overview() {
  return (
    <main className='-mt-4 flex flex-col gap-4 pb-8'>
      <About />
      <Background_Information />
      <section className='grid tab:grid-cols-2 gap-4'>
        <Experience />
        <Achievements />
      </section>
      <section className="flex flex-col gap-4">
        <Booked_Consultations />
        <Similar_Consultations />
      </section>
    </main>
  );
}
