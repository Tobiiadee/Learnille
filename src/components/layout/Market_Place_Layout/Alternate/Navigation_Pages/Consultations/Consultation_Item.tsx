/** @format */

import Card from "@/components/ui/Card/Card";
import img from "../../../../../../assets/images/075826d0f7062c2b072efd481ac7837b.jpg";

type Course_Type = {
  category: string;
  title: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: number;
  author: string;
  time: number;
  session: number;
};

export default function Consultation_Item({
  category,
  title,
  price,
  discountedPrice,
  rating,
  reviews,
  author,
  session,
  time,
}: Course_Type) {
  return (
    <Card
      hover={true}
      classNames='w-full tab:w-max tab:h-[25rem] nb:w-[18rem] nb:h-[26rem] transition duration-300'>
      <main className='flex flex-col  gap-2 h-full w-full'>
        <div className='min-w-20 h-[14rem] tab:w-full tab:max-w-[20rem] nb:w-full nb:max-h-[10rem]  nb:min-h-[10rem] rounded-md shadow overflow-hidden flex items-center justify-center'>
          <img src={img} alt='' />
        </div>

        <div className='flex justify-between text-black'>
          <div className='bg-[#AED6F1] px-2 py-1 rounded-sm'>
            <h2 className='text-[10px] text-layout-bg font-semibold uppercase'>
              {category}
            </h2>
          </div>

          <div className='flex items-center gap-1'>
            <span className='text-xs font-semibold'>
              ${discountedPrice.toFixed(2)}
            </span>
            <span className='text-[10px] text-text line-through'>
              ${price.toFixed(2)}
            </span>
          </div>
        </div>

        <div className='w-full'>
          <section className='flex justify-between'>
            <h2 className='text-xs text-black capitalize font-semibold w-60 tab:w-44 nb:w-max'>
              {title}
            </h2>
          </section>

          <section className='flex items-center justify-between mt-2 border-b pb-2'>
            <div className='flex gap-[2px] items-center'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke=' #28b463 '
                  className='w-4 h-4'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </span>
              <h2 className='text-black text-xs font-semibold'>{time} hours</h2>
            </div>

            <div className='flex gap-[2p] items-center'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 text-layout-bg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
              </span>
              <h2 className='text-black text-xs font-semibold'>
                {session} sessions
              </h2>
            </div>

            <div className='flex gap-[2px] items-center'>
              <span>
                <svg
                  fill='#e67e22'
                  width='18px'
                  height='18px'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7,13v6a1,1,0,0,1-2,0V13a1,1,0,0,1,2,0Zm11,7a1,1,0,0,0,1-1V5a1,1,0,0,0-2,0V19A1,1,0,0,0,18,20Zm-6,0a1,1,0,0,0,1-1V9a1,1,0,0,0-2,0V19A1,1,0,0,0,12,20Z' />
                </svg>
              </span>
              <h2 className='text-black text-xs font-semibold'>Bi Weekly</h2>
            </div>
          </section>

          <section className='mt-2 flex justify-between'>
            <div className='flex items-center gap-1'>
              <div className='w-7 h-7 rounded-full shadow flex justify-center items-center overflow-hidden'>
                <img src='' alt='' />
              </div>
              <h2 className='text-xs text-black font-semibold capitalize'>{author}</h2>
            </div>

            <span className='flex gap-1 items-center text-xs text-text'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill=' #FFC300'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#FFC300'
                  className='w-5 h-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                  />
                </svg>
              </div>
              <p className='text-xs flex gap-[1px]'>
                <span className='font-semibold text-black'>
                  {rating.toFixed(1)}
                </span>
                <span>({reviews.toLocaleString()})</span>
              </p>
            </span>
          </section>

          <section className='mt-2 flex flex-col gap-3 w-full justify-between'>
            <button
              type='button'
              className='w-full text-sm text-white rounded bg-layout-bg active:bg-[#304fd9] py-2 nb:py-1 transition duration-300'>
              Book
            </button>
            <button
              type='button'
              className='w-full text-sm text-layout-bg rounded border border-layout-bg bg-transparent active:bg-[#eaeded] py-2 nb:py-1 transition duration-300'>
              See Details
            </button>
          </section>
        </div>
      </main>
    </Card>
  );
}
