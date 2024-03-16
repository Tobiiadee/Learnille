/** @format */

import { Message, Bell } from "@/assets/svg/HeaderSVG";
import Mobile_Pop from "@/components/ui/Mobile_Pop/Mobile_Pop";
import Modal from "@/components/ui/Modal/Modal";

type MenuType = {
  closeMenu: () => void;
};

export default function Menu({ closeMenu }: MenuType) {
  return (
    <Modal onClick={closeMenu}>
      <Mobile_Pop>
        <section className='flex flex-col w-[22rem] h-72 py-4 px-5 bg-white rounded-md'>
          <main className='flex justify-between items-center w-full pb-4 border-text border-b border-dotted'>
            <div className='w-14 h-14 rounded-full shadow-md'>
              <img src='' alt='' />
            </div>
            <div>
              <button type='button' onClick={closeMenu}>
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

          <menu className='mt-4 flex flex-col font-semibold'>
            <li className='py-3 px-4 flex gap-4 items-center'>
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

            <li className='py-3 px-4 flex gap-4 items-center'>
              <span>
                <Message />
              </span>

              <span>
                <h2>Messages</h2>
              </span>
            </li>

            <li className='py-3 px-4 flex gap-4 items-center'>
              <span>
                <Bell />
              </span>
              <span>
                <h2>Notification</h2>
              </span>
            </li>
          </menu>
        </section>
      </Mobile_Pop>
    </Modal>
  );
}
