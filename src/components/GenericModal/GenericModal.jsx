import { IoClose as CloseIcon } from "react-icons/io5";

export function GenericModal({ children, setShowModal, content }) {
  const handleModalClose = (e) => {
    if (e.target.dataset.modal !== "modal-bg") return;

    setShowModal((prev) => !prev);
  };

  return (
    <div className="absolute h-screen w-screen z-50">
      <section
        onMouseDown={handleModalClose}
        data-modal="modal-bg"
        className="fixed top-0 bottom-0 left-0 right-0 bg-slate-800 bg-opacity-50 flex items-center justify-center"
      >
        <div
          className={`${
            content === "follow" ? "w-max" : "w-[90%]"
          } max-w-[700px] relative`}
        >
          {children}
          <CloseIcon
            onClick={() => setShowModal((prev) => !prev)}
            size={32}
            className="absolute top-3 right-3 shadow shadow-gray-300 dark:shadow-gray-500 rounded-md cursor-pointer hiver:shadow hover:shadow-gray-600 dark:hover:shadow-gray-400"
          />
        </div>
      </section>
    </div>
  );
}
