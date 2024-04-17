/** @format */

export type CourseSectionType = {
  curriculum?: boolean;
};

export default function Course_Section_Content({
  curriculum,
}: CourseSectionType) {
  return (
    <>
      {curriculum && (
        <section className='flex justify-between text-xs font-normal text-text px-3 py-2 hover:text-black hover:bg-[#AED6F1]'>
          <div className='flex gap-4 items-center '>
            <div>
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
            </div>
            <div>What is webflow?</div>
          </div>

          <div className='flex items-center gap-1'>
            <span>07:31</span>
          </div>
        </section>
      )}

      {!curriculum && (
        <section className='flex justify-between text-xs font-normal text-text px-3 py-2 hover:text-black hover:bg-[#AED6F1]'>
          <div className='flex gap-4 items-center cursor-pointer'>
            <input
              type='checkbox'
              id='course section'
              title='title'
              className='relative peer appearance-none w-3 h-3 border-[0.5px] checked:bg-layout-bg  border-layout-bg accent-layout-bg '
            />
            <label htmlFor='course section' className="cursor-pointer">What is webflow?</label>
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
      )}
    </>
  );
}
