/** @format */

export default function Header() {
  return (
    <main className='flex flex-col gap-2'>
      <section>
        <p className='text-xs text-black'>
          Market Place / Consultation / Consultant Profile /{" "}
          <span className='text-layout-bg underline'>Overview</span>
        </p>
      </section>

      <header className='flex flex-col gap-4 tab:gap-0 tab:flex-row tab:justify-between tab:items-center bg-white p-4 rounded-md'>
        <section className='flex gap-4 items-center'>
          <div className='w-12 h-12 shadow rounded-full'>
            <img src='' alt='' />
          </div>

          <div>
            <h2 className='text-sm text-black font-semibold'>
              Catherine Blessing
            </h2>
            <p className='text-xs'>
              Head of marketing and research at{" "}
              <span className='uppercase font-semibold text-layout-bg'>
                Pencille
              </span>
            </p>
          </div>
        </section>

        <section className='flex gap-2 self-end'>
          <button type='button' className='bg-white shadow rounded p-2'>
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
                d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
              />
            </svg>
          </button>
          <button type='button' className='bg-white shadow rounded p-2'>
            {""}
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
                d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
              />
            </svg>
          </button>
          <button type='button' className='bg-white shadow rounded p-2'>
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
                d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
              />
            </svg>
          </button>
        </section>
      </header>
    </main>
  );
}
