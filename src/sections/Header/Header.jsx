import { Menu, X } from "lucide-react";
import { navigation } from "../../constants/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="w-full  lg:px-12 xl:px-16 h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-3xl font-black tracking-wider">
          <span className="text-white">Jhuan Alexandre</span>
          <span className="text-sky-400">.</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="
        relative
        px-2
        py-2
        text-[15px]
        font-medium
        text-gray-400
        transition-all
        duration-300
        ease-out

        hover:text-white
        hover:-translate-y-1
        hover:scale-105
        "
            >
              {item.title}

              <span
                className="
          absolute
          left-0
          -bottom-1
          h-0.5
          w-0
          rounded-full
          bg-sky-400
          transition-all
          duration-300
          group-hover:w-full
        "
              />
            </a>
          ))}
        </nav>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="block px-6 py-4 text-gray-300 hover:bg-slate-800 hover:text-sky-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
