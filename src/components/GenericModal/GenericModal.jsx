import { IoClose as CloseIcon } from "react-icons/io5";

export function GenericModal({ children, setShowModal, content }) {
  const handleModalClose = (e) => {
    if (
      e.target.tagName !== "SECTION" &&
      e.target.tagName !== "svg" &&
      e.target.tagName !== "path"
    )
      return;

    setShowModal((prev) => !prev);
  };

  return (
    <div className="absolute h-screen w-screen z-10">
      <section
        onClick={handleModalClose}
        className="fixed top-0 bottom-0 left-0 right-0 bg-slate-800 bg-opacity-50 flex items-center justify-center"
      >
        <div
          className={`${
            content === "follow" ? "w-max" : "w-[90%]"
          } max-w-[700px]`}
        >
          {children}
        </div>
      </section>
      <CloseIcon
        onClick={handleModalClose}
        size={32}
        className="fixed top-4 right-4 shadow shadow-gray-600 rounded-md cursor-pointer hiver:shadow hover:shadow-gray-300"
      />
    </div>
  );
}
