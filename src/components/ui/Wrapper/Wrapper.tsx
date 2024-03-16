/** @format */

export interface WrapperType {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperType) {
  return <section className="w-max tab:w-7/12 mt-32 tab:mt-20">{children}</section>;
}
