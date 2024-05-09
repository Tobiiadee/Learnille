/** @format */

import { Star } from "@/assets/svg/HeaderSVG";
import { ArrowD } from "@/assets/svg/HeaderSVG";
import Rating_Items from "./Rating_Items";
import { useState } from "react";

export default function Rating() {
  const [loadRating, setLoadRating] = useState(true);

  const ratingHandler = () => setLoadRating((prev) => !prev);
  return (
    <main className="flex flex-col gap-[2px]">
      <header className='text-sm text-black flex justify-between bg-white py-2 px-4'>
        <h2 className='font-semibold capitalize'>Overall course rating</h2>
        <button
          type='button'
          onClick={ratingHandler}
          className='flex gap-1 items-center text-xs font-normal'>
          <p>This week</p>
          <ArrowD onRotate={loadRating}/>
        </button>
      </header>

      {loadRating && <section className='bg-white flex flex-col gap-4 p-4'>
        <main className='grid grid-cols-2 tab:grid-cols-[150px_180px_180px] gap-2 tab:gap-4 w-full'>
          <section className='col-span-1 flex flex-col gap-2 items-center justify-center text-black bg-[#fae5d3] py-10'>
            <h2 className='text-xl tab:text-2xl font-bold'>4.6</h2>
            <div className='flex items-center gap-1'>
              <Star bgText={true}/>
              <Star bgText={true}/>
              <Star bgText={true}/>
              <Star bgText={true}/>
              <Star bgText={true}/>
            </div>
            <h2 className='font-normal text-sm tab:text-lg'>Overall Rating</h2>
          </section>

          <section className='tab:col-span-2 bg-[#fae5d3]'></section>
        </main>

        <main>
          <Rating_Items />
        </main>
      </section>}
    </main>
  );
}
