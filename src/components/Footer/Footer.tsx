import { FC } from "react";
import style from "./Footre.module.css";

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <p className={style.paragraph}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
