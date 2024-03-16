/** @format */
import { NavLink } from "react-router-dom";
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
} from "../../../../assets/svg/HeaderSVG";

export default function NavBar() {
  return (
    <nav className='bg-layout-bg rounded-r-lg w-44 h-max py-4 flex flex-col mb:hidden tab:block'>
      <div className='flex gap-1 px-4'>
        <span></span>
        <h2 className="font-semibold text-white">Learnille</h2>
      </div>

      <menu className='mt-10' id="nav">
        <NavLink to="/learnille/overview" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Overview />
          </span>
          <h2>Overview</h2>
        </NavLink>
        <NavLink to="/learnille/consultation" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Consultations />
          </span>
          <h2>Consultation</h2>
        </NavLink>
        <NavLink to="/learnille/chat" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Chat />
          </span>
          <h2>Chat</h2>
        </NavLink>
        <NavLink to="/learnille/my certificate" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Certificate />
          </span>
          <h2>My Certificate</h2>
        </NavLink>
        <NavLink to="/learnille/my courses" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Courses />
          </span>
          <h2>My Courses</h2>
        </NavLink>
        <NavLink to="/learnille/purchase history" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <PurchaseHistory />
          </span>
          <h2>Purchase History</h2>
        </NavLink>
        <NavLink to="/learnille/market place" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <MarketPlace />
          </span>
          <h2>Market Place</h2>
        </NavLink>
      </menu>

      <section className='mt-20'>
        <NavLink to="/learnille/settings" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Setting />
          </span>
          <h2>Settings</h2>
        </NavLink>
        <NavLink to="/learnille/support" className='flex items-center text-sm text-white font-light hover:text-black hover:bg-background gap-2 px-4 py-2 cursor-pointer transition-all duration-200'>
          <span>
            <Support />
          </span>
          <h2>Support</h2>
        </NavLink>
      </section>

      <section className='flex mt-10'>
        <button
          type='button'
          className='bg-white text-xs mx-auto rounded-md shadow-md px-2 py-2 hover:scale-105 transition duration-300'>
          Earn with Learnille
        </button>
      </section>

      <section className='flex gap-3 items-center border-t border-dotted pt-2 text-sm text-white w-full mt-10'>
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
