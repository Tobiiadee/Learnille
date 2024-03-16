/** @format */

import { useState } from "react";
import { SearchV } from "../../../../../assets/svg/HeaderSVG";
import Search from "./Search";
import Menu from "./Menu";

export default function Header() {
  const [onSearch, setOnSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  //Search Handler
  const onSearchHandler = () => setOnSearch(true);
  const onCloseSearchHandler = () => setTimeout(() => setOnSearch(false), 300);

  //Menu Handler
  const onOpenMenuHandler = () => setOpenMenu(true);
  const onCloseMenuHandler = () => setTimeout(() => setOpenMenu(false), 300);

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-14 flex items-center justify-between shadow bg-white px-2 py-2 tab:hidden'>
        <main className='flex flex-col gap-0'>
          <h2 className='text-layout-bg font-bold'>Hi Username</h2>
          <p className='text-xs text-text font-normal -mt-1'>
            Lets learn something today
          </p>
        </main>

        <main className='flex items-center gap-6 mr-4'>
          <section>
            <button type='button' onClick={onSearchHandler}>
              {""}
              <span className=''>
                <SearchV />
              </span>
            </button>
          </section>

          <section>
            <button type='button' onClick={onOpenMenuHandler}>
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
      <section className='tab:hidden'>
        {onSearch && <Search closeSearch={onCloseSearchHandler} />}
      </section>

      <section className='tab:hidden'>
        {openMenu && <Menu closeMenu={onCloseMenuHandler} />}
      </section>
    </>
  );
}
