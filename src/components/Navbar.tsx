// src/components/Navbar.tsx
// import myProfilePic from "../assets/foto.jpg";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State untuk mengontrol apakah menu terbuka atau tidak

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Mengubah state menuOpen saat tombol diklik
  };
  return (
    <nav className=" p-4 fixed top-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between  items-center">
        {/* Navigasi Kiri: Logo Image dan Nama */}
        <div className="flex items-center ">
          {/* <img src={myProfilePic} alt="Logo" className="h-8 w-8 rounded-full" /> */}
          <a
            href="/"
            className="text-white text-lg sm:text-2xl font-bold rotate-180"
          >
            GR
          </a>
        </div>

        {/* Navigasi Utama */}
        <ul className="hidden sm:flex tracking-widest font-light  space-x-4 flex-grow justify-center">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm "
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm "
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Tombol Hamburger untuk Mobile */}
        <div className="sm:hidden relative ">
          <button
            className="relative w-6 h-6 flex flex-col justify-around items-center" // Wadah untuk garis-garis menu
            onClick={toggleMenu} // Menambahkan event handler onClick
          >
            {/* Garis Paling Atas */}
            <span
              className={`absolute left-0 w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-1"
              }`}
            />

            {/* Garis Tengah */}
            <span
              className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "top-3"
              }`}
            />

            {/* Garis Paling Bawah */}
            <span
              className={`absolute left-0 w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "top-5"
              }`}
            />
          </button>
          {/* Popup Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40  rounded shadow-lg z-50 bg-red-900/80">
              <ul className="flex flex-col">
                <li>
                  <a
                    href="#about"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
