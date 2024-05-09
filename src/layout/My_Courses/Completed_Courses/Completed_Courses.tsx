// import Empty_State from "@/components/ui/Empty_State/Empty_State";
import Completed_Courses_Item from "./Completed_Courses_Item";

export default function Completed_Courses() {
  return (
    <>
    {/* <Empty_State text="You have not started any course"/> */}
    <section className="mt-4 pl-4 tab:pl-0 grid tab:grid-cols-2 nb:grid-cols-3 gap-2">
      <Completed_Courses_Item/>
      <Completed_Courses_Item/>
      <Completed_Courses_Item/>
      <Completed_Courses_Item/>
      <Completed_Courses_Item/>
      <Completed_Courses_Item/>
    </section>
    </>
  )
}
