'use client';

import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
