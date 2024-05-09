/** @format */

import { motion } from "framer-motion";

import Events from "./Components/Events";
import Buttons from "./Components/Buttons";
import { useState } from "react";

export default function UpcomingEvents() {
  const [viewLess, setViewLess] = useState(true);

  const onVeiwLess = () => {
    setViewLess((prev) => !prev);
  };

  //9rem and 6rem

  return (
    <motion.section
      animate={{ height: !viewLess ? "9rem" : "5.8rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`text-sm flex flex-col overflow-hidden border-b border-dotted pb-4 ${!viewLess ? "h-[6rem]" : "h-[9rem]"}`}>
      <div>
        <Events view={!viewLess} onView={onVeiwLess} />
      </div>
      {!viewLess && <div>
        <Buttons />
      </div>}
    </motion.section>
  );
}
