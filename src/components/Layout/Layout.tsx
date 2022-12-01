import { FC, Suspense } from "react";
import { Header, Footer } from "../index";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-slate-50">
      <Header />
      <main className="flex-grow container mx-auto">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
