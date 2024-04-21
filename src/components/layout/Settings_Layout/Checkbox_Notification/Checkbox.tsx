/** @format */

type Checkbox_Type = {
  label?: string;
  onChange: (checked: boolean) => void;
};

export default function Checkbox({ label, onChange }: Checkbox_Type) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className='text-xs tab:text-sm flex gap-2 items-center'>
      <input
        type='checkbox'
        onChange={handleChange}
        id={label}
        title='title'
        className='relative rounded-sm peer appearance-none w-4 h-4 border-[1px] checked:bg-layout-bg  border-layout-bg accent-layout-bg'
      />
      <label
        htmlFor={label}
        className='-mt-1 tab:mt-0 text-text text-sm peer-checked:text-black cursor-pointer'>
        {label}
      </label>
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
  );
}
