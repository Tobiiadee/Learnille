import Consultations from "../Consultations/Consultations";

export default function Avaliable_Consultations() {
  return (
    <main className="grid place-items-center tab:grid-cols-3 gap-4 overflow-hidden w-full pb-8">
      <Consultations />
      <Consultations />
      <Consultations />
      <Consultations />
      <Consultations />
    </main>
  )
}
