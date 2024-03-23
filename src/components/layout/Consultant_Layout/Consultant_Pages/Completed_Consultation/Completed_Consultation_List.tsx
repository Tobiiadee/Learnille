/** @format */

import Card from "@/components/ui/Card/Card";

// type Completed_ConsultationType = {
//   consultationTitle?: string,
//   consultationPrice?: number,
//   NoOfHours?: string,
//   NoOfSessions?: string,
//   ConsultantName?: string,
//   rating?: number,
// }

export default function Completed_Consultation_List() {
  return (
    <Card>
      <section className='bg-white px-1'>
        <main className='flex gap-4 w-full'>
          <div className='min-w-20 h-20 nb:min-w-28 nb:h-28 rounded-md shadow'>
            <img src='' alt='' />
          </div>

          <div className='w-full'>
            <section className='flex flex-col tab:flex-row justify-between'>
              <h2 className='text-xs text-text capitalize font-semibold w-60 tab:w-52'>
                How to make your first millions as a frontent developer
              </h2>

              <div className='flex gap-1 items-center tab:mr-32'>
                <h2 className='text-sm tab:text-lg font-semibold text-layout-bg'>
                  $32.00
                </h2>
                <h2 className='text-xs text-text font-normal'>$39.00</h2>
              </div>
            </section>

            <section className='mt-2  flex gap-2 tab:gap-5'>
              <div className='flex items-center gap-1'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.8}
                    stroke='currentColor'
                    className='w-4 h-4 mt-1 text-[#289a45]'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                </span>
                <p className='text-xs text-text'>4 hours</p>
              </div>

              <div className='flex items-center gap-1'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5 text-[#383fcb]'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                    />
                  </svg>
                </span>
                <p className='text-xs text-text'>4 sessions</p>
              </div>

              <div className='flex items-center gap-1'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#ff7840'
                    viewBox='0 0 24 24'
                    strokeWidth={1.3}
                    stroke='#ff7840'
                    className='w-4 h-4 text-[#ff7840]'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
                    />
                  </svg>
                </span>
                <p className='text-xs text-text'>Bi weekly</p>
              </div>
            </section>

            <section className='mt-1 flex flex-col gap-2 tab:gap-0 tab:flex-row w-full tab:justify-between tab:items-center'>
              <div className='flex gap-2 tab:gap-2  items-center w-full tab:w-3/6'>
                <div className='text-xs text-text flex gap-2 items-center'>
                  <span className='w-6 h-6 rounded-full shadow'>
                    <img src='' alt='' />
                  </span>

                  <p>Paul Gilbert</p>
                </div>

                <span className='flex gap-1 items-center text-xs text-text'>
                  <span>
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
                  </span>
                  <p className=''>
                    5.0 <span>(3,500)</span>
                  </p>
                </span>
              </div>

              <div className='flex gap-2 tab:gap-4 text-xs tab:w-3/6 '>
                <button
                  type='button'
                  className='px-4 py-1 tab:px-6 tab:py-1 rounded-sm bg-[#AED6F1] text-layout-bg font-semibold active:bg-[#9ebacc] transition duration-300'>
                  Repurchase
                </button>
                <button
                  type='button'
                  className='px-4 py-1 tab:px-4 tab:py-1 rounded-sm border text-text font-semibold active:bg-[#eee] transition duration-300'>
                  Send Message
                </button>
              </div>
            </section>
          </div>
        </main>
      </section>
    </Card>
  );
}
