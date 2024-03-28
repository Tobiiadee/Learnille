/** @format */

export default function Experience_Item() {
  return (
    <section className='flex gap-2 items-center justify-between border-b pb-2'>
      <main className="flex gap-2 items-center">
        <div className='w-10 h-10 rounded shadow'>
          <img src='' alt='' />
        </div>
        <div className='flex flex-col gap-1 text-xs'>
          <h2 className='font-semibold capitalize text-black'>
            Junior Product designer
          </h2>
          <p className='text-text '>Matrix Energy</p>
        </div>
      </main>
      <div className='text-xs text-text flex flex-col gap-1'>
        <h2>
          June 2012 <span>- Till Date</span>
        </h2>
        <h2 className='font-semibold text-black self-end'>Nigeria</h2>
      </div>
    </section>
  );
}
