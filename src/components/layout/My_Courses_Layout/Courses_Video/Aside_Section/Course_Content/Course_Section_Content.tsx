/** @format */

export default function Course_Section_Content() {
  return (
    <section className='flex justify-between text-xs font-normal text-text px-3 py-2 hover:text-black hover:bg-[#AED6F1]'>
      <div className='flex gap-4 items-center '>
        <input
          type='checkbox'
          id=''
          title='title'
          className='relative peer appearance-none w-3 h-3 border-[0.5px] checked:bg-layout-bg  border-layout-bg accent-layout-bg '
        />
        <label htmlFor='course section'>What is webflow?</label>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={3}
          stroke='#fff'
          className='w-3 h-3 hidden peer-checked:block absolute'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 12.75 6 6 9-13.5'
          />
        </svg>
      </div>

      <div className='flex items-center gap-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#8c8c8c'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-3 h-3'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
          />
        </svg>

        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='#8c8c8c'
          className='w-3 h-3'>
          <path d='M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1ZM10.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1Z' />
        </svg> */}

        <span>07:31</span>
      </div>
    </section>
  );
}
