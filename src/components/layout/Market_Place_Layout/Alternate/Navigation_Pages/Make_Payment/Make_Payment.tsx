/** @format */

import Related_Courses from "../Courses/Course_Details/Related_Course/Related_Courses";
import First_Sect from "./First_Sect";
import Second_Sect from "./Second_Sect";

export default function Make_Payment() {
  return (
    <section className='flex flex-col gap-2 pr-72'>
      <section className='text-sm text-black flex flex-col gap-1'>
        <h2>
          Courses / How to make millions... / Add to Cart / Cart /{" "}
          <span className='underline text-layout-bg'>Make Payment</span>
        </h2>
      </section>
      <section className="border rounded">
        <First_Sect />
        <Second_Sect />
      </section>

      <Related_Courses/>
    </section>
  );
}
