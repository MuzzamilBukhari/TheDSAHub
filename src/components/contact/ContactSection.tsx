import React, { useRef, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactLink from "./ContactLink";
import SocialLink from "../footer/SocialLink";
import socialLinks from "@/data/socialLinks";

import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <>
      <section className="text-white bg-bg2 body-font relative">
        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-bg2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28933.99848086839!2d67.04738877020912!3d24.97462548581005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e59b6b225b%3A0x1951829acb486c7e!2sNorth%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1733209254651!5m2!1sen!2s"
            ></iframe>
            <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6  mt-4 lg:mt-0">
                <ContactLink
                  text="+92 311 1091341"
                  link="tel:+923111091341"
                  icon={FaPhoneAlt}
                />
                <ContactLink
                  link="mailto:muhammadmuzzamilbukhari@gmail.com"
                  text="muhammadmuzzamilbukhari@gmail.com"
                  icon={BiLogoGmail}
                />
                <h2 className="title-font font-semibold text-primary tracking-widest text-xs mt-4">
                  SOCIAL MEDIA:
                </h2>
                <div className="flex space-x-4 mt-2">
                  {socialLinks.map((link) => (
                    <SocialLink
                      key={link.id}
                      link={link.link}
                      icon={link.icon}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <FaLocationDot className="w-8 h-8 text-primary" />
                <p className="mt-1">North Karachi, Karachi</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactSection;
