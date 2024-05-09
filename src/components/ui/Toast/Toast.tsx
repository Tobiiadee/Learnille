/** @format */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Toast({ text }: { text?: string }) {
  const [toast, setToast] = useState(true);

  useEffect(() => {
    setTimeout(() => setToast(false), 7000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.5 }}
            className='fixed bottom-2 right-10 z-40 rounded-md bg-layout-bg p-[1px]  w-max h-max'>
            <div className=' flex gap-4 items-center text-white text-sm border-2 border-white rounded-md  py-1 px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
              <p>{text || "This is a toast notification!"}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
