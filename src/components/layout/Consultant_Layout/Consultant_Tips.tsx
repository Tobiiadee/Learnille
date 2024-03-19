/** @format */

import Card from "@/components/ui/Card/Card";

export default function Consultant_Tips() {
  const text =
    "Plan ahead! Prepare the questions and topics you'll like to discuss. Get a stable network connection, convinience space free from any distraction.";
  const title = "How to prepare for your next meeting";

  return (
      <Card classNames='border border-[#e1edf6] max-h-40'>
        <h2 className='text-sm font-semibold text-black'>
          #Tips for successful meetings
        </h2>
        <h1 className='text-sm text-layout-bg font-semibold capitalize mt-1'>
          {title}
        </h1>

        <p className='text-xs mt-2'>{text}</p>
      </Card>
  );
}
