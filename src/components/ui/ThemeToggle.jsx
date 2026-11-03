import { useEffect,useState } from "react";

import {
  HiMoon,
  HiSun,
} from "react-icons/hi";

function ThemeToggle() {

  const [darkMode,setDarkMode] =
    useState(false);

  /* ================= LOAD THEME ================= */

  useEffect(()=>{

    const savedTheme =
      localStorage.getItem("theme");

    if(savedTheme === "dark"){

      document.documentElement
      .classList.add("dark");

      setDarkMode(true);
    }

  },[]);

  /* ================= TOGGLE ================= */

  function toggleTheme(){

    if(darkMode){

      document.documentElement
      .classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

    } else {

      document.documentElement
      .classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );
    }

    setDarkMode(!darkMode);
  }

  return (

    <button

      onClick={toggleTheme}

      className="
      glass
      
      flex
      items-center
      justify-center
      
      h-12
      w-12
      
      rounded-full
      
      text-xl
      
      transition-all
      duration-300
      
      hover:scale-110
      "
    >

      {darkMode
        ? <HiSun />
        : <HiMoon />
      }

    </button>
  );
}

export default ThemeToggle;