/** @format */

export default function Month({
  className,
  show,
}: {
  className?: string;
  show: (show: boolean) => void;
}) {
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const months = monthsArray.map((month) => (
    <div
      key={month}
      onClick={() => show(false)}
      className='text-sm text-black hover:bg-layout-bg hover:text-white py-2 tab:py-1 px-12 tab:px-8 cursor-pointer'>
      {month}
    </div>
  ));

  return (
    <div
      className={`flex flex-col h-[8rem] tab:h-[5.5rem] bg-white rounded shadow-md overflow-y-scroll ${className}`}>
      {months}
    </div>
  );
}
