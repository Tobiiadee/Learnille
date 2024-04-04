/** @format */

import Card from "@/components/ui/Card/Card";

export default function Similar_Consultation_Item() {
  return (
    <Card classNames='w-max'>
      <section>
        <main className='flex flex-col gap-4 w-full'>
          <div className='min-w-20 h-20 nb:min-w-28 nb:h-28 rounded-md shadow'>
            <img src='' alt='' />
          </div>

          <div className='w-full'>
            <section className='flex w-full justify-between'>
              <h2 className='text-sm font-semibold text-black'>
                Critiana Tipson
              </h2>
              <h2 className='text-xs text-text'>
                <span>7+</span> Experience
              </h2>
            </section>

            <section className='mt-1 flex w-full justify-between'>
              <div className='flex flex-col gap-2'>
                <span className='flex gap-2'>
                  <div>
                    <svg
                      width='20px'
                      height='20px'
                      viewBox='0 0 32 32'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g id='icomoon-ignore'></g>
                      <path
                        d='M19.732 7.203v-2.666h-7.464v2.666h-9.063v20.259h25.59v-20.259h-9.063zM13.334 5.604h5.331v1.599h-5.331v-1.599zM12.268 8.27h15.461v8.53h-7.997v-2.133h-7.464v2.133h-7.997v-8.53h7.997zM18.666 15.733v3.199h-5.331v-3.199h5.331zM4.271 26.396v-8.53h7.997v2.133h7.464v-2.133h7.997v8.53h-23.457z'
                        fill='#000000'></path>
                    </svg>
                  </div>
                  <h2 className='text-[10px] font-normal'>
                    Lead Marketing Manager at{" "}
                    <span className='uppercase font-semibold text-layout-bg'>
                      pencill.ng
                    </span>
                  </h2>
                </span>

                <span className='flex gap-2'>
                  <div>
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
                        d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
                      />
                    </svg>
                  </div>
                  <h2 className='text-[10px] font-normal text-black flex gap-1'>
                    <span className='font-semibold'>
                      17 Consultations completed
                    </span>
                    <span className='text-text'>(20 Reviews)</span>
                  </h2>
                </span>
                <span></span>
              </div>
            </section>
          </div>
        </main>

        <div className='mt-2 flex flex-col gap-2 text-xs'>
          <button
            type='button'
            className='px-4 py-2 font-semibold bg-layout-bg rounded-md text-white active:bg-[#2340c1] transition duration-300'>
            View Profile
          </button>
        </div>
      </section>
    </Card>
  );
}
