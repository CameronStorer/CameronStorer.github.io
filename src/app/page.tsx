// src/app/page.tsx
import Image from 'next/image'; // For optimized images
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="grid col-2 row-1 p-40">



      <Image alt="portrait" className="border rounded-[130] shadow-md
      md:mb-0 transition-transform duration-700 hover:transform-[scale(1.09)]" 
      src="/portrait.png" width={250} height={250}
      ></Image>


      <p className="m-0"> 
      I'm Cameron Storer, a 2nd year Computer Science student
      enrolled at Louisiana Tech University. Some major-specific
      courses I have completed include Data Structures and Systems
      Programming. Furthermore, I am proficient in the languages
      Python and Java.
      <br/><br/>
      I am pursuing a bachelor's degree and will likely choose a
      concentration in cyber security or software development.
      Aside from programming, some of my hobbies include fishing,
      jogging, gaming, and sketching. </p>



    </div>
  );
}