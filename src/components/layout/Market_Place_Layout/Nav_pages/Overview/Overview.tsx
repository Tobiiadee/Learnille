/** @format */

import About from "./About/About";
import Achievements from "./Achievements/Achievements";
import Background_Information from "./Background_Information/Background_Information";
import Experience from "./Experience/Experience";

export default function Overview() {
  return (
    <main className="-mt-4 flex flex-col gap-4 pb-8">
      <About/>
      <Background_Information />
      <section className="grid tab:grid-cols-2 gap-4">
        <Experience />
        <Achievements/>
      </section>
      
    </main>
  );
}
