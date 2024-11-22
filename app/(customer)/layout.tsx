'use client';
import React from 'react';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full ">
      <div className="w-full">
        <Navbar />
          {children}
          <div className="">
            <Footer />
          </div>
      </div>
    </div>
  );
}
