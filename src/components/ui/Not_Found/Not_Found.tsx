/** @format */

import { Link } from "react-router-dom";

export default function Not_Found() {
  return (
    <div className='text-sm text-black w-screen h-screen flex flex-col gap-2 items-center justify-center'>
      <p>Opoos!</p>
      <h2 className='text-2xl font-bold'>Something went wrong</h2>
      <p>Sorry, there seems to be an error</p>
      <p className='w-[35%] text-center'>
        We're not sure what happened there, but the page you're look for got
        lost in the interweb!
      </p>

      <Link to="/learnille/"
        type='button'
        className='rounded-md bg-layout-bg active:bg-[#3456ed] text-white py-2 px-4 transition duration-300'>
        Return Home
      </Link>
    </div>
  );
}