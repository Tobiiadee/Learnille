import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <menu className='flex justify-between items-center ' id='courses_id'>
      <NavLink
        to='/learnille/market place/marketplace/overview' 
        className='py-3 text-xs tab:text-sm text-text font-semibold flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Overview
      </NavLink>
      <NavLink
        to='/learnille/market place/marketplace/available_consultations'
        className='py-3 text-xs tab:text-sm text-text font-semibold flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Avaliable Consultations
      </NavLink>
      <NavLink
        to='/learnille/market place/marketplace/reviews'
        className='py-3 text-xs tab:text-sm text-text font-semibold flex items-center justify-center hover:border-b hover:bg-white hover:text-black hover:font-semibold hover:border-layout-bg w-3/6 border-b border-text'>
        Reviews
      </NavLink>
    </menu>
  )
}
