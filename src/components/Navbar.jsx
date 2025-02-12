import { useState } from "react";
import { Avatar } from "../../public/logos";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="container w-11/12 md:w-10/12 mx-auto border-b border-gray-300">
        <div className="flex items-center justify-between px-2 py-4">
          <div className="flex items-center gap-4">
            <button className="font-[--Roboto Condensed] font-bold hover:bg-blue-500 hover:text-white text-blue-500 text-[16px] md:text-[18px] rounded-sm px-3 py-2 cursor-pointer">
              News
            </button>
            <button className="font-[--Roboto Condensed] font-bold hover:bg-blue-500 hover:text-white text-blue-500 text-[16px] md:text-[18px] rounded-sm px-3 py-2 cursor-pointer">
              Portal
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            <li className="text-[17px] text-gray-400 hover:text-blue-500 hover:font-bold hover:border-b-[2px] border-blue-500 py-2">
              News
            </li>
            <li className="text-[17px] text-gray-400 hover:text-blue-500 hover:font-bold hover:border-b-[2px] border-blue-500 py-2">
              Blog
            </li>
            <li>
              <img className="w-10 h-10" src={Avatar} alt="avatar" />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden container w-11/12 mx-auto bg-white rounded-md p-4">
          <ul className="flex flex-col gap-3 text-center">
            {[
              "Home",
              "Breaking news",
              "Regular news",
              "International news",
              "Sports",
              "Entertainment",
              "Culture",
              "Arts",
              "All news",
            ].map((item, index) => (
              <li
                key={index}
                className="font-[--Roboto Condensed] text-[18px] text-gray-500 hover:bg-blue-50 hover:text-blue-500 rounded-sm px-2 py-1 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block container w-10/12 mx-auto">
        <div className="mt-8 px-2">
          <ul className="flex items-center justify-between">
            {[
              "Home",
              "Breaking news",
              "Regular news",
              "International news",
              "Sports",
              "Entertainment",
              "Culture",
              "Arts",
              "All news",
            ].map((item, index) => (
              <li
                key={index}
                className="font-[--Roboto Condensed] text-[18px] text-gray-400 hover:bg-blue-50 hover:text-blue-500 rounded-sm px-2 py-1 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
