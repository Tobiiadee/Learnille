/** @format */

import Card from "@/components/ui/Card/Card";
import { Calendar } from "@/components/ui/calendar";
import UpcomingEvents from "./Upcoming_Events/Upcoming_Events";

export default function HomeAside() {
  return (
    <section className='text-sm font-semibold hidden tab:w-80 nb:flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>Calendar</h2>
        <Card classNames='flex flex-col gap-2'>
          <Calendar />

          <section className='border-t pt-3 flex justify-center'>
            <h2 className='text-sm font-semibold text-layout-bg flex gap-[2px]'>
              <span>3</span>
              <span>Events</span>
            </h2>
          </section>
        </Card>
      </div>

      <Card classNames=''>
        <div className='border-b border-dotted pb-2'>
          <h2 className='font-semibold'>Upcoming Events</h2>
        </div>
        <UpcomingEvents />
        <UpcomingEvents />
        <UpcomingEvents />
      </Card>
    </section>
  );
}
