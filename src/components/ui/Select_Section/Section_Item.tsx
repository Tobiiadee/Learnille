/** @format */

export default function Section_Item({
  clickBg,
  onClickSection,
  sectNumber
}: {
  clickBg: boolean;
  onClickSection: () => void;
  sectNumber: number;
}) {
  return (
    <div
      onClick={onClickSection}
      className={`flex justify-between items-center text-xs cursor-pointer px-4 py-2 transition duration-200  ${clickBg ? "bg-[#d6eaf8] border border-layout-bg scale-105" : ""}`}>
      <h2 className='font-semibold text-sm'>Section {sectNumber}</h2>
      <section className='flex justify-between items-center w-4/6'>
        <span className='flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-3 h-3 text-layout-bg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776'
            />
          </svg>
          <h2>{4} sub sections</h2>
        </span>
        <span className='flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-3 h-3 text-layout-bg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
            />
          </svg>
          <h2>4 Lectures</h2>
        </span>
        <span className='flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-3 h-3 text-layout-bg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
          <h2>19h 39m</h2>
        </span>
      </section>
    </div>
  );
}
