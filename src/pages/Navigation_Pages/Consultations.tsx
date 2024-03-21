/** @format */

import Consultation_Home from "@/components/layout/Consultant_Layout/Consultant_Pages/Consultation_Home";
import Consultation_Tips_List from "@/components/layout/Consultant_Layout/Consultant_Pages/Tips/Consultation_Tips_List";
import { NavLink, useParams } from "react-router-dom";
import Consultation_Meeting from "@/components/layout/Consultant_Layout/Consultant_Pages/Consultation_Meeting/Consultation_Metting";

export default function Consultations() {
  const { consultation_id } = useParams();

  let consultationPage;
  switch (consultation_id) {
    case "consultation_meeting":
      consultationPage = <Consultation_Meeting />;
      break;

    case "consultation_tips":
      consultationPage = <Consultation_Tips_List />;
      break;

    default:
      consultationPage = <Consultation_Home />;
      break;
  }

  return (
    <main className='pb-6 flex flex-col'>
      <main className=''>{consultationPage}</main>

      <main className='mt-8 flex gap-1 items-center justify-center tab:w-8/12'>
        <NavLink to='/learnille/consultation/completed_consultations'>
          {""}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 hover:border rounded'>
              <path
                fillRule='evenodd'
                d='M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </NavLink>
        <div className='w-4 h-4 rounded-full shadow text-xs flex items-center justify-center bg-layout-bg text-white'>
          1
        </div>
        <NavLink to='/learnille/consultation/consultation_meeting'>
          {""}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 hover:border rounded'>
              <path
                fillRule='evenodd'
                d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </NavLink>
      </main>
    </main>
  );
}
