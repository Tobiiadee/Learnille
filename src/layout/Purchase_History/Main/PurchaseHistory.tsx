/** @format */

import Purchase_History_Item from "../Purchase_History_Item";

export default function PurchaseHistory() {
  return (
    <main className="pb-8">
      <section className="text-md text-black font-semibold">
        <h2>Purchase History</h2>
      </section>

      <section className="flex flex-col gap-2 mt-6 pr-2 tab:pr-6 nb:pr-32">
        <Purchase_History_Item/>
        <Purchase_History_Item/>
        <Purchase_History_Item/>
      </section>
    </main>
  );
}
