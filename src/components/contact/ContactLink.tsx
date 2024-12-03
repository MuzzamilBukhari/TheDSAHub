import React from "react";
import { IconType } from "react-icons";

const ContactLink = ({
  text,
  link,
  icon: Icon,
}: {
  text: string;
  link: string;
  icon: IconType;
}) => {
  return (
    <div>
      <Icon className="w-8 h-8 text-primary" />
      <a
        href={link}
        className="text-white leading-relaxed hover:text-secondary transition-all duration-200 transform hover:scale-105"
      >
        {text}
      </a>
    </div>
  );
};

export default ContactLink;
