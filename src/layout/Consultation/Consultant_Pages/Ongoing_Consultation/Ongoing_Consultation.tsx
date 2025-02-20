/** @format */

import { ArrowD } from "@/assets/svg/HeaderSVG";
import Card from "@/components/ui/Card/Card";
import Time_Date from "@/components/ui/Time&Date/Time_Date";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Ongoing_Consultation() {
  const [veiwLess, setViewLess] = useState(false);

  const onViewLess = () => setViewLess((prev) => !prev);

  return (
    <Card classNames={`${veiwLess ? "border" : ""}`}>
      <section>
        <main className='flex justify-between items-center'>
          <div>
            <p className='text-xs'>
              Mentorship Session With{" "}
              <span className='font-semibold text-sm text-layout-bg'>
                John Doe
              </span>
            </p>
          </div>

          <div>
            <button
              onClick={onViewLess}
              type='button'
              className='text-xs flex gap-4 items-center'>
              <h2>{veiwLess ? "Less Details" : "More Details"}</h2>
              <ArrowD onRotate={veiwLess} />
            </button>
          </div>
        </main>

        <main className='flex flex-col gap-2 pb-1'>
          <div>
            <Time_Date display='flex gap-1' />
          </div>

          <motion.section
            initial={{ height: veiwLess ? "22rem" : "0rem" }}
            animate={{ height: veiwLess ? "22rem" : "0rem" }}
            exit={{ height: "10rem" }}
            transition={{ duration: 0.4 }}
            className="overflow-y-scroll tab:overflow-hidden"
            >
            <div className='flex flex-col gap-4 border-t pt-6 pb-4 tab:pb-0'>
              <main>
                <h2 className='text-sm font-semibold'>Mentor:</h2>
                <div className='flex gap-4 mt-2'>
                  <span className='w-10 h-10 rounded-full shadow overflow-hidden flex items-center justify-center'>
                    <img src='' alt='' />
                  </span>

                  <span className='flex flex-col gap-2'>
                    <h2 className='text-sm font-semibold'>Adesiyan David</h2>
                    <p className='text-xs'>Lead Developer at Pencill.ng</p>
                  </span>
                </div>
              </main>

              <main className='flex flex-col gap-4'>
                <div>
                  <h2 className='text-sm font-semibold'>Session Name:</h2>
                  <p className='text-xs mt-1 text-text'>
                    The Nations Development...
                  </p>
                </div>

                <div>
                  <h2 className='text-sm font-semibold'>Your Note/Question</h2>
                  <p className='text-xs mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, laborum facere accusantium totam beatae similique.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias perferendis aliquid obcaecati ut amet vero soluta
                    temporibus neque dicta assumenda? Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Ad doloremque excepturi
                    ea aliquam maxime vitae eligendi minima enim praesentium
                    quia nam perspiciatis inventore numquam, quas, repellat at
                    mollitia eaque voluptate?
                  </p>
                </div>
              </main>

              <main className='mt-2 border-b border-text w-max'>
                <h2 className='text-xs text-text'>
                  Created on 27th November, 2023 10:00pm WAT
                </h2>
              </main>
            </div>
          </motion.section>

          <div className='flex gap-2 text-[10px] tab:text-xs'>
            <Link to='/learnille/consultation/consultation_meeting'>
              <button
                type='button'
                className='px-1 tab:px-2 py-1 tab:py-2 rounded-md bg-layout-bg text-white font-semibold active:bg-[#2a49d1] transition duration-300'>
                Join Meeting
              </button>
            </Link>
            <button
              type='button'
              className='px-1 tab:px-2 py-1 border border-[#6f3b30] text-[#6f3b30] rounded-md active:bg-[#eee] transition duration-300'>
              Send Message
            </button>
            <button
              type='button'
              className='px-2 py-1 border border-[#6f3b30] text-[#6f3b30] rounded-md active:bg-[#eee] transition duration-300'>
              Reschedule
            </button>
            <button
              type='button'
              className='px-2 py-1 border border-[#d0593f] text-[#d0593f] rounded-md active:bg-[#eee] transition duration-300'>
              Cancel
            </button>
          </div>
        </main>
      </section>
    </Card>
  );
}
