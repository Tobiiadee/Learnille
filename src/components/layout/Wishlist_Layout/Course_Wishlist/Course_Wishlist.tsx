import Course_Wishlist_Item from "./Course_Wishlist_Item";

export default function Course_Wishlist() {
  return (
    <main>
      <section className='grid grid-cols-2 bg-white text-black text-sm font-normal tab:font-semibold uppercase border-[0.5px] border-[#dae1e6] px-4 py-2'>
        <div className="">
          <h2>Consultation</h2>
        </div>
        <div className='flex gap-10 tab:gap-32'>
          <h2>Price</h2>
          <h2>Action</h2>
        </div>
      </section>

      <section className="bg-white flex flex-col gap-2 px-4 py-1">
        <Course_Wishlist_Item/>
        <Course_Wishlist_Item/>
        <Course_Wishlist_Item/>
        <Course_Wishlist_Item/>
        <Course_Wishlist_Item/>
      </section>
    </main>
  )
}
