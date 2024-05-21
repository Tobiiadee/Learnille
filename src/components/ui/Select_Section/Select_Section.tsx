/** @format */

import { useState } from "react";
import Button_ from "../Button_/Button_";
import Modal from "../Modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import Section_Item from "./Section_Item";
// import Rating_ from "../Rating/Rating_";

export default function Select_Section() {
  const [select, setSelect] = useState(true);
  const [selectSection, setSelectSection] = useState(false);

  const onCloseSelect = () => setSelect(false);

  const onSelectSection = () => setSelectSection((prev) => !prev);

  return (
    <>
      <AnimatePresence>
        {select && (
          <Modal className='bg-black/60' onClick={onCloseSelect}>
            <motion.div
              initial={{ scale: select ? 0 : 1 }}
              animate={{ scale: 1 }}
              exit={{ y: 500 }}
              transition={{ duration: 0.2 }}
              className='w-screen h-screen -mt-20 nb:mt-0 fixed flex items-center justify-center z-40 shadow-md'>
              <main className='bg-white w-5/6 nb:w-2/6 h-max py-2 flex flex-col gap-4'>
                <section className='flex items-center justify-between font-normal text-xs border-b px-4 py-1'>
                  <h2>Select Section To Buy</h2>
                  <button
                    type='button'
                    onClick={onCloseSelect}
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

                <section className='flex flex-col gap-[4px] overflow-hidden'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Section_Item
                      sectNumber={index + 1}
                      key={index + 1}
                      clickBg={selectSection}
                      onClickSection={onSelectSection}
                    />
                  ))}
                </section>

                <section className='w-full flex justify-end items-center px-4 py-1'>
                  <Button_ text='Continue' />
                </section>
              </main>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
