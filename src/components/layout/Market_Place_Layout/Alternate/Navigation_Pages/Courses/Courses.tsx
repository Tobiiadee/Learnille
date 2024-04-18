/** @format */

import Course_Item from "./Course_Item";
import { Courses_List } from "@/lib/Courses/Courses_Utils";

export default function Courses() {
  const course_items = Courses_List.map((item) => (
    <Course_Item
      key={item.course_title}
      category={item.category}
      price={item.price}
      title={item.course_title}
      discountedPrice={item.discount_price}
      rating={item.courseRating}
      reviews={item.no_of_reviews}
      student={item.students}
    />
  ));

  return (
    <section className='grid tab:grid-cols-2 nb:grid-cols-3 justify-center w-full gap-4 px-4 tab:px-0'>{course_items}</section>
  );
}
