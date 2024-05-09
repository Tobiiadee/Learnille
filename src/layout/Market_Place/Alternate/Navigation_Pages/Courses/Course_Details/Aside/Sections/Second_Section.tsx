/** @format */

export type SectionType = {
  consultation?: boolean;
};

export default function Second_Section({ consultation }: SectionType) {
  return (
    <section className='bg-white w-full px-4 py-2 flex flex-col gap-4'>
      <main className='flex justify-between items-center'>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke=' #566573 '
            className='w-4 h-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
          <h2>{consultation ? "Consultation Duration" : "Course Duration"}</h2>
        </div>

        <div className='font-normal text-xs text-text capitalize'>
          <p>6 months</p>
        </div>
      </main>

      <main className='flex justify-between items-center'>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <svg
            fill='#566573'
            width='18px'
            height='18px'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M7,13v6a1,1,0,0,1-2,0V13a1,1,0,0,1,2,0Zm11,7a1,1,0,0,0,1-1V5a1,1,0,0,0-2,0V19A1,1,0,0,0,18,20Zm-6,0a1,1,0,0,0,1-1V9a1,1,0,0,0-2,0V19A1,1,0,0,0,12,20Z' />
          </svg>
          <h2>{consultation ? "Consultation Level" : "Course Level"}</h2>
        </div>

        <div className='font-normal text-xs text-text capitalize'>
          <p>Beginner and Intermidate</p>
        </div>
      </main>

      <main className='flex justify-between items-center'>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke=' #566573 '
            className='w-4 h-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
            />
          </svg>

          <h2>{consultation ? "Total Purchased" : "Students Enrolled"}</h2>
        </div>

        <div className='font-normal text-xs text-text capitalize'>
          <p>600,788</p>
        </div>
      </main>
      <main className='flex justify-between items-center'>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <svg
            width='18px'
            height='18px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M4 8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8Z'
              stroke=' #566573 '
              strokeWidth='1.5'
            />
            <path
              d='M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235'
              stroke=' #566573 '
              strokeWidth='1.5'
            />
            <path
              d='M8 7H16'
              stroke=' #566573 '
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M8 10.5H13'
              stroke=' #566573 '
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <path
              d='M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45'
              stroke=' #566573 '
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
          <h2>Language</h2>
        </div>

        <div className='font-normal text-xs text-text capitalize'>
          <p>Mandarin</p>
        </div>
      </main>
      <main className='flex justify-between items-center'>
        <div className='flex items-center gap-2 text-xs font-semibold'>
          <svg
            width='18px'
            height='18px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M10 6V10M14 10V14M8 8H12M12 12H16'
              stroke=' #566573 '
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <h2>Subtitle Language</h2>
        </div>

        <div className='font-normal text-xs text-text capitalize'>
          <p>English</p>
        </div>
      </main>
    </section>
  );
}
