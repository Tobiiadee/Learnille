/** @format */

import Experience_Item from "./Experience_Item";

export default function Experience() {
  return (
    <section className='bg-white flex flex-col gap-2 p-4 rounded-md'>
      <h2 className="text-black text-sm font-semibold border-b pb-2">Experience</h2>
      <div className="flex flex-col gap-3">
        <Experience_Item />
        <Experience_Item />
        <Experience_Item />
        <Experience_Item />
      </div>
    </section>
  );
}
