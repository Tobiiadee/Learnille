/** @format */

import Video_M from "./components/Video/Video_M";
import Meeting_Note from "./components/Meeting_Note/Meeting_Note";
import Consultation_Information from "./Consultation_Information";

export default function Consultation_Metting() {
  return (
    <section className='px-1 tab:px-0 mr-2'>
      <span className='text-xs text-text flex gap-1'>
        <p>Consultation / Active Consultation /</p>
        <span className='font-semibold text-layout-bg underline'>
          Live Call
        </span>
      </span>

      <main className='grid grid-cols-3 gap-4'>
        <section className='col-span-3 tab:col-span-2'>
          <Video_M />
          <Meeting_Note />
        </section>

        <Consultation_Information />
      </main>
    </section>
  );
}
