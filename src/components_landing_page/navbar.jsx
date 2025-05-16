import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sections = ["Home", "Upcoming", "Latest", "Popular", "Top Rated"];

  const handleClick = (section) => {
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s/g, ""));
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 transition-transform duration-300 px-[28px] pt-[29px] flex justify-between items-center bg-transparent ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <img src="/logo.png" alt="Logo" className="h-8 w-auto" />

      {/* Desktop Nav */}
      <ul className="hidden md:flex  space-x-6 lg:w-[585px] lg:h-[75px] lg:flex justify-between py-[10px] px-[40px] rounded-[12px] bg-[#0F0F0F]  text-white border-[4px] border-[#1F1F1F]">
        {sections.map((item) => (
          <li key={item} onClick={() => handleClick(item)} className="cursor-pointer text-[18px] font-[500] lg:w-[134px] lg:h-[55px] rounded-[8px] py-[14px] px-[24px] hover:bg-[#1A1A1A] ">
            {item}
          </li>
        ))}
      </ul>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 w-10 h-10 bg-[#1A1A1A] border-[#262626] border-2 flex items-center justify-center rounded-md text-white"
      >
        {!isOpen ? <img src="/vector.png" alt="Menu" /> : "✖"}
      </button>

     
      {isOpen && (
        <ul className="absolute top-20 right-4 bg-[#1A1A1A] border-[#262626] border-2 rounded-md text-zinc-200 shadow-lg w-40 p-4 space-y-2 md:hidden z-50">
          {sections.map((item) => (
            <li
              key={item}
              onClick={() => {
                handleClick(item);
                setIsOpen(false);
              }}
              className="hover:text-white cursor-pointer active:bg-[#262626] rounded-md p-2"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
