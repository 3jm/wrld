import './globals.css'
import Link from 'next/link'
import styles from './layout.module.css'
import React from 'react';


export const metadata = {
  title: 'Wrld | MXB Bot',
  description: 'The only MXB Bot you will ever need.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.pageContainer}>
        <nav className="flex justify-between items-center py-4 px-6 z-50">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="h-12 w-auto mr-4 rounded-full"
              />
            </Link>
          </div>
          <ul className="flex space-x-8 mr-4 text-lg">
            <li>
              <Link href="/" className="text-white hover:text-zinc-300 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-zinc-300 transition">About</Link>
            </li>
            <li>
              <Link href="/commands" className="text-white hover:text-zinc-300 transition">Commands</Link>
            </li>
          </ul>
        </nav>

        <main className={styles.mainContent}>
          {children}
        </main>
          
        <footer className='py-5 bg-[#0a0a0a] text-center z-50'>
          <div className="flex flex-wrap justify-between"> {/* Added margin for mobile */}
            <div className="w-full md:w-1/3 p-4 flex items-center">
              <img src="/assets/logo.png" alt="Logo" className="mr-6 ml-12 rounded-full" style={{ width: '100px', height: 'auto' }} />
              <div className="text-left">
                <p className="font-bold text-white">Wrld</p>
                <p className="text-zinc-500">06/27/2023</p>
                <p className="text-zinc-500">Owned by <span className='text-[#547db3]'>Blind</span></p>
                <p className="text-zinc-500">© 2023 <span className='text-[#547db3]'>Wrld</span>. All rights reserved.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <p className="font-bold text-white">Contact</p>
              <p className="text-zinc-500">Discord: <span className='text-[#547db3]'>@onlyblind</span></p>
              <p className="text-zinc-500 ">Server: <a href='https://discord.gg/2vEqW5GfHU' className="underline hover:text-[#547db3] transition duration-300" target="_blank" rel="noopener noreferrer">discord.gg/2vEqW5GfHU</a></p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <p className="font-bold text-white">Links</p>
              <p className="text-zinc-500">
                <a href="https://pepiti.com/" className="underline hover:text-[#547db3] transition duration-300" target="_blank" rel="noopener noreferrer">https://pepiti.com/</a>
                <br />
                <a href="https://mymxb.com/" className="underline hover:text-[#547db3] transition duration-300" target="_blank" rel="noopener noreferrer">https://MyMXB.com/</a>
              </p>
            </div>
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}