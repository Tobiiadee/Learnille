/** @format */

import Fifth_Section from "./Sections/Fifth_Section";
import First_Section from "./Sections/First_Section";
import Fourth_Section from "./Sections/Fourth_Section";
import Second_Section from "./Sections/Second_Section";
import Third_Section from "./Sections/Third_Section";

export default function Course_Pricing() {
  return (
    <main className='w-full nb:w-[25rem] tab:grid tab:grid-cols-2 nb:flex nb:flex-col flex flex-col gap-1'>
      <First_Section />
      <Second_Section />
      <Third_Section />
      <Fourth_Section />
      <Fifth_Section/>
    </main>
  );
}
