/** @format */

export type BackdropType = {
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Backdrop({onClick}: BackdropType) {
    return (
      <div onClick={onClick}>
        <div className='bg-black opacity-90 w-full h-full fixed top-0 left-0 z-40 overflow-hidden'></div>
      </div>
    );
  }
  