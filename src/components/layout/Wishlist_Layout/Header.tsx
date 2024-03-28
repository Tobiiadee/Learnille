import { NavLink } from "react-router-dom"


export default function Header() {
  return (
    <menu className='flex justify-between items-center 'id='courses_id'>
    <NavLink
      to='/learnille/wishlist/wishlist/consultation_wishlist'
      className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
      Consultation Wishlist
    </NavLink>
    <NavLink
      to='/learnille/wishlist/wishlist/course_wishlist'
      className='py-3 text-xs tab:text-sm text-text font-normal flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
      Course Wishlist
    </NavLink>
  </menu>
  )
}
