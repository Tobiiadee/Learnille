/** @format */

import { NavLink } from "react-router-dom";

import { Message, Bell } from "@/assets/svg/HeaderSVG";
import Mobile_Pop from "@/components/ui/Mobile_Pop/Mobile_Pop";
import Modal from "@/components/ui/Modal/Modal";

import { motion } from "framer-motion";

type MenuType = {
  closeMenu: () => void;
  openMenu: boolean;
};

export default function Menu({ closeMenu, openMenu }: MenuType) {
  const SlideInVariant = {
    in: {
      scale: 0.9,
    },
    out: {
      scale: 1,
    },
  };

  return (
    <Modal className='' onClick={closeMenu}>
      <Mobile_Pop classNames='right-4 top-10'>
        <motion.section
          variants={SlideInVariant}
          initial={openMenu ? "in" : "out"}
          animate={openMenu ? "out" : "in"}
          transition={{ duration: 0.3 }}
          onClick={closeMenu}
          className='flex flex-col w-52 tab:w-72 h-max py-4 px-5 bg-background text-white rounded-md'>
          <main className='flex justify-end items-center w-full'>
            <div>
              <button
                type='button'
                className='flex items-center justify-center active:rounded-full w-6 h-6 active:bg-text'>
                {""}
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-4 h-4'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </main>

          <menu className='flex flex-col text-sm font-semibold text-black'>
            <li className='py-2 px-4 flex gap-4 items-center border-b border-dotted pb-4 active:bg-[#d1ecff]'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 text-layout-bg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              </span>
              <span>
                <p>Profile</p>
              </span>
            </li>

            <li className='py-2 px-4 flex gap-4 items-center border-b border-dotted pb-4 active:bg-[#d1ecff]'>
              <span>
                <Message />
              </span>

              <span>
                <h2>Messages</h2>
              </span>
            </li>

            <li className='py-2 px-4 flex gap-4 items-center border-b border-dotted pb-4 active:bg-[#d1ecff]'>
              <span>
                <Bell />
              </span>
              <span>
                <h2>Notification</h2>
              </span>
            </li>

            <NavLink
              to='/learnille/consultation/consultation_tips'
              className='py-2 px-4 flex gap-4 items-center active:bg-[#d1ecff]'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 text-layout-bg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                  />
                </svg>
              </span>
              <span>
                <h2>Tips</h2>
              </span>
            </NavLink>
          </menu>
        </motion.section>
      </Mobile_Pop>
    </Modal>
  );
}
