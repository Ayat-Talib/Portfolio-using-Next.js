import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm">
        © 2024 Ayat Talib. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://github.com/Ayat-Talib"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/ayat-talib/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={20} />
        </a>
       
      </div>
    </div>
  </footer>
);

export default Footer;
