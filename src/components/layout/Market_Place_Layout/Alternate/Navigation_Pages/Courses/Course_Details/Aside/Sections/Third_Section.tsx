/** @format */

import { Link } from "react-router-dom";

export default function Third_Section() {
  return (
    <section className='bg-white w-full px-4 py-2 flex flex-col gap-4'>
      <Link to='/learnille/market place/market_place/cart' className='w-full'>
        <button
          type='button'
          className='bg-layout-bg active:bg-[#304fd9] w-full text-white font-semibold text-sm py-2 rounded transition duration-300'>
          Add To Cart
        </button>
      </Link>

      <Link
        to='/learnille/market place/market_place/make payment'
        className='w-full'>
        <button
          type='button'
          className='bg-[#AED6F1] active:bg-[#96bad1] w-full text-black font-semibold text-sm py-2 rounded transition duration-300'>
          Buy Now
        </button>
      </Link>

      <div className='flex gap-4'>
        <button
          type='button'
          className='text-sm text-text font-normal border rounded-sm py-2 px-4 active:bg-[#e8e7e7] w-full transition duration-300'>
          Add To Wishlist
        </button>
        <button
          type='button'
          className='text-sm text-text font-normal border rounded-sm py-2 px-4 active:bg-[#e8e7e7] w-full transition duration-300'>
          Gift Course
        </button>
      </div>

      <div>
        <span className='text-sm flex gap-1'>
          <h2 className='font-semibold text-black'>Note:</h2>{" "}
          <p className='text-text'>
            all couses have 30-days money-back guarantee
          </p>
        </span>
      </div>
    </section>
  );
}
