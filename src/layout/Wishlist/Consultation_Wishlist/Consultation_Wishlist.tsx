/** @format */

// import Empty_State from "@/components/ui/Empty_State/Empty_State";
import Consultation_Wishlist_Item from "./Consultation_Wishlist_Item";

export default function Consultation_Wishlist() {
  return (
    <main className="">
      <section className='grid grid-cols-2 bg-white text-sm font-semibold uppercase border-[0.5px] border-[#dae1e6] px-4 py-2'>
        <div className="">
          <h2>Consultation</h2>
        </div>
        <div className='flex gap-10 tab:gap-32'>
          <h2>Price</h2>
          <h2>Action</h2>
        </div>
      </section>
      {/* <Empty_State text="There is no consultation on your wishlist"/> */}
      <section className="bg-white flex flex-col gap-2 px-4 py-1">
        <Consultation_Wishlist_Item/>
        <Consultation_Wishlist_Item/>
        <Consultation_Wishlist_Item/>
      </section>
    </main>
  );
}
