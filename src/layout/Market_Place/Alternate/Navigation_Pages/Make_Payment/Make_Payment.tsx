/** @format */

import Card from "@/components/ui/Card/Card";
import Cart_Items_OnPayment from "../Cart/Cart_Item_OnPayment/Cart_Items_OnPayment";
import Related_Courses from "../Courses/Course_Details/Related_Course/Related_Courses";
import First_Sect from "./First_Sect";
import Second_Sect from "./Second_Sect";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store/Main/Store";
import { textShortener } from "@/lib/utils/Format/utils_";

export default function Make_Payment() {
  const title = useSelector(
    (state: RootStateType) => state.course_details.course.title
  );

  return (
    <section className='flex flex-col gap-2'>
      <section className='text-xs text-text flex flex-col gap-1'>
        <h2>
          Courses / {textShortener(title)} / Add to Cart / Cart /{" "}
          <span className='underline text-layout-bg'>Make Payment</span>
        </h2>
      </section>
      <div className='grid nb:grid-cols-[30%_30%_36%] gap-2'>
        <section className=' col-span-2'>
          <div className='border rounded'>
            <First_Sect />
            <Second_Sect />
          </div>

          <div className='mt-4'>
            <Related_Courses />
          </div>
        </section>

        <Card classNames='h-max col-span-3 tab:col-span-1'>
          <Cart_Items_OnPayment />
        </Card>
      </div>
    </section>
  );
}
