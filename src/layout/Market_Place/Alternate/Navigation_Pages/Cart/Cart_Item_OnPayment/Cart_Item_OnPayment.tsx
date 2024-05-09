/** @format */

import img from "../../../../../../assets/images/075826d0f7062c2b072efd481ac7837b.jpg";

export default function Cart_Item_OnPayment() {
  return (
    <section className='flex items-center gap-4'>
      <section>
        <div className='w-20 h-20 shadow rounded-sm overflow-hidden flex items-center justify-center'>
          <img src={img} alt='' />
        </div>
      </section>

      <section className='flex flex-col gap-2 w-full'>
        <h2 className='flex gap-1 text-xs text-black'>
          <span className='text-text'>created by:</span>
          <span className='font-semibold'>John Doe</span>
        </h2>

        <h2 className='text-xs font-semibold capitalize'>
          Graphic design masterclass
        </h2>

        <h2 className='text-layout-bg text-sm font-semibold'>$130.00</h2>
      </section>
    </section>
  );
}
