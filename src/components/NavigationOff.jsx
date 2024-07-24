import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-white text-xl font-bold">
            My Website
          </a>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About
          </a>
          <a href="/services" className="text-white">
            Services
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-white z-10">
          <div className="max-w-screen-xl mx-auto p-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-blue-500 text-xl font-bold">
                My Website
              </a>
              <button
                onClick={toggleNavbar}
                className="text-blue-500 text-2xl focus:outline-none"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <a href="/" className="block text-gray-800">
                Home
              </a>
              <a href="/about" className="block text-gray-800">
                About
              </a>
              <a href="/services" className="block text-gray-800">
                Services
              </a>
              <a href="/contact" className="block text-gray-800">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
