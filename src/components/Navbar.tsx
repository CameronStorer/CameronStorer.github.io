// src/components/Navbar.tsx
'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (path === "resume") {
      window.open('https://cameronstorer.com/resume.pdf', '_blank');
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <nav className="relative mt-[60px] flex flex-col items-center justify-center"> {/* Added relative to position the toolbar */}
      <Link href="https://cameronstorer.com" 
            className="inline-block no-underline text-[var(--titleColor)] text-5xl md:text-[475%] 
            font-serif font-bold p-0 m-0 hover:text-[var(--titleHoverColor)] cursor-pointer 
            transition-colors duration-160">
          Cameron Storer
      </Link>

      {/* Toolbar Container */}
      <div className="relative mb-[60px] w-[35%] min-w-[600px] 
      max-w-[700px] h-[3vh] min-h-[20px]  border 
      border-[var(--foreground)] rounded-3xl overflow-hidden grid grid-cols-4 
      transition-all duration-400 hover:h-[4vh]">
        {/* Toolbar Buttons */}
        <button
          id="projects"
          className=" text-[var(--foreground)]-[1.9*2%] font-sans 
          font-bold md:text-lg flex items-center justify-center border-none 
          h-full min-h-[20px] m-0 p-1 rounded-l-3xl transition-all duration-400 hover:cursor-pointer 
          hover:h-full hover:scale-115 hover:z-10 hover:bg-[var(--titleColor)]"
          onClick={() => handleNavigation('projects')} >
          Projects
        </button>
        <button
          id="experience"
          className=" text-[var(--foreground)]-[1.9*2%] font-sans 
          font-bold md:text-lg flex items-center justify-center border-none 
          h-full min-h-[20px] m-0 p-1 transition-all duration-400 hover:cursor-pointer 
          hover:h-full hover:scale-115 hover:z-10 hover:bg-[var(--titleColor)]"
          onClick={() => handleNavigation('experience')} >
          Experience
        </button>
        <button
          id="contact-me"
          className=" text-[var(--foreground)]-[1.9*2%] font-sans 
          font-bold md:text-lg flex items-center justify-center border-none 
          h-full min-h-[20px] m-0 p-1 transition-all duration-400 hover:cursor-pointer 
          hover:h-full hover:scale-115 hover:z-10 hover:bg-[var(--titleColor)]"
          onClick={() => handleNavigation('contact-me')} >
          Contact Me
        </button>
        <button
          id="resume"
          className=" text-[var(--foreground)]-[1.9*2%] font-sans 
          font-bold md:text-lg flex items-center justify-center border-none
          h-full min-h-[20px] m-0 p-1 rounded-r-3xl transition-all duration-400 hover:cursor-pointer 
          hover:h-full hover:scale-115 hover:z-10 hover:bg-[var(--titleColor)]"
          onClick={() => handleNavigation('resume')} >
          Resume
        </button>
      </div>
    </nav>
  );
}