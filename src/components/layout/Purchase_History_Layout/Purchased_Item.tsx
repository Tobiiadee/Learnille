/** @format */

export default function Purchased_Item() {
  return (
    <section className='flex gap-4'>
      <div className='hidden tab:block w-28 h-28 shadow rounded-md'>
        <img src='' alt='' />
      </div>

      <div className="flex flex-col mt-2 gap-2">
        <h2 className='capitalize text-sm font-semibold w-64 nb:w-56'>
          The ultimate graphics course for beginner to advanced
        </h2>
        <p className='text-xs flex items-center gap-1'>
          <span className='text-text'>Created By: </span>
          <span className='font-semibold'>Larry King</span>
          <span>
            <svg
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              fill='#8c8c8c'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='12' cy='12' r='2' fill='#000000' />
            </svg>
          </span>
          <span className='font-semibold'>Jonh Doe</span>
        </p>

        <div className='flex items-center gap-1 text-xs'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#4364f7'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#4364f7'
              className='w-5 h-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
              />
            </svg>
          </span>
          <h2 className='font-semibold'>4.6</h2>
          <h2 className='text-text'>(451 Review)</h2>
        </div>
      </div>

      <div className='text-sm flex gap-1 items-center'>
        <h2 className='font-semibold text-layout-bg'>$37.00</h2>
        <h2 className='text-xs text-text'>$49.00</h2>
      </div>
    </section>
  );
}
