/** @format */

import { useParams } from "react-router-dom";
import Courses from "../Navigation_Pages/Courses/Courses";
import Consultations from "../Navigation_Pages/Consultations/Consultations";

import { SearchV } from "@/assets/svg/HeaderSVG";
import Alt_Navigation from "../Navigation/Alt_Navigation";

export default function Home() {
  const { market_id } = useParams();

  let page;

  switch (market_id) {
    case "courses":
      page = <Courses />;
      break;
    case "consultations":
      page = <Consultations />;
      break;

    default:
      page = <Courses />;
  }
  return (
    <main className='nb:pr-72 flex flex-col gap-6'>
      <section className="flex flex-col justify-center">
        <main className='flex flex-col gap-4 w-full'>
          <Alt_Navigation />
          <section className='flex gap-4 px-4 tab:px-0'>
            <div className='rounded-md w-[82%] h-9 flex gap-2 items-center px-4 bg-white shadow text-sm'>
              <SearchV />
              <input
                type='text'
                placeholder='Search for answers'
                className='appearance-none outline-none border-none w-full'
              />
              <button type='button'>
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
                    d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
                  />
                </svg>
              </button>
            </div>

            <button
              type='button'
              className='text-[8px] tab:text-sm text-white font-semibold px-1 tab:px-2 active:bg-[#2340c1] bg-layout-bg rounded transition duration-300'>
              Search Course
            </button>
          </section>
        </main>
      </section>

      <section className='pb-8'>{page}</section>
    </main>
  );
}
