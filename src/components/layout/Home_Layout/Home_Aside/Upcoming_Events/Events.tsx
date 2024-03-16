/** @format */

import { ArrowD } from "@/assets/svg/HeaderSVG";
type ViewType = {
  onView: () => void,
  view: boolean,
}

export default function Events({onView, view}: ViewType) {
  const event_title = "How to make your first million";

  return (
    <main className="mt-2">
      <section className="flex justify-between items-center text-xs w-full font-medium">
        <h2>{event_title}</h2>
        <button type='button' onClick={onView} className="flex gap-1 items-center">
          <p>view more</p>
          <div>
            <ArrowD onRotate={view} />
          </div>
        </button>
      </section>

      <section className="mt-2 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-normal">
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 text-layout-bg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
              />
            </svg>
          </span>
          <span>
            <p>Wed, Apr. 15 2020</p>
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-normal">
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 text-layout-bg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </span>
          <span>10:00pm-3:00pm</span>
        </div>
      </section>
    </main>
  );
}
