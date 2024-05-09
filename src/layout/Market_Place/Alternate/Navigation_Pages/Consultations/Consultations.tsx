/** @format */

import { Consultation_List } from "@/lib/Consultations/Consultation_Utils";
import Consultation_Item from "./Consultation_Item";

export default function Consultations() {
  const Consultation_Items = Consultation_List.map((item) => (
    <Consultation_Item
      key={item.course_title}
      category={item.category}
      price={item.price}
      title={item.course_title}
      discountedPrice={item.discount_price}
      rating={item.courseRating}
      reviews={item.no_of_reviews}
      author={item.author}
      time={item.time}
      session={item.sessions}
    />
  ));

  return (
    <section className='grid tab:grid-cols-2 nb:grid-cols-3 justify-center w-full gap-2 px-4 tab:px-0'>
      {Consultation_Items}
    </section>
  );
}
