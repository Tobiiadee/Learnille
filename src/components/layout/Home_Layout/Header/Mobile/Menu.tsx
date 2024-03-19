/** @format */

import { Message, Bell } from "@/assets/svg/HeaderSVG";
import Mobile_Pop from "@/components/ui/Mobile_Pop/Mobile_Pop";
import Modal from "@/components/ui/Modal/Modal";

import { motion } from "framer-motion";

type MenuType = {
  closeMenu: () => void;
  openMenu: boolean,
};

export default function Menu({ closeMenu, openMenu }: MenuType) {
  const SlideInVariant = {
    in: {
      y: -300,
    },
    out: {
      y: 0,
    },
  };

  // console.log(openMenu);
  

  return (
    <Modal onClick={closeMenu}>
      <Mobile_Pop>
        <motion.section 
        variants={SlideInVariant}
        initial={openMenu ? "in" : "out"}
        animate={openMenu ? "out" : "in"}
        transition={{ duration: 0.5 }}
        className='flex flex-col w-screen h-80 py-4 px-5 bg-white rounded-md'>
          <main className='flex justify-between items-center w-full pb-4 border-b border-dotted'>
            <div className='w-14 h-14 rounded-full shadow-md'>
              <img src='' alt='' />
            </div>
            <div>
              <button type='button' className="flex items-center justify-center active:border rounded-full w-10 h-10 active:bg-text" onClick={closeMenu}>
                {""}
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-8 h-8'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18 18 6M6 6l12 12'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </main>

          <menu className='mt-4 flex flex-col text-sm font-semibold'>
            <li className='py-3 px-4 flex gap-4 items-center border-b border-dotted pb-4'>
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

            <li className='py-3 px-4 flex gap-4 items-center border-b border-dotted pb-4'>
              <span>
                <Message />
              </span>

              <span>
                <h2>Messages</h2>
              </span>
            </li>

            <li className='py-3 px-4 flex gap-4 items-center border-b border-dotted pb-4'>
              <span>
                <Bell />
              </span>
              <span>
                <h2>Notification</h2>
              </span>
            </li>

            <li className='py-3 px-4 flex gap-4 items-center border-b border-dotted pb-4'>
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
            </li>
          </menu>
        </motion.section>
      </Mobile_Pop>
    </Modal>
  );
}
