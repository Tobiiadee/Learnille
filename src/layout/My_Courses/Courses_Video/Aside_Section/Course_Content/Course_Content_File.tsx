/** @format */

export default function Course_Content_File() {
  return (
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
  );
}
