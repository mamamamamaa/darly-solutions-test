import { FC, Suspense } from "react";
import { Header, Footer } from "../index";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

export const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-slate-50">
      <Header />
      <main className={style.appContainer}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
