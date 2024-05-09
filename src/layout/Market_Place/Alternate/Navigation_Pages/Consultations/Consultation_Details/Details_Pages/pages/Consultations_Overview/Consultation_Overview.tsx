/** @format */
import Video from "@/components/ui/Video/Video";
import What_You_Will_Gain from "./What_You_Will_Gain/What_You_Will_Gain";
import Instructor from "../../../../../Courses/Course_Details/Details_Pages/Pages/Instructor/Instructor";

export default function Consultation_Overview() {
  return (
    <section className='flex flex-col gap-2'>
      <main className='bg-white w-full px-6 py-7 rounded flex flex-col gap-4'>
        <div className='text-sm text-black flex flex-col gap-2'>
          <h2 className='font-semibold text-sm tab:text-lg capitalize'>
            How to make your first milion as a front-end developer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            deleniti culpa voluptates at sequi repudiandae, corrupti molestias
            eos, ea, adipisci nihil eveniet odit eligendi accusantium accusamus
            nesciunt.
          </p>
        </div>
        <Video />
      </main>

      <main className='bg-white w-full px-6 py-4 rounded flex flex-col gap-2'>
        <h2 className='font-semibold text-lg'>What you will gain</h2>
        <section className='flex flex-col gap-2'>
          <What_You_Will_Gain />
          <What_You_Will_Gain />
          <What_You_Will_Gain />
          <What_You_Will_Gain />
          <What_You_Will_Gain />
          <What_You_Will_Gain />
        </section>
      </main>

      <main className='bg-white w-full px-6 py-4 rounded flex flex-col gap-2'>
        <h2 className='text-sm text-black font-semibold border-b pb-2'>
          Instructor
        </h2>
        <Instructor />
      </main>
    </section>
  );
}
