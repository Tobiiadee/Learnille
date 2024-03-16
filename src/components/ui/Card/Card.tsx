/** @format */

type CardType = {
    children?: React.ReactNode,
    classNames?: string
}

export default function Card({ children, classNames }: CardType) {
  return <section className={`p-4 bg-white rounded-md shadow-sm ${classNames}`}>{children}</section>;
}
