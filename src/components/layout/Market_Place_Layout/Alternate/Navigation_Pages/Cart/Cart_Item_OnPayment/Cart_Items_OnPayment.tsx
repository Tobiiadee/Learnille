/** @format */

import { Link } from "react-router-dom";
import Cart_Item_OnPayment from "./Cart_Item_OnPayment";

export default function Cart_Items_OnPayment() {
  return (
    <section className=' pt-2  px-4 flex flex-col gap-4'>
      <h2 className='text-sm font-semibold'>
        Course(<span>02</span>)
      </h2>
      <div className='flex flex-col gap-2 border-b pb-4'>
        <Cart_Item_OnPayment />
        <Cart_Item_OnPayment />
      </div>

      <div className='flex flex-col gap-2 border-b pb-4'>
        <h2 className='font-semibold text-sm'>Order Summary</h2>
        <div className='flex items-center justify-between'>
          <h2 className='text-xs text-text'>Subtotal</h2>
          <h2 className='text-black text-sm font-semibold flex gap-[2px]'>
            <span>$175.00</span>
            <span>USD</span>
          </h2>
        </div>

        <div className='flex items-center justify-between'>
          <h2 className='text-xs text-text'>Coupon Discount</h2>
          <h2 className='text-black text-sm font-semibold'>
            <span>8%</span>
          </h2>
        </div>
      </div>

      <div>
        <Link to="/learnille/market%20place/market_place/make%20payment" className="w-full">
        <button
          type='button'
          className='bg-layout-bg active:bg-[#304fd9] w-full text-white font-semibold text-sm py-2 rounded transition duration-300'>
          Proceed To Payment
        </button>
        </Link>
      </div>
    </section>
  );
}
