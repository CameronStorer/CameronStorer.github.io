// src/app/layout.tsx
import '../globals.css'; // This imports your global Tailwind CSS
import Navbar from '@/components/Navbar'; // Use the import alias we set up
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cameron Storer - Computer Scientist Portfolio',
  description: 'Cameron Storer\'s personal portfolio showcasing projects, experience, and contact information.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head> content like favicon handled by Next.js's public folder and metadata */}
      <body>
        {/* <Navbar /> */}
        <main className="min-h-screen"> {/* A main area for page content, min-h-screen ensures footer is at bottom on short pages */}
          {children} {/* This is where your page.tsx content will be rendered */}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}