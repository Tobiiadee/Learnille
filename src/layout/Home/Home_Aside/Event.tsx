/** @format */

import Card from "@/components/ui/Card/Card";
// import { Calendar } from "@/components/ui/calendar";
import UpcomingEvents from "./Upcoming_Events/Upcoming_Events";
import NewCalendar from "@/components/ui/NewCalendar/NewCalendar";
// import { addDays, subDays } from "date-fns";

export default function Event() {
  return (
    <section className='text-sm font-semibold hidden tab:w-80 nb:flex flex-col gap-2'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-sm'>Calendar</h2>
        <Card classNames='flex flex-col gap-2'>
          <NewCalendar events={[
          { date: new Date("2024-04-24"), title: "Post video" },
          { date: new Date("2024-04-05"), title: "Edit video" },
          { date: new Date("2024-04-12"), title: "Code" },
        ]}/>

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
