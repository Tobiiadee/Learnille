/** @format */

export default function Sound() {
  return (
    <div className='bg-white px-2 py-3 rounded shadow flex items-center'>
      <label htmlFor='sound' className='hidden'></label>
      <input title='sound' type='range' id='sound' min={0} max={100} />
    </div>
  );
}
