/** @format */

import { useState } from "react";
import { ArrowD } from "../../../../assets/svg/HeaderSVG";
import Card from "../../../../components/ui/Card/Card";
// import Performance_Ani from "./Progress/Performance_Ani";
import Month from "./Months/Month";
import SemiCircle_Progress from "@/components/ui/Progress/Semi-Circle_Progress/Semi-Circle_Progress";

export default function Performance() {
  const [viewMonths, setViewMonths] = useState(false);

  return (
    <Card>
      <section className='w-full flex flex-col gap-[2.87rem] items-center text-xs font-normal h-full'>
        <div className='flex justify-between w-full'>
          <span className='flex gap-2 items-center'>
            <div className='w-4 h-4 rounded bg-[#27ae60]'></div>
            <h2 className='font-normal'>Point Progress</h2>
          </span>
          <div className='relative'>
            <button
              type='button'
              onClick={() => setViewMonths((prev) => !prev)}
              className={`flex items-center gap-2`}>
              <h2>Monthly</h2>
              <ArrowD onRotate={viewMonths} />
            </button>

            {viewMonths && (
              <Month
                show={setViewMonths}
                className='absolute -bottom-[8rem] tab:-bottom-[6rem] right-[1px] z-40'
              />
            )}
          </div>
        </div>

        <div>
          <SemiCircle_Progress />
        </div>

        <h2 className='flex gap-[4px] items-center text-[1rem]'>
          <span className='text-text'>Your Point:</span>
          <span className='text-black font-semibold'>Average</span>
        </h2>
      </section>
    </Card>
  );
}
