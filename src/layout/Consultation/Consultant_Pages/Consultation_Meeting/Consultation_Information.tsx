/** @format */

import Card from "@/components/ui/Card/Card";
import UpcomingEvents from "@/layout/Home/Home_Aside/Upcoming_Events/Upcoming_Events";
import Progress from "@/components/ui/Cosultation_Progress/Progress";

import Session_Progress from "./components/Session_Progress/Session_Progress";
import Session_Conversation from "./components/Conversation/Session_Conversation";

export default function Consultation_Information() {
  return (
    <section className='flex flex-col col-span-3 tab:col-span-1 gap-4'>
      <Card>
        <h2 className='text-sm font-semibold'>Consultation Details</h2>
        <div className='flex justify-between items-center text-xs text-layout-bg font-bold mt-2'>
          <span className='flex gap-1'>
            <h2>2/5</h2>
            <h2>Session Completed</h2>
          </span>

          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2.5}
              stroke='currentColor'
              className='w-4 h-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
              />
            </svg>
          </span>
        </div>

        <Session_Progress />
      </Card>

      <main className='flex justify-between items-center px-4'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-xs text-black font-bold'>Ongoing</h2>
          <span className='flex gap-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 text-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>

            <h2 className='text-text text-xs'>2 hours</h2>
          </span>
        </div>

        <div>
          <Progress />
        </div>
      </main>

      <Card>
        <UpcomingEvents />
        <UpcomingEvents />
        <UpcomingEvents />
      </Card>

      <Session_Conversation />
    </section>
  );
}
