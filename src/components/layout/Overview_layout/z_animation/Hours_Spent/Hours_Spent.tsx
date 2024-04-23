/** @format */

import { useState } from "react";
import Card from "../../../../ui/Card/Card";
import Study_Chart from "./Chart/Study/Study_Chart";
import Quiz_Chart from "./Chart/Quiz/Quiz_Chart";

export default function HoursSpent() {
  const [study, setStudy] = useState(true);
  const [quiz, setquiz] = useState(false);

  const studyHandler = () => {
    setStudy((prev) => !prev);
    setquiz(false);
  };
  const quizHandler = () => {
    setquiz((prev) => !prev);
    setStudy(false);
  };

  return (
    <Card>
      <main className='flex flex-col gap-4 w-72 tab:w-full h-52'>
        <section className='text-xs flex gap-8 font-normal '>
          <button
            type='button'
            disabled={study}
            onClick={studyHandler}
            className='flex gap-2 cursor-pointer'>
            <span className='w-4 h-4 rounded bg-layout-bg flex items-center justify-center'>
              {study && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={3}
                  stroke='#fff'
                  className='w-3 h-3 peer-checked:block'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              )}
            </span>
            <h2>Study</h2>
          </button>

          <button
            type='button'
            disabled={quiz}
            onClick={quizHandler}
            className='flex gap-2 cursor-pointer'>
            <span className='w-4 h-4 rounded bg-background flex items-center justify-center'>
              {quiz && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={3}
                  stroke='#2f53f5 '
                  className='w-3 h-3 peer-checked:block'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              )}
            </span>
            <h2>Quiz</h2>
          </button>
        </section>

        <section className='h-full'>
          {study && <Study_Chart />}
          {quiz && <Quiz_Chart/>}
        </section>
      </main>
    </Card>
  );
}
