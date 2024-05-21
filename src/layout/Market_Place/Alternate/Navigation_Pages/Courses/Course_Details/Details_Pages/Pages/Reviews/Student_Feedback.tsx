/** @format */
import { ArrowD } from "@/assets/svg/HeaderSVG";
import Reviews_Item from "./Reviews_Item";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Student_Feedback() {
  const [loadComments, setLoadComments] = useState(true);

  const commentsHandler = () => setLoadComments((prev) => !prev);

  return (
    <section className='flex flex-col gap-[2px] overflow-hidden'>
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
      <AnimatePresence>
        {loadComments && (
          <motion.main
            initial={{ y: loadComments ? -500 : 0 }}
            animate={{ y: 1 }}
            exit={{ y: -700 }}
            transition={{ duration: 0.5 }}
            className='bg-white pt-2 pb-4 px-4 flex flex-col divide-y'>
            <Reviews_Item />
            <Reviews_Item />
            <Reviews_Item />
            <Reviews_Item />
          </motion.main>
        )}
      </AnimatePresence>
    </section>
  );
}
