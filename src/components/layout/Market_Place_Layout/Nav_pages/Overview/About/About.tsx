
export default function About() {
  return (
    <section className='flex flex-col gap-2 bg-white p-4 rounded-b-md'>
        <h2 className='text-sm font-semibold text-black'>About</h2>
        <p className='text-xs text-black'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, laborum
          quod esse perspiciatis, optio quibusdam at recusandae doloremque,
          voluptate mollitia facilis nulla saepe autem dolorum! Error rem
          eveniet dolorem sint excepturi doloribus voluptas accusamus hic
          consectetur obcaecati? Ullam, nulla, atque, minima perspiciatis quasi
          molestias quia fuga fugiat voluptatibus nesciunt consequatur!
        </p>
        <div>
          <button
            type='button'
            className='font-semibold text-xs text-black underline'>
            Show More
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button type='button' className="p-1 bg-[#edf1ff] active:bg-[#dbdfec] rounded transition duration-300">
            {""}
            <svg
              width='25px'
              height='25px'
              viewBox='0 0 48 48'
              fill='#4364f7'
              id='Layer_2'
              data-name='Layer 2'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                className='bg-layout-bg'
                d='M38.74,16.55v1c0,10.07-7.64,21.61-21.62,21.61A21.14,21.14,0,0,1,5.5,35.71a12.22,12.22,0,0,0,1.81.11,15.25,15.25,0,0,0,9.44-3.24,7.56,7.56,0,0,1-7.1-5.29,6.9,6.9,0,0,0,1.44.15,7.53,7.53,0,0,0,2-.27A7.57,7.57,0,0,1,7,19.72v-.1a7.42,7.42,0,0,0,3.44.94A7.54,7.54,0,0,1,8.05,10.5a21.58,21.58,0,0,0,15.68,7.94,6.38,6.38,0,0,1-.21-1.74,7.55,7.55,0,0,1,13.17-5.31,15.59,15.59,0,0,0,4.83-1.85,7.65,7.65,0,0,1-3.39,4.27,15.87,15.87,0,0,0,4.37-1.26,15.56,15.56,0,0,1-3.76,4Z'
              />
            </svg>
          </button>
          <button type='button' className="p-1 bg-[#edf1ff] active:bg-[#dbdfec] rounded transition duration-300">
            {""}
            <svg
              width='25px'
              height='25px'
              viewBox='0 0 24 24'
              fill='#4364f7'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z'
                stroke='none'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button type='button' className="p-1 bg-[#edf1ff] active:bg-[#dbdfec] rounded transition duration-300">
            {""}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#4364f7'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#fff'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
              />
            </svg>
          </button>
          <button type='button' className="p-1 bg-[#edf1ff] active:bg-[#dbdfec] rounded transition duration-300">
            {""}
            <svg
              fill='#4364f7'
              width='25px'
              height='25px'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z' />
            </svg>
          </button>
          <button type='button' className="bg-layout-bg px-2 py-1 active:bg-[#3a56d3] rounded-md text-white text-sm font-semibold transition duration-300">Send Message</button>
        </div>
      </section>
  )
}
