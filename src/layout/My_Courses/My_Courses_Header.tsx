/** @format */
import { NavLink } from "react-router-dom";

export default function My_Courses_Header() {
  return (
    <menu className='flex justify-between items-center 'id='courses_id'>
      <NavLink
        to='/learnille/my courses/courses/ongoing_courses'
        className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Ongoing Courses
      </NavLink>
      <NavLink
        to='/learnille/my courses/courses/completed_courses'
        className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Completed Courses
      </NavLink>
    </menu>
  );
}
