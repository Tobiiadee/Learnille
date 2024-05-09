/** @format */

import Card from "@/components/ui/Card/Card";
import Cart_Items_OnPayment from "../Cart/Cart_Item_OnPayment/Cart_Items_OnPayment";
import Related_Courses from "../Courses/Course_Details/Related_Course/Related_Courses";
import First_Sect from "./First_Sect";
import Second_Sect from "./Second_Sect";

export default function Make_Payment() {
  return (
    <section className='flex flex-col gap-2'>
      <section className='text-xs text-text flex flex-col gap-1'>
        <h2>
          Courses / How to make millions... / Add to Cart / Cart /{" "}
          <span className='underline text-layout-bg'>Make Payment</span>
        </h2>
      </section>
      <div className='grid nb:grid-cols-[30%_30%_36%] gap-2'>
        <section className=' col-span-2'>
          <div className="border rounded">
            <First_Sect />
            <Second_Sect />
          </div>

          <div className='mt-4'>
            <Related_Courses />
          </div>
        </section>

        <Card classNames="h-max">
          <Cart_Items_OnPayment />
        </Card>
      </div>
    </section>
  );
}
