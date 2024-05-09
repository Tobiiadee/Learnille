/** @format */

import { useSelector } from "react-redux";
import { RootStateType } from "@/store/Main/Store";

import { NavLink } from "react-router-dom";

export default function Navigation() {
  const { course } = useSelector(
    (state: RootStateType) => state.course_details
  );

  return (
    <nav>
      <menu className='flex items-center ' id='courses_id'>
        <NavLink
          to={`/learnille/market place/market_place/course_details/${course.title}/overview`}
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Overview
        </NavLink>
        <NavLink
          to={`/learnille/market place/market_place/course_details/${course.title}/curriculum`}
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Curriculum
        </NavLink>
        <NavLink
          to={`/learnille/market place/market_place/course_details/${course.title}/instructor`}
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Instructor
        </NavLink>
        <NavLink
          to={`/learnille/market place/market_place/course_details/${course.title}/review`}
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Review
        </NavLink>
      </menu>
    </nav>
  );
}
