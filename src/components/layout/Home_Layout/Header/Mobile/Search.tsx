/** @format */
import { SearchV } from "@/assets/svg/HeaderSVG";
import Mobile_Pop from "@/components/ui/Mobile_Pop/Mobile_Pop";
import Modal from "@/components/ui/Modal/Modal";

import { motion } from "framer-motion";

type SearchType = {
  closeSearch: () => void;
  openMenu: boolean;
};

export default function Search({ closeSearch, openMenu }: SearchType) {
  const SlideInVariant = {
    in: {
      y: -300,
    },
    out: {
      y: 0,
    },
  };

  return (
    <Modal onClick={closeSearch} className="bg-black opacity-90">
      <Mobile_Pop classNames="top-0 left-0">
        <motion.main
          variants={SlideInVariant}
          initial={openMenu ? "in" : "out"}
          animate={openMenu ? "out" : "in"}
          transition={{ duration: 0.5 }}
          className='w-screen h-80 tab:h-96 bg-white flex flex-col gap-4 py-4 px-3 rounded-b rounded-md'>
          <div className='mt-6 flex gap-2 items-center w-full h-10 border-b border-text border-dotted'>
            <span>
              <SearchV />
            </span>
            <div className='w-full'>
              <input
                type='text'
                id='search'
                className='border-none w-60 outline-none text-sm placeholder:text-sm'
                placeholder='Search...'
              />
            </div>

            <div className='bg-background text-xs rounded-md px-1 py-1 font-normal'>
              <button
                type='button'
                className='flex items-center justify-center active:border rounded-full w-6 h-6 active:bg-text'
                onClick={closeSearch}>
                esc
              </button>
            </div>
          </div>

          <div className='w-full h-40 border-b border-text border-dotted'>
            <h2>Recent Search</h2>
          </div>
        </motion.main>
      </Mobile_Pop>
    </Modal>
  );
}
