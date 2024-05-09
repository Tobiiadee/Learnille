/** @format */

export default function Buttons() {
  return (
    <section className='flex gap-2 items-center mt-4 ml-1'>
      <button
        type='button'
        className='text-xs px-4 py-1 border border-layout-bg rounded-md text-layout-bg bg-[#AED6F1]/30 active:bg-[#AED6F1] transition duration-300'>
        Reschedule
      </button>
      <button
        type='button'
        className='text-xs px-4 py-1 border border-[#CD6155] rounded-md text-[#CD6155] bg-text-layout-bg bg-[#F5B7B1]/30 a active:bg-[#CD6155]/30 transition duration-300'>
        Cancel
      </button>
    </section>
  );
}
