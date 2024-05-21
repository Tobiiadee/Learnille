/** @format */

// import Empty_State from "@/components/ui/Empty_State/Empty_State";
import My_Certificate from "./Certificate/My_Certificate_Item";
import Card from "@/components/ui/Card/Card";

export default function MyCertificate() {
  return (
    <>
    {/* <Empty_State text="You don't have any certificate"/> */}
    <section className='pr-2 tab:pr-6 nb:pr-32'>
      <Card classNames='w-full flex flex-col gap-4'>
        <div className='text-sm font-semibold border-b pb-4'>
          <h2>My Certificate</h2>
        </div>

        <section className="flex flex-col items-center nb:items-start gap-4 divide-y">
          <My_Certificate />
          <My_Certificate />
          <My_Certificate />
          <My_Certificate />
        </section>
      </Card>
    </section>
    </>
  );
}
