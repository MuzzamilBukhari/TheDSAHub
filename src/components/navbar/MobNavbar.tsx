"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import categories from "@/data/categoriesData";
import navItems from "./navItems";
import { FaAngleRight } from "react-icons/fa6";

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArrowDown, setIsArrowDown] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsArrowDown(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsArrowDown(!isArrowDown);
  };

  return (
    <header className="text-primary body-font bg-black backdrop-blur-md flex flex-col md:hidden w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <Image src="/logo.jpg" alt="Logo" width={180} height={180} />
        </div>
      </div>
      <button
        className="text-secondary focus:outline-none absolute top-5 right-5 z-20"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <RiCloseLine className="w-7 h-7" />
        ) : (
          <RiMenu3Line className="w-7 h-7" />
        )}
      </button>

      <nav
        className={`fixed top-0 right-0 bg-black/95 backdrop-blur-md p-6 w-3/4 h-screen transform duration-300 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 justify-center h-full">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.id} className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className="text-lg font-medium hover:text-primary hover:underline duration-300 flex items-center"
                >
                  {item.name}
                  <FaAngleRight
                    className={`ml-2 text-xl transform duration-300 ${
                      isArrowDown ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-10 left-0 bg-black text-gray-300 shadow-md rounded-lg p-4 space-y-2 w-64 max-w-xs sm:w-72 sm:max-w-sm md:w-80 md:max-w-md max-h-48 overflow-y-auto">
                    {categories.map((category) => (
                      <NavLink
                        slug={`/categories/${category.slug}`}
                        key={category.id}
                      >
                        <button
                          onClick={() => handleNavItemClick()}
                          className="block text-left text-white hover:text-primary w-full text-base sm:text-lg py-2 px-3 rounded-md hover:bg-black/80 whitespace-nowrap"
                        >
                          {category.name}
                        </button>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                slug={item.slug}
                key={item.id}
                onclick={() => handleNavItemClick()}
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      </nav>
    </header>
  );
};

export default MobNavbar;
