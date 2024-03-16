/** @format */

import Card from "@/components/ui/Card/Card";
// import { Calendar } from "./Calendar/Calendar";
import UpcomingEvents from "./Upcoming_Events/Upcoming_Events";

export default function HomeAside() {
  return (
    <section className='text-sm font-semibold hidden tab:flex flex-col gap-2 mt-20'>
      <h2>Calendar</h2>
      <div>
        <Card classNames='mt-4'>
          <div className='border-b border-dotted pb-2'>
            <h2 className='font-semibold'>Upcoming Events</h2>
          </div>
          <UpcomingEvents />
          <UpcomingEvents />
          <UpcomingEvents />
        </Card>
      </div>
    </section>
  );
}
