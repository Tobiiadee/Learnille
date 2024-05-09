/** @format */

import {
  ArrowD,
  Bell,
  Message,
  SearchV,
} from "../../../assets/svg/HeaderSVG";

export default function Header() {
  return (
    <div className='fixed top-2 left-60 w-9/12 items-center justify-between bg-white px-2 py-2 rounded-md shadow hidden nb:flex z-40'>
      <main className='flex flex-col gap-0'>
        <h2 className='text-layout-bg font-bold'>Hi Username</h2>
        <p className='text-xs text-text font-normal -mt-1'>
          Lets learn something today
        </p>
      </main>

      <main className='flex items-center justify-around w-8/12'>
        <section className='flex items-center border focus w-72 py-1 px-3 rounded-md overflow-hidden'>
          <div className='w-full'>
            <input
              type='search'
              id='search'
              className='border-none w-60 outline-none text-sm placeholder:text-sm'
              placeholder='Search...'
            />
          </div>
          <span>
            <SearchV />
          </span>
        </section>

        <section className='flex items-center justify-between w-4/12'>
          <div className='flex gap-4'>
            <button type='button' className='bg-background rounded p-2'>
              {""}
              <Message />
            </button>
            <button type='button' className='bg-background rounded p-2'>
              {""}
              <Bell />
            </button>
          </div>

          <div>
            <button type='button' className='flex gap-2 items-center'>
              {""}
              <span className='w-6 h-6 rounded-full shadow flex justify-center items-center overflow-hidden'>
                <img src='' alt='' />
              </span>
              <span>
                <ArrowD />
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
