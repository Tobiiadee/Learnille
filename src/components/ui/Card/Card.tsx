/** @format */

type CardType = {
  children?: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  hover?: boolean;
};

export default function Card({
  children,
  classNames,
  onClick,
  hover,
}: CardType) {
  return (
    <section
      onClick={onClick}
      className={`p-4 bg-white rounded-md shadow-sm ${!hover ? "" : "hover:bg-[#f8f9f9]"} ${classNames}`}>
      {children}
    </section>
  );
}
