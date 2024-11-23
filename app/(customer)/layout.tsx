import React from "react";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Providers } from "../Providers";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <Providers session={session}>
      <div className="w-full">
        <Navbar />
        {children}
        <div className="">
          <Footer />
        </div>
      </div>
    </Providers>
  );
}
