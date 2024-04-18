/** @format */

import First_Sect from "../Make_Payment/First_Sect";
import Second_Sect from "../Make_Payment/Second_Sect";
import Gift_Course_Details from "./Gift_Course_Details";

export default function Gift_Course() {
  return (
    <section className='flex flex-col gap-2 tab:pr-72'>
      <section className='text-xs tab:text-sm text-text flex flex-col gap-1'>
        <h2>
          Courses / How to make millions... / Gift Course/{" "}
          <span className='underline text-layout-bg'>Make Payment</span>
        </h2>
      </section>
      <Gift_Course_Details />
      <section>
        <First_Sect />
        <Second_Sect />
      </section>
    </section>
  );
}
