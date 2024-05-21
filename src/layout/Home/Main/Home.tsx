/** @format */
import Header from "../Header/Header";
import HeaderMobile from "../Header/Mobile/HeaderMobile";
import NavBar from "../Navigation/NavBar";
import NavBarMobile from "../Navigation/NavBarMobile";

import { motion, AnimatePresence } from "framer-motion";
// import Wrapper from "./components/ui/Wrapper/Wrapper";
import { useState } from "react";
import Main from "../../../../Main";
import { useParams } from "react-router-dom";
import Modal from "@/components/ui/Modal/Modal";

function App() {
  const [viewNav, setViewNav] = useState(false);

  const { navId } = useParams();
  const navBarViewHandler = () => {
    setViewNav(true);
  };
  const navBarHideHandler = () => {
    setViewNav(false);
  };

  return (
    <main className='w-full pl-1 tab:p-0 tab:w-full tab:flex tab:items-start gap-4 overflow-hidden'>
      <section className='fixed top-14 left-0 flex gap-4 pl-2 w-full h-14 shadow bg-white py-1 nb:hidden z-30'>
        <button type='button' onClick={navBarViewHandler} className=''>
          {""}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
        </button>

        <section className='flex gap-2 items-center'>
          <span className='text-sm text-text font-normal'>Layout</span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 mt-1 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </span>
          <span className='text-layout-text capitalize font-semibold text-sm'>
            {navId}
          </span>
        </section>
      </section>
      <NavBar />

      <AnimatePresence>
        {viewNav && (
          <Modal onClick={navBarHideHandler} className='bg-black/50'>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x:  0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.5 }}
              className='fixed top-0 left-0 z-50'>
              <NavBarMobile onView={navBarHideHandler} />
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      <Header />
      <HeaderMobile />
      <Main />
    </main>
  );
}

export default App;
