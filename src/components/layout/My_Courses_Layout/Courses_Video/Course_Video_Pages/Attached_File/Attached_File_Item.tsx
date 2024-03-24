/** @format */

import Card from "@/components/ui/Card/Card";

export default function Attached_File_Item() {
  return (
    <main className="flex flex-col gap-1">
      <div className='text-xs text-black font-normal'>
        <h2>
          Attached File (<span>01</span>)
        </h2>
      </div>

      <Card classNames="flex gap-4">
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-10 h-10 text-layout-bg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
            />
          </svg>
        </div>

        <main className='flex justify-between w-full'>
          <div className='text-black flex flex-col'>
            <h2 className='font-semibold text-sm'>Donec id one.pdf</h2>
            <p className='text-xs text-text flex gap-1'>
              <span>12.5</span>
              <span>MB</span>
            </p>
          </div>

          <div>
            <button
              type='button'
              className='py-2 px-4 text-white bg-layout-bg rounded-md font-semibold text-sm active:bg-[#2b4bd9] transition duration-300'>
              Download File
            </button>
          </div>
        </main>
      </Card>
    </main>
  );
}
