/** @format */

export interface WrapperType {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperType) {
  return <section className="w-screen tab:w-full mt-32 tab:ml-60 tab:mt-20">{children}</section>;
}
