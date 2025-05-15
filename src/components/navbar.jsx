import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-transparent pt-[29px] px-[28px] fixed w-full z-50 flex items-center justify-between transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Skilledity Logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 bg-zinc-900 bg-opacity-70 px-4 py-2 rounded-full text-white text-sm">
        {["Home", "Upcoming", "Latest", "Popular", "Top Rated"].map((item) => (
          <li key={item} className="hover:text-blue-400 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 w-10 h-10 bg-[#1A1A1A] border-[#262626] border-2 flex items-center justify-center rounded-md text-white"
        >
          {!isOpen ? (
            <img src="/vector.png" alt="Menu Icon" />
          ) : (
            "✖"
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-20 right-4 bg-[#1A1A1A] border-[#262626] border-2 rounded-md text-zinc-200 shadow-lg w-40 p-4 space-y-2 md:hidden z-50">
          {["Home", "Upcoming", "Latest", "Popular", "Top Rated"].map((item) => (
            <div key={item} className="active:bg-[#262626] rounded-md p-2">
              <li onClick={() => setIsOpen(false)} className="hover:text-white cursor-pointer">
                {item}
              </li>
            </div>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
