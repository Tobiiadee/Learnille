/** @format */

export default function My_Certificate() {
  return (
    <section className='flex flex-col tab:flex-row gap-4 justify-between tab:items-center pt-4'>
      <main className='flex flex-col gap-1 w-max'>
        <p className='self-center text-layout-bg text-xs font-semibold'>
          100% completed
        </p>
        <progress
          value={100}
          max={100}
          className='w-[300px] transition duration-300'></progress>
        <h2 className='text-sm font-semibold capitalize text-black text-center'>
          The complete web development bootcamp
        </h2>
      </main>

      <main className='text-xs flex gap-4'>
        <button
          type='button'
          className='px-4 py-2 rounded-sm bg-[#d4d4d4] active:bg-[#afaeae] text-black font-normal transition duration-300'>
          View Certificate
        </button>
        <button
          type='button'
          className='px-4 py-2 rounded-sm bg-layout-bg active:bg-[#2846cf]  font-normal text-white transition duration-300'>
          Download Certificate
        </button>
      </main>
    </section>
  );
}
