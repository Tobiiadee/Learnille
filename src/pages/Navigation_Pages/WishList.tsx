/** @format */

import Consultation_Wishlist from "@/components/layout/Wishlist_Layout/Consultation_Wishlist/Consultation_Wishlist";
import Course_Wishlist from "@/components/layout/Wishlist_Layout/Course_Wishlist/Course_Wishlist";
import Header from "@/components/layout/Wishlist_Layout/Header";
import { useParams } from "react-router-dom";

export default function WishList() {
  const { wishlist_id } = useParams();

  let wishlistPage;

  switch (wishlist_id) {
    case "course_wishlist":
      wishlistPage = <Course_Wishlist />;
      break;

    default:
      wishlistPage = <Consultation_Wishlist />;
      break;
  }

  return (
    <main className='pr-2 tab:pr-6 nb:pr-32 pb-6'>
      <section>
        <Header />
      </section>

      <section className="mt-4">{wishlistPage}</section>
    </main>
  );
}
