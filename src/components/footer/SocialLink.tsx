import React from "react";
import { IconType } from "react-icons";

const SocialLink = ({
  link,
  icon: Icon,
  size = 30,
}: {
  link: string;
  icon: IconType;
  size?: number;
}) => {
  return (
    <a
      className="ml-3 text-gray-600 hover:text-primary duration-300"
      href={link}
    >
      <Icon size={size} />
    </a>
  );
};

export default SocialLink;
