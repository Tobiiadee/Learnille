/** @format */

export interface WrapperType {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperType) {
  return <section className="w-screen nb:w-full mt-32 nb:ml-60 nb:mt-20">{children}</section>;
}
