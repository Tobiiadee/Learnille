/** @format */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal/Modal";
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
} from "../../../../assets/svg/HeaderSVG";

type ViewType = {
  onView: () => void;
  viewNav: boolean;
};

export default function NavBar({ onView, viewNav }: ViewType) {
  const SlideInVariant = {
    in: {
      x: -300,
    },
    out: {
      x: 0,
    },
  };

  return (
    <Modal onClick={onView}>
      <motion.nav
        variants={SlideInVariant}
        initial={viewNav ? "in" : "out"}
        animate={viewNav ? "out" : "in"}
        transition={{ duration: 0.5 }}
        onClick={onView}
        className='fixed top-0 left-0 w-64 bg-layout-bg rounded-r-lg h-svh py-4 flex flex-col z-50'>
        <section className='flex w-full justify-around items-center'>
          <div className='flex gap-1 px-4'>
            <span></span>
            <h2 className='font-semibold text-white'>Learnille</h2>
          </div>

          <div>
            <button
              type='button'
              onClick={onView}
              className='p-2 text-white rounded'>
              {""}
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </span>
            </button>
          </div>
        </section>

        <menu className='mt-8'>
          <NavLink
            to='/learnille/overview'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <Overview />
            </span>
            <h2>Overview</h2>
          </NavLink>
          <NavLink
            to='/learnille/consultation/ongoing_consultations'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <Consultations />
            </span>
            <h2>Consultation</h2>
          </NavLink>
          <NavLink
            to='/learnille/chat'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <Chat />
            </span>
            <h2>Chat</h2>
          </NavLink>
          <NavLink
            to='/learnille/my certificate'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <Certificate />
            </span>
            <h2>My Certificate</h2>
          </NavLink>
          <NavLink
            to='/learnille/my courses'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <Courses />
            </span>
            <h2>My Courses</h2>
          </NavLink>
          <NavLink
            to='/learnille/wishlist'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <WhishList/>
            </span>
            <h2>Wishlist</h2>
          </NavLink>
          <NavLink
            to='/learnille/purchase history'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <PurchaseHistory />
            </span>
            <h2>Purchase History</h2>
          </NavLink>
          <NavLink
            to='/learnille/market place'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <MarketPlace />
            </span>
            <h2>Market Place</h2>
          </NavLink>
        </menu>

        <section className='mt-6' id='nav'>
          <NavLink
            to='/learnille/settings'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <Setting />
            </span>
            <h2>Settings</h2>
          </NavLink>
          <NavLink
            to='/learnille/support'
            className='flex items-center text-sm text-white font-light active:text-black active:bg-background gap-2 px-4 py-3 cursor-pointer transition-all duration-200'>
            <span>
              <Support />
            </span>
            <h2>Support</h2>
          </NavLink>
        </section>

        <section className='flex mt-6'>
          <button
            type='button'
            className='bg-white text-xs mx-auto rounded-md shadow-md px-2 py-2 hover:scale-105 transition duration-300'>
            Earn with Learnille
          </button>
        </section>

        <section className='flex justify-around items-center border-t border-dotted pt-8 text-sm text-white w-full mt-10'>
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
      </motion.nav>
    </Modal>
  );
}
