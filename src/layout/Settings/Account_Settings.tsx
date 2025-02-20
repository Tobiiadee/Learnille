/** @format */

import { ArrowD } from "@/assets/svg/HeaderSVG";
import Button_ from "@/components/ui/Button_/Button_";
import Card from "@/components/ui/Card/Card";
import React, { useState } from "react";

export default function Account_Settings() {
  //Choosing User Title
  const [toogleTitle, setToogle] = useState(false);
  const [title, setTitle] = useState<string>("Mr/Mrs");

  //Choosing User Country Code
  const [toogleCountryCode, setToogleCountryCode] = useState(false);
  const [countryCode, setCountryCode] = useState<string>("+234");

  //Profile image value
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    null
  );

  //User Title Handler
  //e.currentTarget.innerHTML
  const toogleTitleHandler = () => setToogle((prev) => !prev);

  const titleHandler = (e: React.SyntheticEvent) => {
    setTitle((e.target as HTMLLIElement).innerHTML);
    setToogle((prev) => !prev);
  };

  //User Country Code Handler
  const toogleCountryCodeHandler = () => setToogleCountryCode((prev) => !prev);

  const countryCodeHandler = (e: React.SyntheticEvent) => {
    setCountryCode((e.target as HTMLLIElement).innerHTML);
    setToogleCountryCode((prev) => !prev);
  };

  //Set Profile Image
  const imageUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the selected image to the result of FileReader
        setProfileImage(reader.result);
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }
  };


  return (
    <Card hover={false} classNames='w-full'>
      <h2 className='text-sm font-semibold'>Account Settings</h2>
      <form className='mt-4 flex gap-4 flex-col'>
        <div className='flex flex-col tab:flex-col gap-4'>
          <section className='bg-[#edf1ff] self-center tab:self-end tab:-mt-8 rounded-md w-52 px-2 py-4 tab:px-4 tab:py-8 flex flex-col items-center gap-4'>
            <div className='shadow-md rounded-full w-20 h-20 overflow-hidden flex items-center justify-center'>
              <img src={profileImage?.toString()} alt='profile image' />
            </div>
            <div>
              <label
                htmlFor='change photo'
                className='text-xs text-white flex gap-2 items-center rounded px-3 py-2 bg-[#b0b0b0] active:bg-[#8e8e8e] transition duration-300 cursor-pointer'>
                <span>
                  {" "}
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
                <span>Change Photo</span>
              </label>
              <input
                type='file'
                accept='image/*'
                onChange={imageUploadHandler}
                name='change photo'
                id='change photo'
                className='hidden'
              />
            </div>
            <p className='text-xs text-text text-center'>
              Image size should be under 5MB and should have good lightening
            </p>
          </section>

          <main className='flex flex-col gap-4 w-11/12 tab:w-8/12 nb:w-[72%] tab:-mt-[14rem]'>
            <section className='flex flex-col tab:flex-row gap-4 w-full'>
              <div className='relative flex flex-col gap-1 text-sm'>
                <h2 className='font-semibold'>Title</h2>
                <div
                  onClick={toogleTitleHandler}
                  className='border rounded-md text-text w-20  px-2 py-1 h-9 flex justify-center items-center cursor-pointer'>
                  {title}
                </div>

                {toogleTitle && (
                  <menu className='absolute left-0 top-16 w-[30%] tab:w-full bg-white rounded shadow-md flex flex-col overflow-hidden'>
                    <li
                      onClick={titleHandler}
                      className='w-full hover:bg-layout-bg cursor-pointer hover:text-white border-b px-4 py-1'>
                      Mr
                    </li>
                    <li
                      onClick={titleHandler}
                      className='w-full hover:bg-layout-bg cursor-pointer hover:text-white px-4 py-1'>
                      Mrs
                    </li>
                  </menu>
                )}
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='username' className='font-semibold text-sm'>
                  Username
                </label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter your username'
                  className='text-text border px-2 py-1 h-9 w-full placeholder:text-xs text-sm outline-none rounded-md'
                />
              </div>
            </section>

            <section className='flex flex-col tab:flex-row gap-4'>
              <div className='flex flex-col gap-1 w-full tab:w-6/12'>
                <label htmlFor='first_name' className='font-semibold text-sm'>
                  First Name
                </label>
                <input
                  type='text'
                  name='first name'
                  id='first_name'
                  placeholder='Enter last name'
                  className='text-text border px-2 py-1 h-9 text-sm rounded-md outline-none placeholder:text-xs placeholder:font-normal'
                />
              </div>

              <div className='flex flex-col gap-1 w-full tab:w-6/12'>
                <label htmlFor='last_name' className='font-semibold text-sm'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='last name'
                  id='last_name'
                  placeholder='Enter last name'
                  className='text-text border px-2 py-1 h-9 text-sm rounded-md outline-none placeholder:text-xs placeholder:font-normal'
                />
              </div>
            </section>

            <section className='flex flex-col tab:flex-row gap-4'>
              <div className='flex flex-col gap-1 w-full tab:w-6/12 cursor-pointer'>
                <label htmlFor='first_name' className='font-semibold text-sm'>
                  Phone Number
                </label>
                <div className='relative border rounded-md h-9 px-2 py-1 flex gap-2 items-center'>
                  <div
                    onClick={toogleCountryCodeHandler}
                    className='flex items-center text-sm font-semibold gap-1 text-layout-bg'>
                    <p>{countryCode}</p>
                    <span>
                      <ArrowD onRotate={toogleCountryCode} />
                    </span>
                    {toogleCountryCode && (
                      <menu className='absolute left-0 top-10 w-[30%] bg-white text-sm text-black font-normal rounded shadow-md flex flex-col overflow-hidden'>
                        <li
                          onClick={countryCodeHandler}
                          className='w-full hover:bg-layout-bg cursor-pointer hover:text-white border-b px-4 py-1'>
                          +234
                        </li>
                        <li
                          onClick={countryCodeHandler}
                          className='w-full hover:bg-layout-bg cursor-pointer hover:text-white px-4 py-1'>
                          +236
                        </li>
                        <li
                          onClick={countryCodeHandler}
                          className='w-full hover:bg-layout-bg cursor-pointer hover:text-white px-4 py-1'>
                          +99
                        </li>
                        <li
                          onClick={countryCodeHandler}
                          className='w-full hover:bg-layout-bg cursor-pointer hover:text-white px-4 py-1'>
                          +314
                        </li>
                      </menu>
                    )}
                  </div>
                  <input
                    type='number'
                    name='phone number'
                    id='phone_number'
                    min={0}
                    placeholder='Your phone number...'
                    className='text-text text-sm w-full outline-none placeholder:text-xs placeholder:font-normal'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-1 w-full tab:w-6/12'>
                <label htmlFor='email' className='font-semibold text-sm'>
                  Email Address
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Your email address'
                  className='text-text border px-2 py-1 h-9 text-sm rounded-md outline-none placeholder:text-xs placeholder:font-normal'
                />
              </div>
            </section>
          </main>
        </div>

        <section className='flex flex-col gap-2 w-full tab:w-9/12 nb:w-[80%] pr-8 tab:pr-16'>
          <h2 className='text-sm text-black font-semibold'>
            Everybody has a story, what's yours?
          </h2>
          <textarea
            name='your story'
            id='your_story'
            placeholder='...enter it here'
            className='text-text p-2 outline-none text-sm border w-full placeholder:text-xs min-h-40 rounded-md'></textarea>
        </section>

        <Button_ text='Save Changes' className='self-end' />
      </form>
    </Card>
  );
}
