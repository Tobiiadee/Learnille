/** @format */

export interface WrapperType {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperType) {
  return (
    <section
      className={`relative w-screen nb:w-full mt-32 nb:ml-60 nb:mt-20 ${className}`}>
      {children}
    </section>
  );
}
