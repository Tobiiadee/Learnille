import { ArrowD } from "@/assets/svg/HeaderSVG";
import Reviews_Item from "./Reviews_Item";

export default function Reviews() {
  return (
    <main className="bg-white flex flex-col gap-4 rounded pb-4">
      <section className="w-full text-sm text-black flex justify-between items-center border-b pb-4 px-4 py-2  ">
        <h2 className="font-semibold">Students Feedback</h2>
        <div className="flex items-center gap-2 text-xs">
          <h2 className="capitalize text-text"><span>5</span> star rating</h2>
          <button type="button">
            {""}
            <ArrowD className="text-text"/>
          </button>
        </div>
      </section>

      <section className="w-full pl-8 pr-4 tab:pr-2">
        <Reviews_Item />
        <Reviews_Item />
        <Reviews_Item />
        <Reviews_Item />
        <Reviews_Item />
      </section>
    </main>
  )
}
