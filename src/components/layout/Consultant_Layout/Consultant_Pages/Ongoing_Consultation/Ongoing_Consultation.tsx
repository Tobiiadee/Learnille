import Consultation_List from "./Consultation_List";

export default function Ongoing_Consultation() {
  return (
    <main className="">
      <section className="flex flex-col gap-4 mt-4 mb-4">
        <Consultation_List />
        <Consultation_List />
        <Consultation_List />
      </section>
    </main>
  )
}
