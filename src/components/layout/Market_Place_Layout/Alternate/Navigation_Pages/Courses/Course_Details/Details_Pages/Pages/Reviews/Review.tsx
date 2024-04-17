/** @format */

import Rating from "./Rating/Rating";
import Student_Feedback from "./Student_Feedback";

export default function Review() {
  return (
    <section className="flex flex-col gap-[2px]">
      <section>
        <Rating/>
      </section>

      <section>
        <Student_Feedback/>
      </section>
    </section>
  );
}
