/** @format */

import Account_Settings from "../Account_Settings";
import Change_Password from "../Change_Password";
import Notification from "../Notification";
import Profile_Info from "../Profile_Info";

export default function Settings() {
  return (
    <section className='nb:pr-32 flex flex-col items-center tab:items-stretch  gap-4 pb-8'>
      <Profile_Info />
      <Account_Settings />
      <section className="grid tab:grid-cols-2 gap-4">
        <Change_Password />
        <Notification />
      </section>
    </section>
  );
}
