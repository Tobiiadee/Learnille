/** @format */

export default function Empty_State({text}: {text: string}) {
  return (
    <section className='w-full h-96 flex items-center justify-center text-lg text-black'>
      <p>{text}!</p>
    </section>
  );
}
