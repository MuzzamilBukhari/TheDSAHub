import React from "react";
import NavLink from "./NavLink";
import { Button } from "../";
import navItems from "./navItems";
import Image from "next/image";
import Logo from "../../../public/logo.jpg";

const Navbar = () => {
  return (
    <header className="text-white body-font bg-black hidden md:flex fixed w-full top-0 left-0 z-10 ">
      <div className="container mx-auto flex flex-wrap px-4 py-5 items-center ">
        <div className="text-primary flex justify-center items-center ">
          <Image src={Logo} alt="DSA Hub" width={200} height={100} />
        </div>
        <nav className="md:ml-auto flex items-center gap-2 lg:gap-8 mt-5 md:mt-0 text-base justify-center">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} name={item.name} />
          ))}
        </nav>
        <Button
          type="button"
          className="py-[2px] ml-8 bg-black border-2 border-none hover:shadow-none shadow-primary ring-2 ring-primary shadow-md"
        >
          <a href={"#newsletter"}>Subscribe</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
