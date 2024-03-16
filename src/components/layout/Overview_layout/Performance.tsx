/** @format */

import { ArrowD } from "../../../assets/svg/HeaderSVG";
import Card from "../../ui/Card/Card";
import Performance_Ani from "./z_animation/Performance_Ani";

export default function Performance() {
  return (
    <Card>
      <section className='w-72 tab:w-full text-xs font-normal h-52'>
        <div className='flex justify-between'>
          <span className='flex gap-2 items-center'>
            <div className='w-4 h-4 rounded bg-[#2ECC71]'></div>
            <h2 className='font-normal'>Point Progress</h2>
          </span>
          <span>
            <button type='button' className={`flex items-center gap-2`}>
              <h2>Monthly</h2>
              <ArrowD />
            </button>
          </span>
        </div>

        <Performance_Ani />
      </section>
    </Card>
  );
}
