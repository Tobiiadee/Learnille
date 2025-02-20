/** @format */

import Card from "@/components/ui/Card/Card";
import { Link } from "react-router-dom";
import img from "../../../../../assets/images/075826d0f7062c2b072efd481ac7837b.jpg";
import { CourseType } from "@/lib/types/course_tyeps";
import { useDispatch } from "react-redux";
import { course_details_actions } from "@/store/Slices/Course_Details_Slice";
import { removeWhiteSpace } from "@/lib/utils/Format/utils_";


type CourseInfoType = {
  courseInfo: CourseType;
};

export default function Course_Item({ courseInfo }: CourseInfoType) {
  const dispatch = useDispatch();

  const courseDetailsHandler = () => {
    dispatch(course_details_actions.getCourseDetails(courseInfo));
  };
  

  return (
    <Link
      to={`/learnille/market place/market_place/course_details/${removeWhiteSpace(courseInfo.title, "-")}/overview`}>
      <Card
        hover={true}
        classNames='w-full tab:w-max tab:h-[25rem] nb:w-full nb:h-[21rem] active:scale-105 transition duration-300'>
        <main
          onClick={courseDetailsHandler}
          className='flex flex-col  gap-2 h-full w-full'>
          <div className='min-w-20 h-[14rem] tab:w-full tab:max-w-[20rem] nb:w-full nb:max-h-[10rem]  nb:min-h-[10rem] rounded-md shadow overflow-hidden flex items-center justify-center'>
            <img src={img} alt='' />
          </div>

          <div className='flex justify-between text-black'>
            <div className='bg-[#AED6F1] px-2 py-1 rounded-sm'>
              <h2 className='text-[10px] text-layout-bg font-semibold uppercase'>
                {courseInfo.category}
              </h2>
            </div>
          </div>

          <div className='w-full'>
            <section className='flex justify-between'>
              <h2 className='text-xs text-black capitalize font-semibold w-60 tab:w-44'>
                {courseInfo.title}
              </h2>
            </section>

            <section className='mt-2 flex justify-between border-b pb-2'>
              <span className='flex gap-1 items-center text-xs text-text'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill=' #FFC300'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='#FFC300'
                    className='w-5 h-5'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                    />
                  </svg>
                </div>
                <p className='text-xs flex gap-[1px]'>
                  <span className='font-semibold text-black'>
                    {courseInfo.rating.toFixed(1)}
                  </span>
                  <span>({courseInfo.review.toLocaleString()})</span>
                </p>
              </span>

              <div className='flex items-center gap-[1px]'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5 text-[#383fcb]'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                    />
                  </svg>
                </span>
                <p className='text-xs text-text flex gap-[1px]'>
                  <span className='text-black font-semibold'>
                    {courseInfo.studentEnrolled.toLocaleString()}
                  </span>
                  <span>students</span>{" "}
                </p>
              </div>
            </section>

            <section className='mt-2 flex w-full justify-between'>
              <div className='flex items-center gap-1'>
                <span className='text-xs font-semibold'>
                  ${courseInfo.price.discountPrice.toFixed(2)}
                </span>
                <span className='text-[10px] text-text line-through'>
                  ${courseInfo.price.price.toFixed(2)}
                </span>
              </div>

              <button type='button'>
                {""}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
                  />
                </svg>
              </button>
            </section>
          </div>
        </main>
      </Card>
    </Link>
  );
}
