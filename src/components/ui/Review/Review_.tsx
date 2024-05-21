/** @format */

import { useState } from "react";
import Button_ from "../Button_/Button_";
import Modal from "../Modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
// import Rating_ from "../Rating/Rating_";

export default function Review_() {
  const [review, setReview] = useState(true);

  const onCloseReview = () => setReview(false);

  return (
    <>
      <AnimatePresence>
        {review && (
          <Modal className='bg-black/60' onClick={onCloseReview}>
            <motion.div
              initial={{ scale: review ? 0 : 1}}
              animate={{ scale: 1 }}
              exit={{ y: 500 }}
              transition={{ duration: 0.2 }}
              className='w-screen h-screen -mt-20 nb:mt-0 fixed flex items-center justify-center z-40 shadow-md'>
              <main className='bg-white w-5/6 nb:w-2/6 h-max py-2 flex flex-col gap-4'>
                <section className='flex items-center justify-between font-normal text-xs border-b px-4 py-1'>
                  <h2>Write A Review</h2>
                  <button
                    type='button'
                    onClick={onCloseReview}
                    className='active:bg-activeBtn py-1 px-1 rounded-full trnasition duration-300'>
                    {""}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 text-gray-400'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18 18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </section>

                <section className='flex flex-col justify-center items-center'>
                  <h2 className='font-semibold text-lg'>4.5</h2>
                  {/* <Rating_/> */}
                </section>

                <section className='px-4 py-1 flex flex-col gap-1 text-sm'>
                  <label htmlFor='feedback' className='font-semibold text-sm'>
                    Feedback
                  </label>
                  <textarea
                    name='feedback'
                    id='feedback'
                    placeholder='Write down your feedback here...'
                    className='w-6/6 h-[7rem] max-w-6/6 max-h-[7rem] min-w-6/6 min-h-[7rem] px-2 py-1 border rounded-md placeholder:text-xs outline-none text-xs'></textarea>
                </section>

                <section className='w-full flex justify-between items-center px-4 py-1'>
                  <button
                    type='button'
                    onClick={onCloseReview}
                    className='bg-[#f4f6f6] active:bg-[#eaeded] text-sm text-black font-semibold px-4 py-2 rounded transition duration-300'>
                    Cancel
                  </button>
                  <Button_ text='Submit Review' />
                </section>
              </main>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
