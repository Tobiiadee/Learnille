/** @format */

import { ArrowD } from "@/assets/svg/HeaderSVG";
import Time_Date from "@/components/ui/Time&Date/Time_Date";
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

      <Time_Date display="flex-col"/>
    </main>
  );
}
