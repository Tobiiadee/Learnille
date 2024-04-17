/** @format */

import Card from "@/components/ui/Card/Card";

export default function Instructor() {
  return (
    <Card classNames='flex gap-4'>
      <section>
        <div className='w-16 h-16 rounded-full shadow-md'>
          <img src='' alt='' />
        </div>
      </section>

      <main className='flex flex-col gap-4'>
        <div className='text-black text-sm'>
          <h2 className='capitalize font-semibold'>Omotoyosi Aduke James</h2>
          <p className='flex items-center gap-1 text-xs text-text'>
            {" "}
            <span>Entreprenure and Designer</span>
            <span className="text-black">|</span>
            <span>Founder of ShiftRide</span>
          </p>
        </div>

        <section className='flex gap-4 items-center'>
          <div className='flex gap-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#eb984e'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#eb984e'
              className='w-4 h-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
              />
            </svg>

            <h2 className='flex gap-1 items-center text-xs text-black'>
              <span className='font-semibold'>4.6</span>
              <span className='text-xs text-text'>Course Rating</span>
            </h2>
          </div>

          <div className='flex gap-1 items-center'>
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
                d='M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
              />
            </svg>

            <h2 className='flex gap-1 items-center text-xs text-black'>
              <span className='font-semibold'>53</span>
              <span className='text-xs text-text'>Active students</span>
            </h2>
          </div>

          <div className='flex gap-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#eb984e'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#ffffff'
              className='w-4 h-4'>
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

            <h2 className='flex gap-1 items-center text-xs text-black'>
              <span className='font-semibold'>04</span>
              <span className='text-xs text-text'>Courses created</span>
            </h2>
          </div>
        </section>

        <section className=''>
          <p className='text-black text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloribus, veritatis assumenda cupiditate quaerat hic fugiat
            explicabo, placeat asperiores exercitationem laborum reiciendis
            sunt, quibusdam commodi qui blanditiis dolorem quae sed natus
            doloremque ipsa? Id obcaecati, praesentium sint ipsam incidunt
            accusamus at maxime iusto laudantium cumque quaerat officia
            suscipit? Fuga, dolorem.
          </p>
          <button
            type='button'
            className='underline text-xs text-black font-semibold'>
            view more
          </button>
        </section>
      </main>
    </Card>
  );
}
