/** @format */

import { SearchV } from "@/assets/svg/HeaderSVG";

export default function Chat_Search() {
  return (
    <div className='flex items-center gap-2 border tab:w-72 py-2 px-3 rounded-md overflow-hidden'>
      <div className='w-full'>
        <input
          type='text'
          className='border-none w-full outline-none text-sm placeholder:text-sm'
          placeholder='Search...'
        />
      </div>
      <div>
        <SearchV />
      </div>
    </div>
  );
}
