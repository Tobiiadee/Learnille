
type Checkbox_Type = {
    label?: string,
}

export default function Checkbox({label}: Checkbox_Type) {
  return (
    <div className=" text-sm flex gap-2 items-center">
      <input
          type='checkbox'
          id={label}
          title='title'
          className='relative rounded-sm peer appearance-none w-4 h-4 border-[1px] focus:bg-layout-bg  border-layout-bg accent-layout-bg '
        />
        <label htmlFor='course section' className="text-text peer-checked:text-black">{label}</label>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={3}
          stroke='#fff'
          className='w-4 h-3 hidden peer-checked:block absolute'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 12.75 6 6 9-13.5'
          />
        </svg>
    </div>
  )
}
