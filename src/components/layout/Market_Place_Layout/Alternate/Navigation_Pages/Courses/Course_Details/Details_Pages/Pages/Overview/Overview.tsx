/** @format */

import Course_For from "./Course_For";

export default function Overview() {
  return (
    <main className="flex flex-col gap-4 px-4 tab:px-0">
      <section className='flex flex-col gap-4 text-black'>
        <h2 className='text-sm font-semibold'>Description</h2>
        <p className='text-sm font-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          incidunt eligendi consequatur ad molestias velit inventore accusantium
          impedit omnis, eaque facere veritatis laborum voluptas id illum.
          Incidunt, enim sunt suscipit eius explicabo doloribus totam animi hic
          recusandae minus, aliquam nesciunt ducimus. Cum aut neque esse quaerat
          laboriosam odio, nam doloribus, similique architecto quam, facere
          doloremque eaque corrupti earum voluptas totam possimus! Excepturi
          cupiditate ducimus atque itaque quaerat quod placeat doloremque? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo
          repellendus unde nesciunt debitis corrupti nostrum incidunt, qui
          commodi reiciendis doloremque deleniti laudantium enim repellat natus
          adipisci similique molestias asperiores architecto! Nisi nobis dolor
          ut quaerat unde porro, mollitia facere! Nostrum numquam alias
          voluptate? Eius provident adipisci sed mollitia quod libero ut! Quae,
          totam explicabo! Voluptatum eveniet odit explicabo provident?
        </p>
      </section>

      <section className="text-sm font-semibold text-black flex flex-col gap-2">
        <h2 className="">Who is this course for?</h2>
        <div className=" flex flex-col gap-2">
          <Course_For />
          <Course_For />
          <Course_For />
          <Course_For />
          <Course_For />
        </div>
      </section>

      <section className="text-sm font-semibold text-black flex flex-col gap-2">
        <h2 className="">Course requirments</h2>
        <div className=" flex flex-col gap-2">
          <Course_For />
          <Course_For />
          <Course_For />
          <Course_For />
          <Course_For />
        </div>
      </section>
    </main>
  );
}
