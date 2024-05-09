/** @format */

// import Empty_State from "@/components/ui/Empty_State/Empty_State";
import Ongoing_Courses_Item from "./Ongoing_Courses_Item";

export default function Ongoing_Courses() {
  return (
    <> 
    {/* <Empty_State text="You have no active course session"/> */}
      <section className='mt-4 pl-4 tab:pl-0 grid tab:grid-cols-2 nb:grid-cols-3 gap-2'>
        <Ongoing_Courses_Item />
        <Ongoing_Courses_Item />
        <Ongoing_Courses_Item />
        <Ongoing_Courses_Item />
        <Ongoing_Courses_Item />
        <Ongoing_Courses_Item />
      </section>
    </>
  );
}
