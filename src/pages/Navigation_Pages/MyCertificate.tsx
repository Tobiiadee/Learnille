/** @format */

import My_Certificate from "@/components/layout/My_Certificate_Layout/My_Certificate";
import Card from "@/components/ui/Card/Card";

export default function MyCertificate() {
  return (
    <section className='pr-2 tab:pr-6 nb:pr-32'>
      <Card classNames='w-full flex flex-col gap-4'>
        <div className='text-sm font-semibold border-b pb-4'>
          <h2>My Certificate</h2>
        </div>

        <section className="flex flex-col items-center nb:items-start gap-4">
          <My_Certificate />
          <My_Certificate />
          <My_Certificate />
        </section>
      </Card>
    </section>
  );
}
