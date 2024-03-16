/** @format */

import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { Fragment } from "react";
import { BackdropType } from "./Backdrop";

export default function Modal({ onClick, children }: BackdropType) {
  const portalElement: HTMLElement = document.getElementById("overlay")!;

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {children}
    </Fragment>
  );
}
