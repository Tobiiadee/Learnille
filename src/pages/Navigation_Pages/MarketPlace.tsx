/** @format */

import Header from "@/components/layout/Market_Place_Layout/Header/Header";
import Home from "@/components/layout/Market_Place_Layout/Home/Home";
import Navigation from "@/components/layout/Market_Place_Layout/Navigation/Navigation";

export default function MarketPlace() {
  return (
    <main className='nb:pr-60 flex flex-col gap-4'>
      <Header />
      <Navigation />
      <section>
        <Home />
      </section>
    </main>
  );
}
