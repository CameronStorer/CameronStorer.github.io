// src/components/Footer.tsx
import Link from 'next/link';
import { Linkedin, Github, Facebook, Instagram, Home, Send, FileUser } from 'lucide-react'; // Example: using a react icon library

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 flex flex-col justify-center items-center">
      <hr className="w-[99.5%] border-t border-gray-300 mx-auto" />
      <div className="mt-4 flex space-x-6"> {/* Use Tailwind for spacing */}
        <Link href="https://www.linkedin.com/in/cameron-storer0" target="_blank" 
        rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 
        transition-colors-transform duration-100 hover:transform-[scale(1.5)]">
          <Linkedin size={24} />
        </Link>
        <Link href="https://github.com/cameronstorer" target="_blank" 
        rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 
        transition-colors-transform duration-100 hover:transform-[scale(1.5)]">
          <Github size={24} />
        </Link>
        <Link href="https://www.facebook.com/cameron-storer0" target="_blank" 
        rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 
        transition-colors-transform duration-100 hover:transform-[scale(1.5)]">
          <Facebook size={24} />
        </Link>
        <Link href="https://www.instagram.com/cameron.storer0/" target="_blank" 
        rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 
        transition-colors-transform duration-100 hover:transform-[scale(1.5)]">
          <Instagram size={24} />
        </Link>
        <Link href="/" passHref className="text-gray-600 hover:text-blue-600 
        transition-colors-transform duration-100 hover:transform-[scale(1.5)]"> {/* Use Link for internal routes */}
            <Home size={24} /> 
        </Link>
        <Link href="/contact-me" passHref className="text-gray-600 hover:text-blue-600 
        transition-colors-transform duration-100 hover:transform-[scale(1.5)]"> {/* Use Link for internal routes */}
            <Send size={24} />
        </Link>
        <a href="https://cameronstorer.com/resume.pdf" target="_blank" 
        rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 
        transition-colors-transform duration-100 hover:transform-[scale(1.5)]">
          <FileUser size={24} />
        </a>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">Designed & Developed by Cameron Storer © {currentYear}</p>
    </footer>
  );
}