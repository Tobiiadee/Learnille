/** @format */
import { useState } from "react";

import Card from "@/components/ui/Card/Card";
import Checkbox from "./Checkbox_Notification/Checkbox";
import Button_ from "@/components/ui/Button_/Button_";

export default function Notification() {
  const [isChecked, setIsChecked] = useState(false);

  const isCheckedHandler = (checked: boolean) => {
    setIsChecked(checked);
    return isChecked;
  };

  return (
    <Card classNames='flex flex-col gap-4'>
      <h2 className='text-sm font-semibold text-black'>Notification</h2>
      <section className='flex flex-col gap-2'>
        <Checkbox
          onChange={isCheckedHandler}
          label='I want to know who viewed my consultation package.'
        />
        <Checkbox
          onChange={isCheckedHandler}
          label='I want to know who wrote a review for me.'
        />
        <Checkbox
          onChange={isCheckedHandler}
          label='I want to know who commented/replied my review.'
        />
      </section>

      <section className=' h-full flex items-end'>
        <Button_ text='Save Changes' className='' />
      </section>
    </Card>
  );
}
