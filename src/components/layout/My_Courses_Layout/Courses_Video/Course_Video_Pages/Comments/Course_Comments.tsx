/** @format */

import Comment_Item from "./Comment_Item";

export default function Course_Comments() {
  return (
    <section className='flex flex-col gap-4'>
      <div>
        <h2 className='text-sm text-black font-semibold'>
          <span>Comments </span>(<span>105</span>)
        </h2>
      </div>

      <main className="flex flex-col gap-2">
        <Comment_Item />
        <Comment_Item />
        <Comment_Item />
      </main>
    </section>
  );
}
