/** @format */

import { NavLink } from "react-router-dom";

import { useParams } from "react-router-dom";
import My_Courses_Home from "@/components/layout/My_Courses_Layout/My_Courses_Home";
import Courses_Video from "@/components/layout/My_Courses_Layout/Courses_Video/Courses_Video";

export default function MyCourses() {
  const { courses_id } = useParams();

  let coursesPage;
  switch (courses_id) {
    case "play_course":
      coursesPage = <Courses_Video />;
      break;

    default:
      coursesPage = <My_Courses_Home />;
      break;
  }

  return (
    <section className='pb-6 flex flex-col'>
      <main className='pr-4'>{coursesPage}</main>

      <main className='mt-8 flex gap-1 items-center justify-center nb:w-8/12'>
        <NavLink to='/learnille/my courses/courses/completed_courses'>
          {""}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 hover:border rounded'>
              <path
                fillRule='evenodd'
                d='M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </NavLink>
        <div className='w-4 h-4 rounded-full shadow text-xs flex items-center justify-center bg-layout-bg text-white'>
          1
        </div>
        <NavLink to='/learnille/my%20courses/courses/play_course/course_video_description'>
          {""}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 hover:border rounded'>
              <path
                fillRule='evenodd'
                d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </NavLink>
      </main>
    </section>
  );
}
