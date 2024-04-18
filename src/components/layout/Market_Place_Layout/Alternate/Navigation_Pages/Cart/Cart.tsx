/** @format */

// import { useParams } from "react-router-dom";
import Cart_Items_OnPayment from "./Cart_Item_OnPayment/Cart_Items_OnPayment";
import Cart_Item from "./Cart_Items/Cart_Item";

export default function Cart() {
  // const {market_place_id} = useParams();

  return (
    <main className='flex flex-col gap-4 '>
      <section className='text-sm text-black flex flex-col gap-1'>
        <h2>
          Courses / How to make millions... / Add to Cart /{" "}
          <span className='underline text-layout-bg'>Cart</span>
        </h2>

        <h2 className='text-lg font-semibold text-black'>
          Cart(<span>3</span>)
        </h2>
      </section>

      <section className='grid nb:grid-cols-[600px_600px_420px] gap-4'>
        <div className='flex flex-col gap-0'>
          <section className='flex justify-between bg-white text-black text-sm font-normal tab:font-semibold uppercase border-[0.5px] border-[#dae1e6] px-4 py-2'>
            <div className=''>
              <h2>Consultation</h2>
            </div>
            <div className=''>
              <h2>Prices</h2>
            </div>
          </section>

          <section className="bg-white pt-2 flex flex-col gap-2">
            <Cart_Item />
            <Cart_Item />
            <Cart_Item />
          </section>
        </div>
        <div className='w-full nb:w-[25rem] bg-white h-max pb-4 border rounded'>
            <Cart_Items_OnPayment/>
        </div>
      </section>
    </main>
  );
}
