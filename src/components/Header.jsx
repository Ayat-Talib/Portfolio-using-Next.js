import Link from "next/link";
import { FaGithub, FaLinkedin, FaVercel } from "react-icons/fa";

const Header = () => (
  <header className="bg-gray-900 text-white fixed w-full z-10 shadow-lg">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      {/* Brand Logo */}
      <div className="text-3xl font-extrabold tracking-wide">
        <span className="text-blue-500">Ayat</span> Talib
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="#about" passHref>
          <span className="cursor-pointer text-gray-300 hover:text-blue-400 transition duration-300">
            About
          </span>
        </Link>
        <Link href="#projects" passHref>
          <span className="cursor-pointer text-gray-300 hover:text-blue-400 transition duration-300">
            Projects
          </span>
        </Link>
        <Link href="#contact" passHref>
          <span className="cursor-pointer text-gray-300 hover:text-blue-400 transition duration-300">
            Contact
          </span>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/Ayat-Talib/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/ayat-talib/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        
      </div>
    </nav>
  </header>
);

export default Header;
