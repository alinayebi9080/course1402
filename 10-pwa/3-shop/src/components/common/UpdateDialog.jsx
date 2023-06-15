import { createPortal } from "react-dom";

const UpdateDialog = () => {
  return createPortal(
    <div
      id="update-service-worker-dialog"
      className={`fixed top-0 right-0 bottom-0 left-0 h-screen w-screen bg-gray-200/70 flex justify-center items-center hidden`}
    >
      <p>نسخه جدیدی در دسترس است</p>
      <button id="update-service-worker-btn">بروزرسانی</button>
    </div>,
    document.getElementById("modal")
  );
};

export default UpdateDialog;
