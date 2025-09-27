import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-neutral-900 dark:bg-neutral-900 dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="hover:text-cyan-500" aria-label="Facebook">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-green-400" aria-label="Instagram">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-lime-400" aria-label="X">
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-cyan-500" aria-label="GitHub">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-red-500" aria-label="YouTube">
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm md:order-1 md:mt-0">
          &copy; 2025 Creat by CheSebas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
