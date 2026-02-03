// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // <--- 1. Import Footer

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. Add flex-col and min-h-screen to body */}
      <body className="antialiased flex flex-col min-h-screen">

        <Navbar />

        {/* 3. Wrap children in a div that grows to fill space */}
        <div className="flex-grow">
          {children}
        </div>

        <Footer /> {/* <--- 4. Add Footer at the bottom */}

      </body>
    </html>
  );
}