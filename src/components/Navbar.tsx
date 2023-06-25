import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  return (
    <nav className="flex items-center justify-between px-10 bg-gray-300 dark:bg-slate-950 dark:text-gray-300">
      <p className="text-3xl">studentFirst</p>
      <ul className="flex flex-row items-center justify-between gap-10">
        {navLinks.map((link) => {
          return (
            <Link className="p-2 py-7" to={link.path} key={link.title}>
              {link.title}
            </Link>
          );
        })}
      </ul>

      <button onClick={handleToggleDarkMode} className="p-2 py-7">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
