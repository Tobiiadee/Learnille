/** @format */

import TagOne from "@/components/layout/Overview_layout/TagsOne";
import HoursSpent from "../../components/layout/Overview_layout/Hours_Spent";
import Performance from "../../components/layout/Overview_layout/Performance";
import TagTwo from "@/components/layout/Overview_layout/TagsTwo";
import ResumeVidoes from "@/components/layout/Overview_layout/Resume_Vidoes";
// import { Calendar } from "@/components/layout/Overview_layout/Calendar";

export default function Overview() {
  return (
    <section className='pb-10'>
      <main className='mt-14 tab:mt-0 flex flex-col items-center tab:grid tab:grid-cols-2 gap-4'>
        <section className='text-sm font-semibold flex flex-col gap-2'>
          <h2>Hours Spent</h2>
          <HoursSpent />
        </section>
        <section className='text-sm font-semibold flex flex-col gap-2'>
          <h2>Performance</h2>
          <Performance />
        </section>
      </main>

      <section className='w-full border flex gap-2 tab:gap-0 tab:flex-col'>
        <TagOne />
        <TagTwo />
      </section>

      <section className='flex tab:w-full w-80 tab:flex-row gap-2 mt-4 overflow-y-scroll tab:overflow-x-scroll tab:overflow-y-hidden'>
        <ResumeVidoes />
        <ResumeVidoes />
        <ResumeVidoes />
      </section>
    </section>
  );
}
