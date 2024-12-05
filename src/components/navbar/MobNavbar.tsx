"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import navItems from "./navItems";
import Logo from "../../../public/logo.jpg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-primary  body-font bg-white bg-opacity-25 backdrop-blur-md flex flex-col md:hidden">
      <div className="container mx-auto flex justify-between flex-wrap p-5 items-center">
        <div className="flex justify-center items-center gap-2">
          <Image src={Logo} alt={"DSA Hub"} width={150} height={80} />
        </div>

        <button
          className="text-white block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiCloseLine className="w-7 h-7" />
          ) : (
            <RiMenu3Line className="w-7 h-7" />
          )}
        </button>
      </div>
      <div className="">
        <nav
          className={`fixed top-0 right-0 bg-black/95 backdrop-blur-md p-6 w-3/4 h-screen transform duration-300 ease-in-out z-10 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-6 justify-center h-full ">
            {navItems.map((item) => (
              <NavLink
                slug={item.slug}
                key={item.id}
                name={item.name}
                onclick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobNavbar;
