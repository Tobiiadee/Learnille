/** @format */

type SendType = {
  text?: string;
};

export default function Send_Chat({ text }: SendType) {
  return (
    <section className="ml-auto flex flex-col gap-2">
      <div className='self-end text-xs font-semibold text-black flex items-center gap-2'>
        <h2 className='capitalize'>John Doe</h2>
        <span className='w-5 h-5 rounded-full shadow overflow-hidden flex items-center justify-center'>
          <img src="" alt="" />
        </span>
      </div>

      <main className='w-max max-w-72 tab:max-w-96 h-max bg-layout-bg rounded-md p-2'>
        <p className='text-xs text-white'>
          {text}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          fugiat omnis alias error nemo cupiditate.
        </p>
      </main>
    </section>
  );
}
