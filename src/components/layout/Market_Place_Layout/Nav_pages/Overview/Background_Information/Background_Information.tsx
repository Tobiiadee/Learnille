/** @format */

import Discipline from "./Discipline";
import Expertise from "./Expertise";
import Language from "./Language";

export default function Background_Information() {
  return (
    <section className='flex flex-col gap-4 p-4 bg-white rounded-md'>
      <h2 className='text-sm text-black font-semibold'>
        Instructors Background Information
      </h2>

      <div className='flex gap-2 items-center text-xs border-b pb-4'>
        <h2 className='text-text font-normal'>Expertise:</h2>
        <div className='flex gap-2 flex-wrap'>
          <Expertise />
          <Expertise />
          <Expertise />
        </div>
      </div>

      <div className='flex gap-2 items-center text-xs border-b pb-4'>
        <h2 className='text-text font-normal'>Language:</h2>
        <div className='flex gap-2 flex-wrap'>
          <Language />
          <Language />
          <Language />
        </div>
      </div>

      <div className='flex gap-2 items-center text-xs'>
        <h2 className='text-text font-normal'>Discipline:</h2>
        <div className='flex gap-2 flex-wrap'>
          <Discipline />
          <Discipline />
        </div>
      </div>
    </section>
  );
}
