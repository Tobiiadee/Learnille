/** @format */

type Button_Type = {
  onClick?: () => void;
  className?: string;
  text?: string;
};

export default function Button_({ onClick, className, text }: Button_Type) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex justify-between bg-[#edf1ff]  active:bg-[#ced5ee] transition duration-300 ${className}`}>
      <span className='text-[8px] self-center tab:text-xs text-layout-bg font-semibold py-1 px-2 '>
        {text}
      </span>
      <span className='text-white py-2 px-2  bg-layout-bg rounded-r-md '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
          />
        </svg>
      </span>
    </button>
  );
}
