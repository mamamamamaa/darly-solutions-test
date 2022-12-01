import { FC, ReactNode, SyntheticEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { CLoseButton } from "../Buttons/CLoseButton";

type Props = {
  children: ReactNode;
  onClose: Function;
};

export const Modal: FC<Props> = ({ children, onClose }) => {
  const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

  const onBackdropClose = (event: SyntheticEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClose = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
        console.log("im close");
      }
    };
    window.addEventListener("keydown", onEscapeClose);
    return () => {
      window.removeEventListener("keydown", onEscapeClose);
    };
  }, []);

  return createPortal(
    <div
      onClick={onBackdropClose}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-30 backdrop-blur-sm"
    >
      <div className="relative bg-white h-56 w-64 flex p-10 items-center justify-center rounded-2xl shadow-2xl">
        <CLoseButton onClose={onClose} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};
