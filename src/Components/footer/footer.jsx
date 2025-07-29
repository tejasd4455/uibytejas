// Footer.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-200 tracking-widest text-black py-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-left">

        {/* Phone */}
        <div>
          <p className="font-semibold ">Phone</p>
          <p className="text-xs mt-1">+91 9881073346</p>
        </div>

        {/* Email */}
        <div>
          <p className="font-semibold">Email</p>
          <p className="text- mt-1">tejadeshmukh03@gmail.com</p>
        </div>

        {/* Follow Me */}
        <div>
          <p className="font-semibold">Follow Me</p>
          <div className="flex items-center gap-4 mt-1 text-xl">
            <a href="www.linkedin.com/in/tejas-deshmukh-6375ab2b5" target='blank' aria-label="LinkedIn">
              <FaLinkedin className="text-[#0077B5] hover:opacity-80 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-[#1DA1F2] hover:opacity-80 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-[#E1306C] hover:opacity-80 transition" />
            </a>
            <a href="https://github.com/tejasd4455" target='blank' aria-label="GitHub">
              <FaGithub className="text-black hover:opacity-80 transition" />
            </a>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="text-right text-xs leading-snug tracking-widest">
          <p>© 2025 by Tejas Deshmukh. </p>
          <p>Crafted with using Built with React & Tailwind CSS.
</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
