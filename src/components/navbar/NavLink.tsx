"use client";

import Link from "next/link";
import React from "react";

const NavLink = ({
  name,
  slug,
  onclick,
}: {
  name: string;
  slug: string;
  onclick?: () => void;
}) => {
  return (
    <Link
      href={slug || "/"}
      className="text-lg font-medium ring-secondary hover:text-primary hover:underline rounded-lg duration-300 px-3 py-1"
      onClick={onclick}
    >
      {name}
    </Link>
  );
};

export default NavLink;
