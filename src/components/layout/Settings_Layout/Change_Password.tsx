/** @format */

import Card from "@/components/ui/Card/Card";
import { useState } from "react";
import Password from "./Password/Password";
import Button_ from "@/components/ui/Button_/Button_";

export default function Change_Password() {
  const [viewCurrentPassword, setViewCurrentPassword] = useState(false);
  const [viewNewPassword, setViewNewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);

  const viewCurrentPasswordHandler = () => setViewCurrentPassword((prev) => !prev);
  const viewNewPasswordHandler = () => setViewNewPassword((prev) => !prev);
  const viewConfirmPasswordHandler = () => setViewConfirmPassword((prev) => !prev);

  return (
    <Card classNames=''>
      <form action='' className='flex flex-col gap-4'>
        <h2 className='text-sm font-semibold'>Change Password</h2>
        <section className='flex flex-col gap-4'>
          <Password
            label='Current Password'
            viewPassword={viewCurrentPassword}
            viewPasswordHandler={viewCurrentPasswordHandler}
          />
          <Password
            label='New Password'
            viewPassword={viewNewPassword}
            viewPasswordHandler={viewNewPasswordHandler}
          />
          <Password
            label='Confirm Password'
            viewPassword={viewConfirmPassword}
            viewPasswordHandler={viewConfirmPasswordHandler}
          />
        </section>

        <Button_ text='Save Changes' className='self-start' />
      </form>
    </Card>
  );
}
