/** @format */

import Button_ from "@/components/ui/Button_/Button_";
import Card from "@/components/ui/Card/Card";

export default function Account_Settings() {
  return (
    <Card>
      <h2 className='text-sm font-semibold'>Account Settings</h2>

      <form className='mt-4 flex gap-4 flex-col'>
        <div className='flex gap-4'>
          <main className='flex flex-col gap-4'>
            <section className='flex flex-col tab:flex-row gap-4 w-full'>
              <div className='flex flex-col gap-1 text-sm'>
                <h2 className='font-semibold'>Title</h2>
                <div className='border rounded-md text-text px-4 py-1 h-9 flex justify-center items-center'>
                  Mr/Mrs
                </div>
              </div>

              <div className='flex flex-col gap-1 w-8/12'>
                <label htmlFor='username' className='font-semibold text-sm'>
                  Username
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter your username'
                  className='text-text border px-2 py-1 h-9 w-[34rem] text-sm outline-none rounded-md'
                />
              </div>
            </section>

            <section className='flex flex-col tab:flex-row gap-4'>
              <div className='flex flex-col gap-1 w-6/12'>
                <label htmlFor='first_name' className='font-semibold text-sm'>
                  First Name
                </label>
                <input
                  type='text'
                  name='first name'
                  id='first_name'
                  placeholder='Enter last name'
                  className='text-text border px-2 py-1 h-9 text-sm rounded-md outline-none placeholder:font-normal'
                />
              </div>

              <div className='flex flex-col gap-1 w-6/12'>
                <label htmlFor='last_name' className='font-semibold text-sm'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='last name'
                  id='last_name'
                  placeholder='Enter last name'
                  className='text-text border px-2 py-1 h-9 text-sm rounded-md outline-none placeholder:font-normal'
                />
              </div>
            </section>

            <section className='flex flex-col tab:flex-row gap-4'>
              <div className='flex flex-col gap-1 w-6/12'>
                <label htmlFor='first_name' className='font-semibold text-sm'>
                  Phone Number
                </label>
                <div className='border rounded-md h-9 px-2 py-1 flex gap-2 items-center'>
                  <div className='flex items-center text-sm font-semibold gap-1 text-layout-bg'>
                    <p>+234</p>
                    <span>
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
                          d='m19.5 8.25-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type='number'
                    name='phone number'
                    id='phone_number'
                    placeholder='Your phone number...'
                    className='text-text text-sm w-full outline-none placeholder:font-normal'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-1 w-6/12'>
                <label htmlFor='email' className='font-semibold text-sm'>
                  Email Address
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Your email address'
                  className='text-text border px-2 py-1 h-9 text-sm rounded-md outline-none placeholder:font-normal'
                />
              </div>
            </section>
          </main>

          <section className='bg-[#edf1ff] -mt-8 rounded-md px-4 py-8 flex flex-col items-center gap-4'>
            <div className='shadow-md rounded-full w-20 h-20'>
              <img src='' alt='' />
            </div>
            <button
              type='button'
              className='text-xs text-white flex gap-2 items-center rounded px-3 py-2 bg-[#b0b0b0] active:bg-[#8e8e8e] transition duration-300'>
              {""}
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 text-white'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
                  />
                </svg>
              </span>
              <p>Change Photo</p>
            </button>
            <p className='text-xs text-text text-center'>
              Image size should be under 5MB and should have good lightening
            </p>
          </section>
        </div>

        <section className='flex flex-col gap-2'>
          <h2 className='text-sm text-black font-semibold'>
            Everybody has a story, what's yours?
          </h2>
          <textarea
            name='your story'
            id='your_story'
            placeholder='...enter it here'
            className='text-text p-2 outline-none text-sm border w-9/12 min-h-40 rounded-md'></textarea>
        </section>

        <Button_ text='Save Changes' className='self-end' />
      </form>
    </Card>
  );
}
