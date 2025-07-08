// src/app/page.tsx
import Image from 'next/image'; // For optimized images

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center mt-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 max-w-4xl bg-white p-6 rounded-lg shadow-xl">
        {/* Optimized Image Component */}
        <Image
          src="/portrait.png" // Image from the public directory
          alt="Cameron Storer Portrait"
          width={250} // Specify width and height for optimization
          height={250}
          className="rounded-lg shadow-md mb-6 md:mb-0"
        />
        <div className="flex flex-col justify-center items-center md:items-start text-gray-700">
          <p className="text-lg leading-relaxed text-center md:text-left">
            I'm Cameron Storer, a 2nd year Computer Science student enrolled at{' '}
            <a href="https://latech.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
              Louisiana Tech University
            </a>. Some major-specific courses I have completed include{' '}
            <span className="text-blue-600 font-semibold">Data Structures</span> and{' '}
            <span className="text-blue-600 font-semibold">Systems Programming</span>.
            Furthermore, I am proficient in the languages{' '}
            <span className="text-blue-600 font-semibold">Python</span> and{' '}
            <span className="text-blue-600 font-semibold">Java</span>.
            <br /><br />
            I am pursuing a bachelor's degree and will likely choose a concentration in{' '}
            <span className="text-blue-600 font-semibold">cyber security</span> or{' '}
            <span className="text-blue-600 font-semibold">software development</span>.
            Aside from programming, some of my hobbies include fishing, jogging, gaming, and sketching.
          </p>
        </div>
      </div>
    </section>
  );
}