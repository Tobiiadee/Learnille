/** @format */
import Course_Video_Section from "./Aside_Section/Course_Video_Section";
import Course_Video_Header from "./Header/Course_Video_Header";
import Course_Video_Home from "./Home/Course_Video_Home";
import img from "../../../../assets/mk-s-Mm5AlahnRcE-unsplash.jpg";
import { useState } from "react";

export default function Courses_Video() {
  const [playVideo, setPlayVideo] = useState(false);
  const [fullscreen, setfullscreen] = useState(false);

  const playVideohandler = () => setPlayVideo((prev) => !prev);
  const fullscreenhandler = () => setfullscreen((prev) => !prev);

  return (
    <main className='grid nb:grid-cols-[280px_280px_420px] gap-4'>
      <section className='col-span-2 px-2 nb:px-0 nb:col-span-2 flex flex-col gap-2'>
        <div className='text-xs text-text'>
          <h2>
            My Courses / <span>How To Make Your First Million /</span> Play
            Course /{" "}
            <span className='text-layout-bg underline'>Course Description</span>
          </h2>
        </div>

        <main className='relative w-full border h-max tab:h-[20rem] nb:h-[26rem] shadow rounded-xl overflow-hidden z-0'>
          <div>
            <img src={img} alt='test img' />
          </div>
          <section className='absolute top-0 left-0 w-full h-full  backdrop'>
            <div className='absolute top-[45%] w-full flex justify-center'>
              <button
                type='button'
                onClick={playVideohandler}
                className='flex items-center justify-center w-11 h-11 rounded-full bg-layout-bg cursor-pointer'>
                {""}
                {playVideo ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#fff'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='#fff'
                    className='w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 5.25v13.5m-7.5-13.5v13.5'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#fff'
                    className='w-6 h-6'>
                    <path
                      fillRule='evenodd'
                      d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className='absolute left-0 bottom-4 flex justify-between px-6 w-full text-white'>
              <button
                type='button'
                onClick={playVideohandler}
                className='cursor-pointer'>
                {""}
                {playVideo ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='#fff'
                    className='w-4 h-4'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 5.25v13.5m-7.5-13.5v13.5'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-4 h-4'>
                    <path d='M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z' />
                  </svg>
                )}
              </button>

              <section className='flex gap-4'>
                <button type='button' className='cursor-pointer'>
                  {""}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-4 h-4'>
                    <path d='M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z' />
                    <path d='M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z' />
                  </svg>
                </button>

                <button type='button' className='cursor-pointer'>
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
                      d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                  </svg>
                </button>
                <button
                  type='button'
                  onClick={fullscreenhandler}
                  className='cursor-pointer'>
                  {""}
                  {fullscreen ? (
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
                        d='M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25'
                      />
                    </svg>
                  ) : (
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
                        d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
                      />
                    </svg>
                  )}
                </button>
              </section>
            </div>
          </section>
        </main>

        <main className='flex justify-between mt-4'>
          <section className='flex gap-1 text-sm font-semibold'>
            <span>2.</span>
            <h2>What is webflow?</h2>
          </section>

          <section className='flex gap-1 text-xs'>
            <h2 className='text-text font-normal'>Last updated:</h2>
            <span className='font-semibold'>Oct 29, 2021</span>
          </section>
        </main>

        <main>
          <Course_Video_Header />
        </main>

        <main>
          <Course_Video_Home />
        </main>
      </section>

      <aside className='hidden nb:block'>
        <Course_Video_Section />
      </aside>
    </main>
  );
}
