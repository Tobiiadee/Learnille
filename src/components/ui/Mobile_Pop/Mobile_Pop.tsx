/** @format */

type PopType = {
  children: React.ReactNode;
  classNames?: string;
};

export default function Mobile_Pop({ children, classNames }: PopType) {
  return (
    <section
      className={`fixed top-20 left-5 flex justify-center overflow-hidden z-50 ${classNames}`}>
      {children}
    </section>
  );
}
