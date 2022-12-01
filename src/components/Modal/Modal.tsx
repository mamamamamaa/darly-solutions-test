import { FC, ReactNode, SyntheticEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseButton } from "../Buttons/CloseButton";
import style from "./Modal.module.css";

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
      }
    };

    window.addEventListener("keydown", onEscapeClose);

    return () => window.removeEventListener("keydown", onEscapeClose);
  }, [onClose]);

  return createPortal(
    <div onClick={onBackdropClose} className={style.backdrop}>
      <div className={style.window}>
        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};
