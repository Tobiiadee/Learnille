/** @format */

import { useState } from "react";
import { SearchV } from "../../../../assets/svg/HeaderSVG";
import Search from "./Search";
import Menu from "./Menu";

export default function Header() {
  const [onSearch, setOnSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  //Search Handler
  const searchHandler = () =>
    setTimeout(() => setOnSearch((prev) => !prev), 300);

  //Menu Handler
  const menuHandler = () => setTimeout(() => setOpenMenu((prev) => !prev), 300);

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-14 flex items-center justify-between shadow bg-white px-2 py-2 nb:hidden z-40'>
        <main className='flex flex-col gap-0'>
          <h2 className='text-layout-bg font-bold'>Hi Username</h2>
          <p className='text-xs text-text font-normal -mt-1'>
            Lets learn something today
          </p>
        </main>

        <main className='flex items-center gap-2 mr-1'>
          <section>
            <button
              type='button'
              className='flex items-center justify-center active:border rounded-full w-10 h-10 active:bg-activeBtn transition duration-300'
              onClick={searchHandler}>
              {""}
              <span className=''>
                <SearchV />
              </span>
            </button>
          </section>

          <section>
            <button
              type='button'
              className='flex items-center justify-center active:border rounded-full w-10 h-10 active:bg-activeBtn transition duration-300'
              onClick={menuHandler}>
              {""}
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'>
                  <path d='M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z' />
                </svg>
              </span>
            </button>
          </section>
        </main>
      </div>
      <section className='nb:hidden'>
        {onSearch && <Search openMenu={onSearch} closeSearch={searchHandler} />}
      </section>

      <section className='nb:hidden'>
        {openMenu && <Menu openMenu={openMenu} closeMenu={menuHandler} />}
      </section>
    </>
  );
}
