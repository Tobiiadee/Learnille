/** @format */

import Card from "@/components/ui/Card/Card";
import img from "../../../../assets/mk-s-Mm5AlahnRcE-unsplash.jpg";
import UpcomingEvents from "@/layout/Home/Home_Aside/Upcoming_Events/Upcoming_Events";
import Progress from "@/components/ui/Cosultation_Progress/Progress";
// import Conversation from "@/layout/Chat/Conversation/Conversation";
import Recieve_Chat from "@/layout/Chat/Conversation/Chat_Sender_Reciever/Recieve_Chat";
import Send_Chat from "@/layout/Chat/Conversation/Chat_Sender_Reciever/Send_Chat";

export default function Consultation_Metting() {
  return (
    <section className='px-1 tab:px-0 mr-2'>
      <span className='text-xs text-text flex gap-1'>
        <p>Consultation / Active Consultation /</p>
        <span className='font-semibold text-layout-bg underline'>
          Live Call
        </span>
      </span>

      <main className='grid grid-cols-3 gap-4'>
        <section className='col-span-3 tab:col-span-2'>
          <div className=''>
            <h2 className='font-semibold text-lg text-black capitalize'>
              UI/UX Design Consultation meeting
            </h2>
            <div className='relative -z-10 mt-1 w-full h-max nb:h-[26rem] shadow rounded-lg overflow-hidden'>
              <img src={img} alt='' />

              <div className='absolute top-6 right-5 rounded-md w-28 tab:w-36 bg-[#ccccf1] h-28 tab:h-36 p-3 shadow flex flex-col justify-between'>
                <h2 className='font-semibold text-sm text-black'>You</h2>
                <div className='flex justify-center gap-2 w-full'>
                  <div className='w-7 h-7 shadow rounded bg-white flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='w-4 h-4'>
                      <path
                        fillRule='evenodd'
                        d='M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>

                  <div className='w-7 h-7 shadow rounded bg-white flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='w-4 h-4'>
                      <path d='M3.25 4A2.25 2.25 0 0 0 1 6.25v7.5A2.25 2.25 0 0 0 3.25 16h7.5A2.25 2.25 0 0 0 13 13.75v-7.5A2.25 2.25 0 0 0 10.75 4h-7.5ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75Z' />
                    </svg>
                  </div>

                  <div className='w-7 h-7 shadow rounded bg-white flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='w-4 h-4'>
                      <path d='M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z' />
                      <path d='M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z' />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='absolute bottom-10 w-full flex justify-center gap-8'>
                <div className='w-7 h-7 shadow rounded bg-white flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-4 h-4'>
                    <path
                      fillRule='evenodd'
                      d='M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>

                <div className='w-7 h-7 shadow rounded bg-white flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-4 h-4'>
                    <path d='M3.25 4A2.25 2.25 0 0 0 1 6.25v7.5A2.25 2.25 0 0 0 3.25 16h7.5A2.25 2.25 0 0 0 13 13.75v-7.5A2.25 2.25 0 0 0 10.75 4h-7.5ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75Z' />
                  </svg>
                </div>

                <div className='w-7 h-7 shadow rounded bg-white flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-4 h-4'>
                    <path d='M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z' />
                    <path d='M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z' />
                  </svg>
                </div>

                <div className='w-7 h-7 shadow rounded bg-white flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-4 h-4'>
                    <path
                      fillRule='evenodd'
                      d='M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z'
                      clipRule='evenodd'
                    />
                    <path
                      fillRule='evenodd'
                      d='M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <Card classNames='mt-4 col-span-3 tab:col-span-2 flex flex-col gap-2'>
            <h2 className='text-sm font-semibold'>Meeting Note</h2>
            <p className='text-xs text-black'>
              Learn from industry experts who have hands-on experience in design
              and development. Learn from industry experts who have hands-on
              experience in design and development. Learn from industry experts
              who have hands-on experience in design and development. Learn from
              industry experts who have hands-on experience in design and
              development. Learn from industry experts who have hands-on
              experience in design and development.
            </p>
          </Card>
        </section>

        <section className='flex flex-col col-span-3 tab:col-span-1 gap-4'>
          <Card>
            <h2 className='text-sm font-semibold'>Consultation Details</h2>
            <div className='flex justify-between items-center text-xs text-layout-bg font-bold mt-2'>
              <span className='flex gap-1'>
                <h2>2/5</h2>
                <h2>Session Completed</h2>
              </span>

              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='w-4 h-4'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
                  />
                </svg>
              </span>
            </div>

            <div className='flex gap-[0.2rem] mt-2'>
              <span className='w-10 h-1 bg-layout-bg'></span>
              <span className='w-10 h-1 bg-layout-bg'></span>
              <span className='w-10 h-1 bg-[#AED6F1]'></span>
              <span className='w-10 h-1 bg-[#AED6F1]'></span>
              <span className='w-10 h-1 bg-[#AED6F1]'></span>
            </div>
          </Card>

          <main className='flex justify-between items-center px-4'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-xs text-black font-bold'>Ongoing</h2>
              <span className='flex gap-1 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 text-text'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>

                <h2 className='text-text text-xs'>2 hours</h2>
              </span>
            </div>

            <div>
              <Progress />
            </div>
          </main>

          <Card>
            <UpcomingEvents />
            <UpcomingEvents />
            <UpcomingEvents />
          </Card>

          <Card>
            <section>
              <h2 className='text-sm font-semibold text-black border-b pb-2'>
                Conversations (<span>40</span>)
              </h2>
            </section>
            <div>
              <Recieve_Chat />
              <Send_Chat />
            </div>
          </Card>
        </section>
      </main>
    </section>
  );
}
