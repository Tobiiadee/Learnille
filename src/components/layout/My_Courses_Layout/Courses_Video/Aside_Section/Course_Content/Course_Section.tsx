/** @format */

import { useState } from "react";
import Course_Section_Content from "./Course_Section_Content";

import { ArrowD } from "@/assets/svg/HeaderSVG";

export default function Course_Section() {
  const [openContent, setOpenContent] = useState(false);

  const openContentHandler = () => setOpenContent((prev) => !prev);

  return (
    <>
      <div className='-mt-4'>
        <section
          onClick={openContentHandler}
          className={`text-[7px] flex items-center justify-between p-1 ${openContent ? "border-[0.5px] border-layout-bg" : "border-b"}   cursor-pointer`}>
          <div className='flex items-center gap-[0.2rem]'>
            <ArrowD className='text-layout-bg' onRotate={openContent}/>
            <h2 className='font-semibold mb-1 text-layout-bg'>
              Getting started with graphic design
            </h2>
          </div>

          <div className='flex gap-1 text-text'>
            <span className='flex items-center gap-1'>
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
              <h2>4 Lectures</h2>
            </span>

            <span className='flex items-center gap-1'>
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
                  d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
              <h2>4hr 50m</h2>
            </span>

            <span className='flex items-center gap-1'>
              <svg
                width='18px'
                height='18px'
                viewBox='0 -0.5 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M5.03033 11.4697C4.73744 11.1768 4.26256 11.1768 3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L5.03033 11.4697ZM8.5 16L7.96967 16.5303C8.26256 16.8232 8.73744 16.8232 9.03033 16.5303L8.5 16ZM17.0303 8.53033C17.3232 8.23744 17.3232 7.76256 17.0303 7.46967C16.7374 7.17678 16.2626 7.17678 15.9697 7.46967L17.0303 8.53033ZM9.03033 11.4697C8.73744 11.1768 8.26256 11.1768 7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L9.03033 11.4697ZM12.5 16L11.9697 16.5303C12.2626 16.8232 12.7374 16.8232 13.0303 16.5303L12.5 16ZM21.0303 8.53033C21.3232 8.23744 21.3232 7.76256 21.0303 7.46967C20.7374 7.17678 20.2626 7.17678 19.9697 7.46967L21.0303 8.53033ZM3.96967 12.5303L7.96967 16.5303L9.03033 15.4697L5.03033 11.4697L3.96967 12.5303ZM9.03033 16.5303L17.0303 8.53033L15.9697 7.46967L7.96967 15.4697L9.03033 16.5303ZM7.96967 12.5303L11.9697 16.5303L13.0303 15.4697L9.03033 11.4697L7.96967 12.5303ZM13.0303 16.5303L21.0303 8.53033L19.9697 7.46967L11.9697 15.4697L13.0303 16.5303Z'
                  fill='#2f53f5'
                />
              </svg>
              <h2>
                (<span>1/4</span>)
              </h2>
            </span>
          </div>
        </section>

        {openContent && (
          <section className='mt-1 flex flex-col'>
            <Course_Section_Content />
            <Course_Section_Content />
            <Course_Section_Content />
            <Course_Section_Content />
          </section>
        )}
      </div>
    </>
  );
}
