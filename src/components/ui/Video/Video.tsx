/** @format */

import video from "../Video/Video_File/6786-195986690_medium.mp4";

type Video_Type = {
  videoFile?: string;
  poster?: string;
};

export default function Video({ poster }: Video_Type) {
  return (
    <main className='relative flex items-center w-max h-max overflow-hidden'>
      <video
        autoPlay={true}
        muted={true}
        poster={poster}
        controls
        className='h-[20rem] w-[25.5rem] tab:w-[43rem] tab:h-[22rem] nb:w-[34rem] rounded-xl'>
        <source src={video} type='video/mp4' />
      </video>
    </main>
  );
}
