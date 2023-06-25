import { useState, useEffect } from "react";

// implement a hook that will allow us to toggle between light and dark mode
// it will also persist the user's preference in local storage
// it will also respect the user's OS preference

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    const handleDarkMode = () => {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const localDarkMode = localStorage.getItem("darkMode");

      localDarkMode
        ? setDarkMode(JSON.parse(localDarkMode))
        : setDarkMode(isDarkMode);
    };
    handleDarkMode();
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
