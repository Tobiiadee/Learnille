/** @format */

import { SearchV } from "@/assets/svg/HeaderSVG";
import Chat_List from "@/components/layout/Chat_Layout/Chat_List";
import Card from "@/components/ui/Card/Card";

export default function Chat() {
  return (
    <section className='tab:grid tab:grid-cols-3 gap-4 pr-2 pb-4'>
      <Card classNames='col-span-2 flex flex-col'>
        <main className='flex justify-between w-full border-b pb-4'>
          <section className='flex gap-2'>
            <span className='w-8 h-8 rounded-full shadow'>
              <img src='' alt='' />
            </span>

            <span className='flex flex-col'>
              <h2 className='text-sm font-semibold'>John Doe</h2>
              <p className='text-xs text-text -mt-1'>online</p>
            </span>
          </section>

          <section className='flex gap-2 tab:gap-4 items-center '>
            <div className='flex items-center border w-72 py-1 px-3 rounded-md overflow-hidden'>
              <div className='w-full'>
                <input
                  type='text'
                  className='border-none w-60 outline-none text-sm placeholder:text-sm'
                  placeholder='Search...'
                />
              </div>
              <span>
                <SearchV />
              </span>
            </div>

            <button type='button' >
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
                  d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
                />
              </svg>
            </button>
          </section>
        </main>

        <main className='h-[20rem] border-b pb-4'></main>

        <main className='w-full flex items-center gap-2 mt-3  px-4'>
          <input
            type='text'
            placeholder='Type your message'
            className='w-11/12 h-8 py-2 px-2 outline-none border-none text-xs rounded-sm bg-[#e4e4e4] placeholder:text-xs placeholder:font-normal placeholder:text-black'
          />

          <button
            type='button'
            className='py-2 px-3 bg-layout-bg rounded-sm shadow'>
            {""}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#fff'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 text-white'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
              />
            </svg>
          </button>
        </main>
      </Card>

      <Card classNames='col-span-1'>
        <section className="flex flex-col w-full gap-2">
          <h2 className='text-sm font-bold'>Messages</h2>

          <div className='flex items-center self-center border w-72 py-1 px-3 rounded-md overflow-hidden'>
            <div className='w-full'>
              <input
                type='text'
                id='search'
                className='border-none w-60 outline-none text-sm placeholder:text-sm'
                placeholder='Search...'
              />
            </div>
            <span>
              <SearchV />
            </span>
          </div>
        </section>

        <section className="mt-4 flex flex-col gap-2 h-[20rem] overflow-y-scroll pr-2">
          <Chat_List />
          <Chat_List />
          <Chat_List />
          <Chat_List />
          <Chat_List />
          <Chat_List />
          <Chat_List />
          <Chat_List />
          <Chat_List />
          <Chat_List />
        </section>
      </Card>
    </section>
  );
}
