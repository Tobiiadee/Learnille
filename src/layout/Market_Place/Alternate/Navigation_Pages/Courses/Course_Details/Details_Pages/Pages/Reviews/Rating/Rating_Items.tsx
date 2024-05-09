/** @format */

import Rate_Item1 from "./Rate_Items/Rate_Item1";
import Rate_Item2 from "./Rate_Items/Rate_Item2";
import Rate_Item3 from "./Rate_Items/Rate_Item3";
import Rate_Item4 from "./Rate_Items/Rate_Item4";
import Rate_Item5 from "./Rate_Items/Rate_Item5";

export default function Rating_Items() {
  return (
    <div className='flex flex-col gap-2'>
      <Rate_Item5 Rate_Percent={56} />
      <Rate_Item4 Rate_Percent={37} />
      <Rate_Item3 Rate_Percent={8} />
      <Rate_Item2 Rate_Percent={6} />
      <Rate_Item1 Rate_Percent={0.5} />
    </div>
  );
}
