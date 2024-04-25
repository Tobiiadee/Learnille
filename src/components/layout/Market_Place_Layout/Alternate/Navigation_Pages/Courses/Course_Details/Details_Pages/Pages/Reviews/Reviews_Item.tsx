/** @format */

import Rating from "../../../../../../../Old/Nav_pages/Reviews/Rating";

export default function Reviews_Item() {
  return (
    <main className='flex gap-4 justify-between w-full border-b pb-4 mt-2'>
      <section>
        <div className='w-8 h-8 flex items-center rounded-full shadow'>
          <img src='' alt='' />
        </div>
      </section>

      <section className='flex flex-col gap-1'>
        <div className='text-xs flex gap-1 items-center'>
          <h2 className='font-semibold'>Guy Hawkins</h2>
          <span>
            <svg
              width='15px'
              height='15px'
              viewBox='0 0 24 24'
              fill='none'
              className='text-text'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='12' cy='12' r='2' fill='#000000' />
            </svg>
          </span>
          <span className='text-text'>1 week ago</span>
        </div>

        <div className='flex gap-[0.5px] items-center'>
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>

        <div className='text-xs text-black'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            architecto et perferendis iste eum accusamus nobis totam nemo
            officia quisquam accusantium sunt corporis iusto nesciunt nam
            voluptatem, possimus nihil excepturi sed magni non esse, quibusdam
            corrupti! Consectetur tenetur laborum quis reiciendis nemo velit
            soluta, nobis labore eligendi magnam nesciunt quo. Ut rem, laborum
            dolore esse autem nam sed impedit? Dignissimos quia in vel
            temporibus illo accusantium cumque, quo natus quos.
          </p>
        </div>
      </section>
    </main>
  );
}
