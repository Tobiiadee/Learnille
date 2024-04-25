/** @format */

import TagOne from "@/components/layout/Overview_layout/TagsOne";
import HoursSpent from "../../components/layout/Overview_layout/z_animation/Hours_Spent/Hours_Spent";
import Performance from "../../components/layout/Overview_layout/z_animation/Performance/Performance";
import ResumeVidoes from "@/components/layout/Overview_layout/Resume_Vidoes";
import HomeAside from "@/components/layout/Home_Layout/Home_Aside/Home_Aside";

export default function Overview() {
  return (
    <div className='pb-10 tab:grid tab:grid-cols-2 nb:grid-cols-3 nb:gap-4 overflow-hidden tab:pr-4'>
      <section className='col-span-2'>
        <main className='mt-2 tab:mt-0 px-1 tab:px-0 items-center tab:grid tab:grid-cols-[30%_30%_35%] nb:grid-cols-[30%_30%_35%] gap-4'>
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

        <section className='flex flex-col px-1 tab:px-0 mt-10 tab:mt-4'>
          <h2 className='text-sm mx-auto tab:mx-0 font-semibold mb-2'>
            Continue from where you stopped!
          </h2>
          <main className='flex w-full tab:w-full tab:flex-row gap-2 rounded-md overflow-y-scroll pb-2 tab:overflow-x-scroll tab:overflow-y-hidden'>
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
