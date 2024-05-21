/** @format */

import TagOne from "../TagsOne";
import HoursSpent from "../z_animation/Hours_Spent/Hours_Spent";
import Performance from "../z_animation/Performance/Performance";
import ResumeVidoes from "../Resume_Vidoes";
import HomeAside from "@/layout/Home/Home_Aside/Event";

export default function Overview() {
  return (
    <div className='pb-10 tab:grid tab:grid-cols-2 nb:grid-cols-[28%_28%_30%] nb:gap-1 overflow-hidden tab:pr-4 nb:pr-14'>
      <section className='col-span-2 flex flex-col gap-2'>
        <main className='tab:mt-0 items-start tab:grid tab:grid-cols-[30%_30%_35%] nb:grid-cols-[31%_31%_35%] gap-2'>
          <section className='text-sm col-span-2 font-semibold flex flex-col gap-2'>
            <h2>Hours Spent</h2>
            <HoursSpent />
          </section>
          <section className='text-sm font-semibold flex flex-col gap-2'>
            <h2>Performance</h2>
            <Performance />
          </section>
        </main>

        <section className='w-full'>
          <TagOne />
        </section>

        <section className='flex flex-col px-1 tab:px-0 mt-10 tab:mt-0'>
          <h2 className='text-sm mx-auto tab:mx-0 font-semibold mb-2'>
            Continue from where you stopped!
          </h2>
          <main className='flex w-full tab:w-full tab:flex-row gap-2 rounded-md overflow-y-hidden overflow-x-scroll pb-2 tab:overflow-x-scroll tab:overflow-y-hidden'>
            <ResumeVidoes />
            <ResumeVidoes />
            <ResumeVidoes />
            <ResumeVidoes />
          </main>
        </section>
      </section>

      <section>
        <HomeAside />
      </section>
    </div>
  );
}
