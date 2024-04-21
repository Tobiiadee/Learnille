/** @format */

import Checkbox from "@/components/layout/Settings_Layout/Checkbox_Notification/Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const CardInfoSchema = z.object({
  cardName: z.string().min(1, { message: "Enter the name on your card..." }),
  cardNumber: z
    .string()
    .min(16, { message: "Enter the number on your card..." })
    .max(16, { message: "Enter the number on your card..." }),
  cardCVC: z
    .string()
    .min(3, { message: "Enter a valid CVC..." })
    .max(3, { message: "Enter a valid CVC..." }),
  cardDate: z.string().refine(
    (date) => {
      const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (dateRegex.test(date)) {
        return date;
      }
    },
    { message: "Enter the date on your card..." }
  ),
});

type CardInfoType = z.infer<typeof CardInfoSchema>;

export default function Second_Sect() {
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardInfoType>({
    resolver: zodResolver(CardInfoSchema),
  });

  const isCheckedHandler = (checked: boolean) => setIsChecked(checked);

  const cardFormSubmitHandler: SubmitHandler<CardInfoType> = (cardDetails) => {
    const userCardDetails = {
      ...cardDetails,
      isChecked,
    };
    console.log(userCardDetails);
  };

  return (
    <form
      onSubmit={handleSubmit(cardFormSubmitHandler)}
      className='bg-white rounded-b'>
      <main className='flex flex-col p-6 gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='card_name' className='text-sm font-semibold'>
            Name
          </label>
          <input
            type='text'
            {...register("cardName")}
            id='card_name'
            placeholder='Name on card'
            className={`border ${errors.cardName ? "border-[#e74c3c]" : ""} rounded-md px-4 py-2 outline-none text-sm placeholder:text-xs min-h-9`}
          />
          {errors.cardName && (
            <h2 className='text-xs text-[#e74c3c]'>
              {errors.cardName?.message}
            </h2>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='card_number' className='text-sm font-semibold'>
            Card Number
          </label>

          <div
            className={`flex items-center gap-4 border ${errors.cardNumber ? "border-[#e74c3c]" : ""} rounded-md px-4 py-2 min-h-9`}>
            <span className='border-r pr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke=' #2e86c1 '
                className='w-5 h-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                />
              </svg>
            </span>
            <input
              type='number'
              {...register("cardNumber")}
              id='card_number'
              placeholder='Label'
              className='placeholder:text-xs outline-none w-full text-sm'
            />
          </div>
          {errors.cardNumber && (
            <h2 className='text-xs text-[#e74c3c]'>
              {errors.cardNumber?.message}
            </h2>
          )}
        </div>

        <div className='flex flex-col tab:flex-row gap-4 items-center'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='card_date' className='text-sm font-semibold'>
              MM/YY
            </label>
            <input
              type='text'
              {...register("cardDate")}
              id='card_date'
              placeholder='MM/YY'
              className={`border ${errors.cardDate ? "border-[#e74c3c]" : ""} rounded-md px-4 py-2 outline-none text-sm placeholder:text-xs min-h-9`}
            />
            {errors.cardDate && (
              <h2 className='text-xs text-[#e74c3c]'>
                {errors.cardDate?.message}
              </h2>
            )}
          </div>

          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='card_cvc' className='text-sm font-semibold'>
              CVC
            </label>
            <input
              type='text'
              {...register("cardCVC")}
              id='card_cvc'
              placeholder='Security code'
              className={`border ${errors.cardCVC ? "border-[#e74c3c]" : ""} rounded-md px-4 py-2 outline-none text-sm placeholder:text-xs min-h-9`}
            />{" "}
            {errors.cardCVC && (
              <h2 className='text-xs text-[#e74c3c]'>
                {errors.cardCVC?.message}
              </h2>
            )}
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <button
            type='button'
            className='bg-[#f4f6f6] active:bg-[#eaeded] text-sm text-black font-semibold px-4 py-2 rounded transition duration-300'>
            Cancel
          </button>

          <button
            type='submit'
            className={`flex justify-between bg-[#edf1ff]  active:bg-[#ced5ee] transition duration-300`}>
            <span className='text-[8px] self-center tab:text-xs text-layout-bg font-semibold py-1 px-2 '>
              Save
            </span>
            <span className='text-white py-2 px-2  bg-layout-bg rounded-r-md '>
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
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </span>
          </button>
        </div>

        <div>
          <Checkbox
            onChange={isCheckedHandler}
            label='Remember this card, save it on my card list.'
          />
        </div>
      </main>
    </form>
  );
}
