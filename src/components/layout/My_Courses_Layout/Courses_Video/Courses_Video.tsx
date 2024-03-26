/** @format */
import Course_Video_Section from "./Aside_Section/Course_Video_Section";
import Course_Video_Header from "./Header/Course_Video_Header";
import Course_Video_Home from "./Home/Course_Video_Home";

export default function Courses_Video() {

  return (
    <main className='grid nb:grid-cols-3 gap-4'>
      <section className='col-span-2 px-2 nb:px-0 nb:col-span-2 flex flex-col gap-2'>
        <div className='text-xs text-text'>
          <h2>
            My Courses / <span>How To Make Your First Million /</span> Play
            Course /{" "}
            <span className='text-layout-bg underline'>Course Description</span>
          </h2>
        </div>

        <main className='w-full border h-[20rem] nb:h-[26rem] shadow rounded-lg overflow-hidden'></main>

        <main className='flex justify-between mt-4'>
          <section className='flex gap-1 text-sm font-semibold'>
            <span>2.</span>
            <h2>What is webflow?</h2>
          </section>

          <section className='flex gap-1 text-xs'>
            <h2 className='text-text font-normal'>Last updated:</h2>
            <span className='font-semibold'>Oct 29, 2021</span>
          </section>
        </main>

        <main>
          <Course_Video_Header />
        </main>

        <main>
            <Course_Video_Home/>
        </main>
      </section>

      <aside className="hidden nb:block">
        <Course_Video_Section/>
      </aside>
    </main>
  );
}
