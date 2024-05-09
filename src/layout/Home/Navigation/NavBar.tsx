/** @format */
import { NavLink } from "react-router-dom";
import icon from "../../../assets/learnille/White Icon .png";
import {
  ArrowLeft,
  Certificate,
  Chat,
  Consultations,
  Courses,
  MarketPlace,
  Overview,
  PurchaseHistory,
  Setting,
  Support,
  WhishList,
} from "../../../assets/svg/HeaderSVG";

export default function NavBar() {

  return (
    <nav className='fixed bg-layout-bg rounded-r-lg w-[13.7rem] h-screen py-4 flex flex-col mb:hidden nb:block'>
      <div className='flex gap-2 px-4'>
        <span>
          <img src={icon} alt='learnille logo' className='w-6 h-8' />
        </span>
        <h2 className='font-semibold text-white text-lg'>Learnille</h2>
      </div>

      <menu className='mt-8' id='nav'>
        <NavLink
          to='/learnille/overview'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Overview />
          </span>
          <h2>Overview</h2>
        </NavLink>
        <NavLink
          to='/learnille/consultation/'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Consultations />
          </span>
          <h2>Consultation</h2>
        </NavLink>
        <NavLink
          to='/learnille/chat'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Chat />
          </span>
          <h2>Chat</h2>
        </NavLink>
        <NavLink
          to='/learnille/my certificate'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Certificate />
          </span>
          <h2>My Certificate</h2>
        </NavLink>
        <NavLink
          to={`/learnille/my courses/courses`}
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          {/*  */}

          <span>
            <Courses />
          </span>
          <h2>My Courses</h2>
        </NavLink>
        <NavLink
          to='/learnille/wishlist/wishlist/'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <WhishList />
          </span>
          <h2>Wishlist</h2>
        </NavLink>
        <NavLink
          to='/learnille/purchase history'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <PurchaseHistory />
          </span>
          <h2>Purchase History</h2>
        </NavLink>
        <NavLink
          to='/learnille/market place/market_place/'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-6 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <MarketPlace />
          </span>
          <h2>Market Place</h2>
        </NavLink>
      </menu>

      <menu className='mt-6' id='nav'>
        <NavLink
          to='/learnille/settings'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Setting />
          </span>
          <h2>Settings</h2>
        </NavLink>
        <NavLink
          to='/learnille/support'
          className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Support />
          </span>
          <h2>Support</h2>
        </NavLink>
      </menu>

      <section className='flex mt-6'>
        <button
          type='button'
          className='bg-white text-xs mx-auto rounded-md shadow-md px-2 py-2 hover:scale-105 transition duration-300'>
          Earn with Learnille
        </button>
      </section>

      <section className='flex gap-3 items-center border-t border-dotted pt-2 text-sm text-white w-full mt-6'>
        <div className='w-8 h-8 shadow-md ml-2 rounded-full overflow-hidden'>
          <img src='' alt='' />
        </div>
        <div>
          <h2>Username</h2>
          <p className='text-xs font-light -mt-1'>user information</p>
        </div>
        <div>
          <ArrowLeft />
        </div>
      </section>
    </nav>
  );
}
