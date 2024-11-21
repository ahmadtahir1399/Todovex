"use client";
import { Navbar } from '@/components/layout/Navbar'
import { Header } from '@/components/home/Header'
import { Features } from '@/components/home/Features'
import Footer  from '@/components/layout/Footer'


export default function Home() {
  return (
    <div >
       <div className="min-h-screen bg-gray-50 dark:bg-[#36393e] text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Features />
      </main>
      <Footer />
    </div>
     
    </div>
  );
}
