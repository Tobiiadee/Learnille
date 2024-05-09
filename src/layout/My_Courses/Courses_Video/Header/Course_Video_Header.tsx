/** @format */

import { NavLink } from "react-router-dom";

export default function Course_Video_Header() {
  return (
    <menu className='flex justify-between items-center ' id='course_video_id'>
      <NavLink
        to='/learnille/my courses/courses/play_course/description'
        className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Description
      </NavLink>
      <NavLink
        to='/learnille/my courses/courses/play_course/lesson note'
        className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Lesson Note
      </NavLink>
      <NavLink
        to='/learnille/my courses/courses/play_course/attached file'
        className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Attached File
      </NavLink>
      <NavLink
        to='/learnille/my courses/courses/play_course/comments'
        className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Comments
      </NavLink>
    </menu>
  );
}
