/** @format */

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Modal from "../Modal/Modal";

export default function Loading() {
  return (
    <Modal className="bg-black/50">
      <div className="w-full h-full flex justify-center items-center fixed z-40">
        <LoadingSpinner />
      </div>
    </Modal>
  );
}
