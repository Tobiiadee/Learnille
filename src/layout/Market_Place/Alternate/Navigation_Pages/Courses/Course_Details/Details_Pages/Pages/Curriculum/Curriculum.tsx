/** @format */

// import { useSelector } from "react-redux";
// import { RootStateType } from "@/store/Main/Store";
import Course_Section from "./Course_Curriculum/Course_Section";


export default function Curriculum() {
  // const { course } = useSelector(
  //   (state: RootStateType) => state.course_details
  // );

  return (
    <section className='flex flex-col gap-2'>
      <Course_Section/>
    </section>
  );
}
