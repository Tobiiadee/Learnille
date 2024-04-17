/** @format */

import Checkbox from "@/components/layout/Settings_Layout/Checkbox_Notification/Checkbox";
import Button_ from "@/components/ui/Button_/Button_";

export default function Second_Sect() {
  return (
    <form className='bg-white rounded-b'>
      <main className='flex flex-col p-6 gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='card_name' className='text-sm font-semibold'>
            Name
          </label>
          <input
            type='text'
            id='card_name'
            placeholder='Name on card'
            className='border rounded-md px-4 py-2 outline-none text-sm placeholder:text-xs min-h-9'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='card_number' className='text-sm font-semibold'>
            Card Number
          </label>

          <div className='flex items-center gap-4 border rounded-md px-4 py-2 min-h-9'>
            <span className='border-r pr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke=' #2e86c1 '
                className='w-5 h-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                />
              </svg>
            </span>
            <input
              type='text'
              id='card_number'
              placeholder='Label'
              className='placeholder:text-xs outline-none w-full text-sm'
            />
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='card_date' className='text-sm font-semibold'>
              MM/YY
            </label>
            <input
              type='date'
              id='card_date'
              placeholder='MM/YY'
              className='border rounded-md px-4 py-2 outline-none text-sm placeholder:text-xs min-h-9'
            />
          </div>

          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='card_cvc' className='text-sm font-semibold'>
              CVC
            </label>
            <input
              type='text'
              id='card_cvc'
              placeholder='Security code'
              className='border rounded-md px-4 py-2 outline-none text-sm placeholder:text-xs min-h-9'
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button
            type='button'
            className='bg-[#f4f6f6] active:bg-[#eaeded] text-sm text-black font-semibold px-4 py-2 rounded transition duration-300'>
            Cancel
          </button>

          <Button_ text='Save' />
        </div>

        <div>
            <Checkbox label="Remember this card, save it on my card list."/>
        </div>
      </main>
    </form>
  );
}
