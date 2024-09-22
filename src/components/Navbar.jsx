import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLOcalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};
const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLOcalStorage());
  const handleTheme = () => {
    // const { winter, dracula } = themes;
    //const newTheme = theme === winter ? dracula : winter;

    setTheme((prevTheme) =>
      prevTheme === themes.winter ? themes.dracula : themes.winter
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE*/}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/*DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/*THEME SETUP*/}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/*CART LINK*/}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*********HAVE TO SEE THE LABEL
 * RATHER CAN YOU DIV AND GIVE ROLE="BUTTON"
 */

/****WE WILL IMPLEMET THEMES IN REDUX TOOLKIT */

/**ANOTHER WAY
 * 
 * 
 * 1. CREATE ThemeContext.js FILE
 * 
 * import React, { createContext, useContext, useState, useEffect } from 'react';
 * 
 * const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.winter);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.winter ? themes.dracula : themes.winter));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook 
export const useTheme = () => useContext(ThemeContext);


2. WRAPPING APP JS IN IT
import { ThemeProvider } from './ThemeContext';
 <ThemeProvider>
    <App />
  </ThemeProvider>,

3. USE IN NAVBAR
 const { theme, toggleTheme } = useTheme();

 * 

 4. TOGGLE COMPONENT
 import React from 'react';
import { useTheme } from './ThemeContext';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ToggleComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
     <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
  );
};

export default ToggleComponent;
 */
