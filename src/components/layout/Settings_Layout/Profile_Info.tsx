/** @format */

import Button_ from "@/components/ui/Button_/Button_";

export default function Profile_Info() {
  return (
    <header className='flex flex-col gap-4 tab:gap-0 tab:flex-row tab:justify-between tab:items-center bg-white p-4 rounded-md'>
      <section className='flex gap-4 items-center'>
        <div className='w-12 h-12 shadow rounded-full'>
          <img src='' alt='' />
        </div>

        <div>
          <h2 className='text-sm text-black font-semibold'>
            Catherine Blessing
          </h2>
          <p className='text-xs'>
            Head of marketing and research at{" "}
            <span className='uppercase font-semibold text-layout-bg'>
              Pencille
            </span>
          </p>
        </div>
      </section>

      <section className='flex gap-2 self-end'>
        <Button_ text="Become an instructor"/>
      </section>
    </header>
  );
}
