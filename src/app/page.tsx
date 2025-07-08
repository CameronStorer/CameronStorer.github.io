// src/app/page.tsx
import Image from 'next/image'; // For optimized images
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center px-4 w-[68%] m-auto">
      <h1 className="text-4xl md:text-[220%] font-normal mb-[10px] text-[var(--layerHeader)]">
        About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] items-center md:items-start 
      md:space-x-8 max-w-4xl rounded-lg">
        {/* Optimized Image Component */}
        <Image
          src="/portrait.png" // Image from the public directory
          alt="Cameron Storer Portrait"
          width={250} // Specify width and height for optimization
          height={250}
          className="border rounded-[130] shadow-md md:mb-0  transition-transform duration-700 hover:transform-[scale(1.09)]" 
          />
        <p className="text-[2*2%] leading-relaxed text-center md:text-left">
          I'm Cameron Storer, a 2nd year Computer Science student enrolled at{' '}
          <Link href="https://latech.edu" target="_blank" rel="noopener noreferrer" 
          className="text-[var(--layerHeader)] hover:underline font-semibold">
          Louisiana Tech University
          </Link>. Some major-specific courses I have completed include{' '}
          <span className="text-[var(--layerHeader)] font-semibold">Data Structures</span> and{' '}
          <span className="text-[var(--layerHeader)] font-semibold">Systems Programming</span>.
          Furthermore, I am proficient in the languages{' '}
          <span className="text-[var(--layerHeader)] font-semibold">Python</span> and{' '}
          <span className="text-[var(--layerHeader)] font-semibold">Java</span>.
          <br /><br />
          I am pursuing a bachelor's degree and will likely choose a concentration in{' '}
          <span className="text-[var(--layerHeader)] font-semibold">cyber security</span> or{' '}
          <span className="text-[var(--layerHeader)] font-semibold">software development</span>.
          Aside from programming, some of my hobbies include fishing, jogging, gaming, and sketching.
        </p>
      </div>
    </section>
  );
}