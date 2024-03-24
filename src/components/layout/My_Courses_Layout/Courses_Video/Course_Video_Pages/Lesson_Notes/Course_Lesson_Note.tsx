/** @format */

export default function Course_Lesson_Note() {
  return (
    <section className="flex flex-col gap-4">
      <main className='flex justify-between items-center'>
        <h2 className='text-sm font-semibold text-black'>Lecture Notes</h2>
        <div>
          <button
            type='button'
            className='flex gap-2 items-center px-2 py-2 rounded-md text-layout-bg bg-[#edf1ff] active:bg-[#ced5ee] transition duration-300'>
            {""}
            <span>
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
                  d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                />
              </svg>
            </span>
            <h2 className='text-xs font-medium'>Download Notes</h2>
          </button>
        </div>
      </main>

      <main>
        <p className="text-xs text-black font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          est aut tenetur, fugit vel cum illum labore non dolorem molestias sit
          quae, eligendi porro alias sapiente sunt ullam facilis. Sunt adipisci
          labore placeat. Nostrum laudantium, illo quod, consequuntur
          repudiandae omnis tenetur aliquam tempora saepe in, cum fuga incidunt
          neque maiores. Repudiandae, reiciendis assumenda. Harum aliquam
          molestias dolores illo ullam dolorum porro. Optio quis blanditiis
          praesentium natus in earum ipsum quod laborum tenetur iure atque quasi
          magni, similique quas sequi sunt? Voluptate ut molestiae soluta rerum
          officiis eius ad incidunt nemo odio quaerat qui in totam fugit,
          possimus labore excepturi error natus a earum deleniti distinctio
          perspiciatis itaque similique. Suscipit dicta molestias at nemo.
          Nostrum, quo non quia unde nihil rerum aliquam, earum quibusdam optio
          sapiente temporibus totam praesentium modi autem, enim facere
          molestias. Quisquam culpa temporibus aliquam omnis tempore cupiditate
          fugit error, numquam natus. Numquam obcaecati tempore ea non
          cupiditate.
        </p>
      </main>
    </section>
  );
}
