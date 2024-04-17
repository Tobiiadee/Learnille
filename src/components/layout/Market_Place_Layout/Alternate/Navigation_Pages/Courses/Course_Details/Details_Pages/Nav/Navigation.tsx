/** @format */

import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <menu className='flex items-center ' id='courses_id'>
        <NavLink
          to='/learnille/market place/market_place/details/course/overview'
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Overview
        </NavLink>
        <NavLink
          to='/learnille/market place/market_place/details/course/curriculum'
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Curriculum
        </NavLink>
        <NavLink
          to='/learnille/market place/market_place/details/course/instructor'
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Instructor
        </NavLink>
        <NavLink
          to='/learnille/market place/market_place/details/course/review'
          className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
          Review
        </NavLink>
      </menu>
    </nav>
  );
}
