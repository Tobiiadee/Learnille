/** @format */

import { useState } from "react";
import { ArrowD } from "@/assets/svg/HeaderSVG";

import Course_Section_Content from "./Course_Section_Content";

export default function Course_Section_Item() {
  const [openContent, setOpenContent] = useState(false);
  const openContentHandler = () => setOpenContent((prev) => !prev);

  return (
    <>
      <div className={``}>
        <section
          onClick={openContentHandler}
          className={`text-xs flex items-center justify-between p-1 ${openContent ? "border-[0.5px] border-layout-bg" : "border-b"}   cursor-pointer`}>
          <div className='flex items-center gap-[0.2rem]'>
            <ArrowD className='text-layout-bg' onRotate={openContent} />
            <h2 className='font-semibold mb-1 text-layout-bg'>
              {"Course Development"}
            </h2>
          </div>

          <div className='flex gap-1 text-text text-[10px]'>
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
          </div>
        </section>

        {openContent && (
          <section className='mt-1 flex flex-col'>
            <Course_Section_Content />
            <Course_Section_Content />
            <Course_Section_Content />
          </section>
        )}
      </div>
    </>
  );
}
