/** @format */

import { useState } from "react";
import { ArrowD } from "../../../../../assets/svg/HeaderSVG";
import Card from "../../../../ui/Card/Card";
import Performance_Ani from "./Progress/Performance_Ani";
import Month from "./Months/Month";

export default function Performance() {
  const [viewMonths, setViewMonths] = useState(false);

  return (
    <Card>
      <section className='w-full text-xs font-normal h-52'>
        <div className='flex justify-between'>
          <span className='flex gap-2 items-center'>
            <div className='w-4 h-4 rounded bg-[#2ECC71]'></div>
            <h2 className='font-normal'>Point Progress</h2>
          </span>
          <div className='relative'>
            <button
              type='button'
              onClick={() => setViewMonths((prev) => !prev)}
              className={`flex items-center gap-2`}>
              <h2>Monthly</h2>
              <ArrowD onRotate={viewMonths}/>
            </button>

            {viewMonths && <Month show={setViewMonths} className="absolute -bottom-[6.5rem] right-[1px]"/>}
          </div>
        </div>

        <Performance_Ani />
      </section>
    </Card>
  );
}
