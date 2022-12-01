import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const menu = [
  { id: "home", name: "Home", path: "/" },
  { id: "news", name: "Table", path: "/table" },
  { id: "about", name: "Form", path: "/form" },
];

export const Header: FC = () => {
  return (
    <header className="py-5 px-10 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-4xl font-black uppercase">feedback</p>

        <Toaster position="top-center" reverseOrder={false} />

        <nav className="lg:text-lg">
          <ul className="mx-auto flex items-center gap-14">
            {menu &&
              menu.map(({ id, name, path }) => (
                <li key={id}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
