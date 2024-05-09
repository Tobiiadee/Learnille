/** @format */

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <menu className='flex justify-between items-center ' id='consultant_id'>
      <NavLink
        to='/learnille/consultation/ongoing_consultations' 
        className='py-3 text-xs tab:text-sm text-text font-semibold flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Ongoing Consultations
      </NavLink>
      <NavLink
        to='/learnille/consultation/completed_consultations'
        className='py-3 text-xs tab:text-sm text-text font-semibold flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Completed Consulations
      </NavLink>
    </menu>
  );
}
