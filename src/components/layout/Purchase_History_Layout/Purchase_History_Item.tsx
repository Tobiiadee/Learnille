/** @format */

import { useState } from "react";
import Purchased_Item from "./Purchased_Item";

export default function Purchase_History_Item() {
  const [openHistory, setOpenHistory] = useState(false);

  const openHistoryHandler = () => setOpenHistory((prev) => !prev);

  return (
    <section className="">
      <main className='bg-white px-4 py-2 flex justify-between items-center'>
        <section>
          <h2 className='text-sm font-semibold text-black'>
            1st August, 2023 at 11:50 PM
          </h2>

          <span className='text-xs text-text flex gap-2 mt-1'>
            <div className='flex gap-1 items-center'>
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
                  d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
                />
              </svg>
              <h2>3 Courses</h2>
            </div>
            <div className='flex gap-1 items-center'>
              <svg
                width='18px'
                height='18px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18 8.5V8.35417C18 6.50171 16.4983 5 14.6458 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H9.42708C7.53436 19 6 17.4656 6 15.5729V15.5M12 3V21'
                  stroke='#2f53f5'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <h2>$175.00 USD</h2>
            </div>
            <div className='flex gap-1 items-center'>
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
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                />
              </svg>
              <h2>Credit Card</h2>
            </div>
          </span>
        </section>

        <button
          type='button'
          onClick={openHistoryHandler}
          className={`${openHistory ? "bg-layout-bg text-white" : "bg-[#edf1ff]"} active:bg-[#ced5ee] w-7 h-7 text-black rounded-sm flex items-center justify-center transition duration-300`}>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`w-4 h-3 ${openHistory ? "rotate-180" : ""} transition duration-300`}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
            />
          </svg>
        </button>
      </main>

      {openHistory && (
        <main className='bg-white flex flex-col nb:flex-row gap-8 px-4 py-2 border-t pt-4 shadow-lg pb-4 '>
          <section className='flex flex-col gap-4 nb:border-r pr-6'>
            <Purchased_Item />
            <Purchased_Item />
          </section>

          <main className='border-t pt-4 nb:border-none nb:pt-0 nb:self-center bg-white flex flex-col gap-4 '>
            <section>
              <h2 className='text-sm font-semibold text-black'>
                1st August, 2023 at 11:50 PM
              </h2>

              <div className='text-xs text-text flex gap-2'>
                <div className='flex gap-1 items-center'>
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
                      d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
                    />
                  </svg>
                  <h2>3 Courses</h2>
                </div>
                <div className='flex gap-1 items-center'>
                  <svg
                    width='18px'
                    height='18px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18 8.5V8.35417C18 6.50171 16.4983 5 14.6458 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H9.42708C7.53436 19 6 17.4656 6 15.5729V15.5M12 3V21'
                      stroke='#2f53f5'
                      strokeWidth='1'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <h2>$175.00 USD</h2>
                </div>
                <div className='flex gap-1 items-center'>
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
                      d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                    />
                  </svg>
                  <h2>Credit Card</h2>
                </div>
              </div>
            </section>

            <section className='text-xs font-semibold flex justify-between gap-2'>
              <div className="flex gap-4">
                <h2>Kelvin Gilbert</h2>
                <span>4142 **** **** ****</span>
              </div>

              <span>04/24</span>
            </section>
          </main>
        </main>
      )}
    </section>
  );
}
