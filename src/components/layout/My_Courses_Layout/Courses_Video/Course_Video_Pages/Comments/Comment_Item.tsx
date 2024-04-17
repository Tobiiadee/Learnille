/** @format */

import img from "../../../../../../assets/images/075826d0f7062c2b072efd481ac7837b.jpg";

import { useState } from "react";

export default function Comment_Item() {
  const [reply, setReply] = useState(false);

  const replyHandler = () => setReply((prev) => !prev);

  return (
    <main className='flex gap-4'>
      <section>
        <div className='w-7 h-7 shadow rounded-full overflow-hidden flex items-center justify-center'>
          <img src={img} alt='' />
        </div>
      </section>

      <section className='flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <h2 className='text-sm font-semibold text-black'>Ronald Richard</h2>
          <span className='w-1 h-1 bg-text font-bold text-sm rounded-full'></span>
          <span className='text-xs text-text font-normal'>1 week</span>
        </div>

        <div>
          <p className='text-xs text-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ratione itaque reiciendis? Quis reprehenderit at, nostrum nesciunt
            ducimus esse molestias.
          </p>
        </div>

        <div>
          <button
            type='button'
            onClick={replyHandler}
            className={`text-xs ${reply ? "text-layout-bg" : "text-text"}  flex gap-2 items-center`}>
            {""}
            <div>
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
                  d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                />
              </svg>
            </div>
            <div className='font-medium'>REPLY</div>
          </button>

          {reply && (
            <section className='flex gap-2 px-2 mt-2'>
              <div className='flex gap-2 items-center py-1 px-2 bg-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 text-text'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                  />
                </svg>

                <input
                  type='text'
                  placeholder='Write your reply'
                  className='w-40 tab:w-96 appearance-none outline-none border-none py-1 px-2 text-xs placeholder:text-xs'
                />
              </div>

              <div>
                <button
                  type='button'
                  className='flex justify-between bg-[#edf1ff]  active:bg-[#ced5ee] transition duration-300'>
                  <span className='text-[8px] self-center tab:text-[8px] text-layout-bg font-semibold py-1 px-1 '>
                    Post Reply
                  </span>
                  <span className='text-white py-2 px-2  bg-layout-bg rounded-r-md '>
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
                        d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
