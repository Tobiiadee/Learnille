/** @format */

import Events from "./Events";
import Buttons from "./Buttons";
import { useState } from "react";

export default function UpcomingEvents() {
  const [viewLess, setViewLess] = useState(false)

  const onVeiwLess = () => {
    setViewLess(prev => !prev);
  };

  return (
    <section className='text-sm flex flex-col overflow-hidden border-b border-dotted pb-4'>
      <div>
        <Events view={viewLess} onView={onVeiwLess}/>
      </div>
      {viewLess && <div className="transition-all duration-500">
        <Buttons />
      </div>}
    </section>
  );
}
