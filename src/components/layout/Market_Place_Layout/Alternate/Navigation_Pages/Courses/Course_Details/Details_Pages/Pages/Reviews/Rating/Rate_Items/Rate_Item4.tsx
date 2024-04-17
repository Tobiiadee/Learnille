/** @format */

import { Star } from "@/assets/svg/HeaderSVG";
import { Rate_Percent_Type } from "./Rate_Item1";

export default function Rate_Item4({ Rate_Percent }: Rate_Percent_Type) {
  let ratePercent = `${Rate_Percent}%`;
  let ratePercentage = ratePercent;

  if (Rate_Percent === undefined) {
    ratePercent = `0%`;
  } else if (Rate_Percent < 1) {
    ratePercent = `<1%`;
    ratePercentage = `${Rate_Percent}%`;
  }

  return (
    <div className='flex items-center gap-10'>
      <main className='flex items-center gap-4'>
        <section className='flex items-center gap-[2px] font-normal'>
          <Star bgText={true} />
          <Star bgText={true} />
          <Star bgText={true} />
          <Star bgText={true} />
          <Star />
        </section>
        <h2 className='text-sm'>4 Star</h2>
      </main>

      <section className='flex items-center gap-8'>
        <div className='w-[16rem] h-[6px] bg-[#f0f0f0]'>
          <div
            style={{ width: ratePercentage }}
            className='h-full bg-[#e67e22]'></div>
        </div>
        <h2 className='text-sm text-balck font-semibold'>{ratePercent}</h2>
      </section>
    </div>
  );
}
