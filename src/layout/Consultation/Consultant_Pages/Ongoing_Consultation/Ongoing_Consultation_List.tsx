// import Empty_State from "@/components/ui/Empty_State/Empty_State"
import Ongoing_Consultation from "./Ongoing_Consultation"

export default function Ongoing_Consultation_List() {
  return (
    <main className="">
      {/* <Empty_State text="You have no active consultation"/> */}
      <section className="flex flex-col gap-2 tab:gap-2 mt-4 mb-4">
        <Ongoing_Consultation/>
        <Ongoing_Consultation/>
        <Ongoing_Consultation/>
      </section>
    </main>
  )
}
