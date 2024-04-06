/** @format */

import Card from "@/components/ui/Card/Card";
import Checkbox from "./Checkbox_Notification/Checkbox";
import Button_ from "@/components/ui/Button_/Button_";

export default function Notification() {
  return (
    <Card classNames='flex flex-col gap-4'>
      <h2 className='text-sm font-semibold text-black'>Notification</h2>
      <section className='flex flex-col gap-2'>
        <Checkbox label='I want to know who viewed my consultation package.' />
        <Checkbox label='I want to know who wrote a review for me.' />
        <Checkbox label='I want to know who commented/replied my review.' />
      </section>

      <Button_ text="Save Changes" className="self-start"/>
    </Card>
  );
}
