/** @format */

import Card from "../../ui/Card/Card";

export default function HoursSpent() {
  return (
    <Card >
      <section className='text-xs flex gap-8 font-normal w-72 tab:w-full h-52'>
        <div className='flex gap-2'>
          <span className='w-4 h-4 rounded bg-layout-bg'></span>
          <h2>Study</h2>
        </div>
        <div className='flex gap-2'>
          <span className='w-4 h-4 rounded bg-background'></span>
          <h2>Quiz</h2>
        </div>
      </section>
    </Card>
  );
}
