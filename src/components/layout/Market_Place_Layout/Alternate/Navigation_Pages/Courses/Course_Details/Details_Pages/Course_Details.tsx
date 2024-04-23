/** @format */

import Video from "@/components/ui/Video/Video";
import Pages_Home from "./Pages/Home/Pages_Home";
import Navigation from "./Nav/Navigation";

export default function Course_Details() {
  return (
    <section className='flex flex-col gap-4'>
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

        <div className="h-max">
          <Video />
        </div>
      </main>

      <section>
        <Navigation />
      </section>

      <main>
        <Pages_Home />
      </main>
    </section>
  );
}
