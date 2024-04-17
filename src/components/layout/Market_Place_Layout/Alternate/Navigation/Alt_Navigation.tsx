/** @format */

import { NavLink } from "react-router-dom";

export default function Alt_Navigation() {
  // /learnille/:navId/market_place/:market_place_id/:market_id

  return (
    <menu className='flex items-center ' id='courses_id'>
      <NavLink
        to='/learnille/market place/market_place/home/courses'
        className='py-3 text-xs tab:text-sm text-text font-semibold flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Courses
      </NavLink>
      <NavLink
        to='/learnille/market place/market_place/home/consultations'
        className='py-3 text-xs tab:text-sm text-text font-semibold flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Consultations
      </NavLink>
    </menu>
  );
}
