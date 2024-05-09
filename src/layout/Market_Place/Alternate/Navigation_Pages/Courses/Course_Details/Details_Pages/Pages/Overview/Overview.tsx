/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "@/store/Main/Store";

import Course_For from "./Course_For";

export default function Overview() {
  const { course } = useSelector(
    (state: RootStateType) => state.course_details
  );


  return (
    <main className='flex flex-col gap-4 px-4 tab:px-0'>
      <section className='flex flex-col gap-4 text-black'>
        <h2 className='text-sm font-semibold'>Description</h2>
        <p className='text-sm font-normal'>{course.description.description}</p>
      </section>

      <section className='text-sm font-semibold text-black flex flex-col gap-2'>
        <h2 className=''>Who is this course for?</h2>
        <div className=' flex flex-col gap-2'>
          {course.description.whoIsTheCourseFor.map((text) => (
            <Course_For key={text} text={text} />
          ))}
        </div>
      </section>

      <section className='text-sm font-semibold text-black flex flex-col gap-2'>
        <h2 className=''>Course requirments</h2>
        <div className=' flex flex-col gap-2'>
          {course.description.courseRequirements.map((text) => (
            <Course_For key={text} text={text} />
          ))}
        </div>
      </section>
    </main>
  );
}
