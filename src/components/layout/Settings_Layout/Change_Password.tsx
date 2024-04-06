/** @format */

import Card from "@/components/ui/Card/Card";
import { useState } from "react";
import Password from "./Password/Password";
import Button_ from "@/components/ui/Button_/Button_";

export default function Change_Password() {
  const [viewPassword, setViewPassword] = useState(false);
  const viewPasswordHandler = () => setViewPassword((prev) => !prev);

  return (
    <Card classNames='flex flex-col gap-4'>
      <h2 className='text-sm font-semibold'>Change Password</h2>
      <section className='flex flex-col gap-4'>
        <Password
          label='Current Password'
          viewPassword={viewPassword}
          viewPasswordHandler={viewPasswordHandler}
        />
        <Password
          label='New Password'
          viewPassword={viewPassword}
          viewPasswordHandler={viewPasswordHandler}
        />
        <Password
          label='Confirm Password'
          viewPassword={viewPassword}
          viewPasswordHandler={viewPasswordHandler}
        />
      </section>

      <Button_ text="Save Changes" className="self-start"/>
    </Card>
  );
}
