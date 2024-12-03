import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.jpg";
import SocialLink from "./SocialLink";
import socialLinks from "@/data/socialLinks";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font relative bottom-0 w-full ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="text-primary flex justify-center items-center ">
          <Image src={Logo} alt="DSA Hub" width={200} height={100} />
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 the DSA Hub —
          <a
            href="https://www.linkedin.com/in/muzzamilbukhari/"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @muzzamilbukhari
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {socialLinks.map((link) => (
            <SocialLink key={link.id} link={link.link} icon={link.icon} />
          ))}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
