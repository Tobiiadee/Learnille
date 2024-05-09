/** @format */

import img from "../../../../../../assets/images/3d96648dc587844fbf3af8e709f856b0.jpg"

export default function Cart_Item() {
  return (
    <section className='mt-1 border-b pb-4 peer'>
      <main className='flex gap-4 w-full'>
        <div className='self-center ml-1'>
          <button type='button' className='text-text rounded-full p-4 active:bg-activeBtn transition duration-300'>
            {""}
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
                d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </button>
        </div>

        <div className='max-w-20 h-20 nb:min-w-24 nb:h-24 hidden tab:flex rounded-md shadow overflow-hidden items-center justify-center'>
          <img src={img} alt='' />
        </div>

        <div className='w-full flex flex-col gap-1'>
          <section className='flex flex-col tab:flex-row justify-between'>
            <h2 className='text-xs text-black capitalize font-semibold w-60 tab:w-52'>
              How to make your first millions as a frontent developer
            </h2>
          </section>

          <section className='mt-1 flex flex-col gap-2  tab:gap-0 tab:flex-row w-full tab:justify-between tab:items-center'>
            <div className='flex gap-2 tab:gap-2 items-center w-full '>
              <section className='flex w-full justify-between'>
                <h2 className='text-xs text-black w-full tab:font-semibold flex items-center gap-1'>
                  <span className='text-text font-normal'>Created by:</span>{" "}
                  <div className='flex items-center gap-[1px]'>
                    {" "}
                    <span>Larry King</span>
                    <span>
                      <svg
                        width='20px'
                        height='20px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='12' cy='12' r='2' fill='#000000' />
                      </svg>
                    </span>
                    <span>John Doe</span>
                  </div>
                </h2>

                <div className='flex gap-1 items-center tab:pr-10'>
                  <h2 className='text-sm tab:text-lg font-semibold text-layout-bg'>
                    $32.00
                  </h2>
                  <h2 className='text-xs text-text font-normal line-through'>
                    $39.00
                  </h2>
                </div>
              </section>
            </div>
          </section>

          <section className='flex gap-4 items-center text-xs text-text'>
            <div className='flex gap-1 items-center'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill=' #FFC300'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#FFC300'
                  className='w-5 h-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                  />
                </svg>
              </span>
              <p className=''>
                5.0 <span>(3,500)</span>
              </p>
            </div>

            <div className='flex gap-1 items-center'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#2f53f5'
                  className='w-5 h-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
              </span>
              <h2 className='text-black flex gap-[1px] items-center'>
                <span className='font-semibold'>900,566</span>{" "}
                <span className='text-xs text-text'>students</span>
              </h2>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
