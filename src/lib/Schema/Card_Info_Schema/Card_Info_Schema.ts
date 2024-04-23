/** @format */

import { z } from "zod";

export const CardInfoSchema = z.object({
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
