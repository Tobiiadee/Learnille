/** @format */

export type CourseSectionType = {
  isCurriculum?: boolean;
  title?: string;
};

export default function MyCourse_SectionContent() {
  return (
    <>
      (
      <section className='flex justify-between text-xs font-normal text-text px-3 py-2 hover:text-black hover:bg-[#AED6F1]'>
        <div className='flex gap-4 items-center cursor-pointer'>
          <input
            type='checkbox'
            id='course section'
            title='title'
            className='relative peer appearance-none w-3 h-3 border-[0.5px] checked:bg-layout-bg  border-layout-bg accent-layout-bg '
          />
          <label htmlFor='course section' className='cursor-pointer'>
            What is webflow?
          </label>
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
          <span>07:31</span>
        </div>
      </section>
      <section className='flex justify-between text-xs font-normal text-text px-2 py-2 hover:text-black hover:bg-[#AED6F1] cursor-pointer'>
        <div className='flex items-center gap-4'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#000'
              className='w-4 h-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
              />
            </svg>
          </span>
          <span>Webflow terms and conditions</span>
        </div>

        <div className='flex items-center gap-[1px]'>
          <span>5.3</span>
          <span>MB</span>
        </div>
      </section>
      )
    </>
  );
}
