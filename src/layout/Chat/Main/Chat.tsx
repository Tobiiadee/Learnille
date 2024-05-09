/** @format */

import { SearchV } from "@/assets/svg/HeaderSVG";
import Chat_List from "../Chat_List/Chat_List";
import Chat_Search from "../Chat_Search/Chat_Search";
import Card from "@/components/ui/Card/Card";
import { useState } from "react";
import Conversation from "../Conversation/Conversation";

// type InputType = string | null;

export default function Chat() {
  const [viewSearch, setViewSearch] = useState(false);

  const onSendChat = () => {};

  return (
    <section className='fixed grid nb:grid-cols-3 gap-2 tab:pb-4 overflow-hidden'>
      <aside className=' col-span-2 flex flex-col h-screen tab:w-[92vw] w-screen nb:w-full nb:h-max'>
        <main className='bg-white px-4 py-2 rounded-t-md flex justify-between border-b'>
          <section className='flex gap-2'>
            <div className='w-8 h-8 rounded-full shadow flex justify-center items-center overflow-hidden'>
              <img src='' alt='' />
            </div>

            <span className='flex flex-col overflow-hidden'>
              <h2 className='text-sm font-semibold'>John Doe</h2>
              <p className='text-xs text-text -mt-1'>online</p>
            </span>
          </section>

          <section className='flex gap-2 tab:gap-4 items-center'>
            <div className='hidden nb:block'>
              <Chat_Search />
            </div>

            <div className='flex items-center nb:hidden'>
              <button
                type='button'
                className='active:bg-activeBtn p-2 rounded-full transition duration-300'
                onClick={() => setViewSearch((prev) => !prev)}>
                {""}
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
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </button>
            </div>

            <button
              type='button'
              className='active:bg-activeBtn p-2 rounded-full transition duration-300'>
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
        {viewSearch && (
          <Card classNames=' mb-2 w-full'>
            <Chat_Search />
          </Card>
        )}

        <main className='h-[71%] nb:h-[21rem] relative bg-white z-40'>
          <Conversation />
        </main>

        <main className='w-full flex items-center gap-2 py-4 px-4 rounded-b-md border-t bg-white'>
          <textarea
            placeholder='Type your message'
            className='w-11/12 h-8 max-h-max py-2 px-2 outline-none border-none text-xs rounded-sm bg-[#e4e4e4] placeholder:text-xs placeholder:font-normal placeholder:text-black'
          />

          <button
            type='button'
            onClick={onSendChat}
            className='py-2 px-3 bg-layout-bg active:bg-[#2a49d1] cursor-pointer rounded-sm shadow'>
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
      </aside>

      <main className='hidden nb:block col-span-1 py-4 px-6 bg-white rounded-md'>
        <section className='flex flex-col w-full gap-2'>
          <h2 className='text-sm font-bold'>Messages</h2>

          <div className='flex items-center self-center focus border w-72 py-1 px-3 rounded-md overflow-hidden'>
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

        <section className='mt-4 flex flex-col gap-2 h-[22rem] overflow-y-scroll pr-2'>
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
      </main>
    </section>
  );
}
