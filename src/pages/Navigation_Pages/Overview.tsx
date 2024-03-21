/** @format */

import TagOne from "@/components/layout/Overview_layout/TagsOne";
import HoursSpent from "../../components/layout/Overview_layout/Hours_Spent";
import Performance from "../../components/layout/Overview_layout/Performance";
import ResumeVidoes from "@/components/layout/Overview_layout/Resume_Vidoes";
import HomeAside from "@/components/layout/Home_Layout/Home_Aside/Home_Aside";

export default function Overview() {
  return (
    <div className='pb-10 tab:grid tab:grid-cols-3 tab:gap-4 overflow-hidden'>
      <section className='col-span-2 '>
        <main className='mt-4 tab:mt-0 flex flex-col items-center tab:grid tab:grid-cols-2 gap-4'>
          <section className='text-sm font-semibold flex flex-col gap-2'>
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

        <section className='flex flex-col mt-10 tab:mt-4'>
          <h2 className='text-sm mx-auto tab:mx-0 font-semibold mb-2'>
            Continue from where you stopped!
          </h2>
          <main className='flex mx-auto tab:w-full w-[21rem] tab:flex-row gap-2 rounded-md overflow-y-scroll pb-2 tab:overflow-x-scroll tab:overflow-y-hidden'>
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
