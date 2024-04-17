
export default function First_Section() {
  return (
    <section className='bg-white w-full px-4 py-2 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h2 className='flex items-center gap-1 text-sm'>
            <span className='font-bold text-black'>$14.00</span>
            <span className='font-semibold text-text text-xs'>$26.00</span>
          </h2>

          <span className='bg-[#AED6F1] rounded-sm px-2 py-1 text-xs text-layout-bg font-semibold uppercase'>
            56% off
          </span>
        </div>

        <div className='flex gap-2 items-center'>
          <svg
            width='18px'
            height='18px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M18.9997 20.5815L16.4179 18.0113M4.9997 20.5815L7.58154 18.0113M11.9997 9.58148V12.5815L13.4416 13.9998M6.74234 3.99735C6.36727 3.62228 5.85856 3.41156 5.32812 3.41156C4.79769 3.41156 4.28898 3.62228 3.91391 3.99735C3.53884 4.37242 3.32813 4.88113 3.32812 5.41156C3.32812 5.942 3.53884 6.4507 3.91391 6.82578M20.0858 6.82413C20.4609 6.44905 20.6716 5.94035 20.6716 5.40991C20.6716 4.87948 20.4609 4.37077 20.0858 3.9957C19.7107 3.62063 19.202 3.40991 18.6716 3.40991C18.1411 3.40991 17.6324 3.62063 17.2574 3.9957M18.9997 12.5815C18.9997 16.4475 15.8657 19.5815 11.9997 19.5815C8.1337 19.5815 4.9997 16.4475 4.9997 12.5815C4.9997 8.71549 8.1337 5.58149 11.9997 5.58149C15.8657 5.58149 18.9997 8.71549 18.9997 12.5815Z'
              stroke='#e74c3c'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <h2 className='text-xs font-semibold text-red-600'>
            <span>2</span> days left for this price!
          </h2>
        </div>
      </section>
  )
}
