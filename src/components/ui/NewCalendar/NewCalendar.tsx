import clsx from "clsx";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
  addMonths, // Import addMonths function from date-fns
  subMonths, // Import subMonths function from date-fns
} from "date-fns";
import { useMemo, useState } from "react"; // Import useState hook

const WEEKDAYS = ["Su", "M", "Tu", "W", "T", "F", "S"];

interface Event {
  date: Date;
  title: string;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Use state to manage current date

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  const eventsByDate = useMemo(() => {
    return events.reduce((acc: { [key: string]: Event[] }, event) => {
      const dateKey = format(event.date, "yyyy-MM-dd");
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {});
  }, [events]);

  const prevMonthHandler = () => {
    setCurrentDate(subMonths(currentDate, 1)); // Update current date to previous month
  };

  const nextMonthHandler = () => {
    setCurrentDate(addMonths(currentDate, 1)); // Update current date to next month
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-6'>
        <button
          onClick={prevMonthHandler}
          type='button'
          className='border active:bg-[#f2f4f4] rounded p-[2px] transition duration-300'>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <div className=''>
          <h2 className='text-center'>{format(currentDate, "MMMM yyyy")}</h2>
        </div>
        <button
          onClick={nextMonthHandler}
          type='button'
          className='border active:bg-[#f2f4f4] rounded p-[2px] transition duration-300'>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>

      <div className='grid grid-cols-7 gap-3'>
        {WEEKDAYS.map((day) => {
          return (
            <div key={day} className='font-semibold text-center'>
              {day}
            </div>
          );
        })}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return (
            <div
              key={`empty-${index}`}
              className=' rounded-md p-2 text-center'
            />
          );
        })}
        {daysInMonth.map((day, index) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const todaysEvents = eventsByDate[dateKey] || [];
          return (
            <button type="button"
              key={index}
              className={clsx(
                "rounded-full py-1 px-2 flex justify-center items-center text-layout-bg text-[11px] font-normal bg-[#EBF5FB] text-center",
                {
                  "bg-blue-500": isToday(day),
                  "text-white": isToday(day),
                }
              )}>
              {format(day, "d")}
              {todaysEvents.map((event) => {
                return (
                  <div
                    key={event.title}
                    className='bg-green-500 rounded-md text-gray-900'>
                    {event.title}
                  </div>
                );
              })}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
