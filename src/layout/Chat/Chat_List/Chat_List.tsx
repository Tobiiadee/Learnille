/** @format */

export default function Chat_List() {
  return (
    <section className='flex justify-between items-center py-2 hover:bg-layout-tip active:bg-[#AED6F1] cursor-pointer px-4 rounded transition duration-300'>
      <div className='flex items-center gap-4'>
        <div className='relative w-10 h-10 rounded-full shadow flex items-center justify-center'>
          <img src='' alt='' />
          <span className='absolute w-2 h-2 bottom-1 right-0 rounded-full bg-green-700'></span>
        </div>
        <span className='text-xs text-black font-semibold flex flex-col gap-1'>
          <h2 className='font-semibold'>John Doe</h2>
          <p className='font-normal -mt-1 text-text'>You're welcome</p>
        </span>
      </div>
      <div className='w-max h-max text-[10px] px-[0.2rem] py-[0.1rem] font-normal text-white bg-layout-bg rounded-full flex items-center'>
        200+
      </div>
    </section>
  );
}
