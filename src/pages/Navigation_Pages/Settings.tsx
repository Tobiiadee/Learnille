/** @format */

import Account_Settings from "@/components/layout/Settings_Layout/Account_Settings";
import Change_Password from "@/components/layout/Settings_Layout/Change_Password";
import Notification from "@/components/layout/Settings_Layout/Notification";
import Profile_Info from "@/components/layout/Settings_Layout/Profile_Info";

export default function Settings() {
  return (
    <section className='nb:pr-32 flex flex-col gap-4 pb-8'>
      <Profile_Info />
      <Account_Settings />
      <section className="grid grid-cols-2 gap-4">
        <Change_Password />
        <Notification />
      </section>
    </section>
  );
}
