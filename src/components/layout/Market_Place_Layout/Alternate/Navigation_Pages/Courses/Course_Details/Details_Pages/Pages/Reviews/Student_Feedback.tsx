/** @format */
import { ArrowD } from "@/assets/svg/HeaderSVG";
import Reviews_Item from "@/components/layout/Market_Place_Layout/Nav_pages/Reviews/Reviews_Item";
import { useState } from "react";

export default function Student_Feedback() {
  const [loadComments, setLoadComments] = useState(true);

  const commentsHandler = () => setLoadComments((prev) => !prev);

  return (
    <section className='flex flex-col gap-1'>
      <header className='text-sm text-black flex justify-between bg-white py-2 px-4'>
        <h2 className='font-semibold capitalize'>Student feedback</h2>
        <button
          type='button'
          onClick={commentsHandler}
          className='flex gap-1 items-center text-xs font-normal'>
          <p>
            <span>5</span> star rating
          </p>
          <ArrowD onRotate={loadComments} />
        </button>
      </header>

      {loadComments && (
        <main className='bg-white py-2 px-4 flex flex-col transition-all duration-300'>
          <Reviews_Item />
          <Reviews_Item />
          <Reviews_Item />
          <Reviews_Item />
        </main>
      )}
    </section>
  );
}
