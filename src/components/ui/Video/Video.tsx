/** @format */

type Video_Type = {
  videoFile?: string;
  poster?: string;
};

export default function Video({ poster, videoFile }: Video_Type) {
  return (
    <main className='relative flex mx-auto w-full h-max overflow-hidden'>
      <video
        autoPlay={true}
        muted={true}
        poster={poster}
        controls
        className='h-[20rem] w-full tab:w-full tab:h-[22rem]rounded-xl'>
        <source src={videoFile} type='video/mp4' />
      </video>
    </main>
  );
}
