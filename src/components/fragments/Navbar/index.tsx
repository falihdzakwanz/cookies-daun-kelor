import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-500 sticky top-0 z-50 w-full">
      <nav className="p-4">
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`group inline-flex items-center justify-center transition-all duration-300 hover:text-color-accent`}
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
      </nav>
    </header>
  );
};

export default Navbar;
