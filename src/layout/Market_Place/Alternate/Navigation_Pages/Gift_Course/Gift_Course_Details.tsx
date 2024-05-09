/** @format */

export default function Gift_Course_Details() {
  return (
    <form className='bg-white p-6 rounded flex-col flex gap-4'>
      <h2 className='text-lg font-semibold -mt-2'>Gift Form</h2>
      <div className='flex flex-col gap-2 text-sm'>
        <label htmlFor='full name' className='font-semibold'>
          Recipent's Full Name
        </label>
        <input
          type='text'
          name='full name'
          id='full name'
          placeholder='Full name'
          className='outline-none border rounded placeholder:text-xs h-9 px-4 py-1'
        />
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <label htmlFor='full name' className='font-semibold'>
          Recipent's Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email address'
          className='outline-none border rounded placeholder:text-xs h-9 px-4 py-1'
        />
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <label htmlFor='full name' className='font-semibold'>
          Additional Message
        </label>
        <textarea
          name='additional message'
          id='additional message'
          placeholder='Add your personal message here...'
          className='outline-none border rounded placeholder:text-xs min-h-[10rem] max-h-[10rem] px-4 py-2'
        />
      </div>
    </form>
  );
}
