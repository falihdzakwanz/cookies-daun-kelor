import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, handleClick }) => {
  return (
    <a
      href={href}
      onClick={(e) => handleClick(e, href.substring(1))}
      className="block p-2 transition-all duration-300 hover:text-amber-300 lg:text-lg"
    >
      {title}
    </a>
  );
};

export default NavLink;
