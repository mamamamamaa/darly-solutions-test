import {
  FC,
  MouseEventHandler,
  ReactNode,
  SyntheticEvent,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  onClose: Function;
};

export const Modal: FC<Props> = ({ children, onClose }) => {
  const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

  const onBackdropClose = (event: MouseEvent) => {
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
    return () => {
      window.removeEventListener("keydown", onEscapeClose);
    };
  }, []);

  return createPortal(
    <div
      // need to fix it
      // onClick={onBackdropClose}
      className="w-screen h-screen backdrop-blur-sm"
    >
      <div>{children}</div>
    </div>,
    modalRoot
  );
};
