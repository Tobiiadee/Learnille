/** @format */

export default function Course_For(props: { text: string }) {
  return (
    <div className='text-black text-sm font-normal flex gap-4 items-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-4 text-layout-bg mt-1'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
        />
      </svg>

      <p>{props.text}</p>
    </div>
  );
}
