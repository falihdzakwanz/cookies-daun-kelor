import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();

    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      history.pushState(null, '', `/#${id}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 h-16 w-full text-white bg-green-800">
      <div className="block lg:flex lg:items-center lg:justify-between lg:h-full">
        <div className="flex justify-between p-4 md:p-8 lg:items-center">
          <a
            href="#home"
            className="text-lg font-bold uppercase md:text-xl lg:text-2xl"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Cookies
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="group inline-flex items-center justify-center transition-all duration-300 hover:text-amber-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {!isOpen ? (
                  <>
                    <path
                      className="origin-right transform transition-all duration-300 group-hover:scale-x-125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16"
                    />
                    <path
                      className="origin-center transform transition-all duration-500 group-hover:scale-x-110"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12h16"
                    />
                    <path
                      className="origin-left transform transition-all duration-700 group-hover:scale-x-125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 18h16"
                    />
                  </>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`
            ${
              isOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 lg:opacity-100"
            } 
            lg:max-h-screen overflow-hidden transition-all duration-300 ease-in-out bg-green-800/80 lg:bg-transparent px-4 md:px-8 lg:px-0 lg:flex lg:items-center lg:justify-evenly lg:w-1/2 lg:h-full
            `}
        >
          <NavLink href="#home" title="Beranda" handleClick={handleNavClick} />
          <NavLink href="#about" title="Tentang" handleClick={handleNavClick} />
          <NavLink href="#benefits" title="Manfaat" handleClick={handleNavClick} />
          <NavLink href="#testimonials" title="Testimoni" handleClick={handleNavClick} />
          <NavLink href="#products" title="Produk" handleClick={handleNavClick} />
          <NavLink href="#contact" title="Kontak" handleClick={handleNavClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
