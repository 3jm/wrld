import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './layout.module.css'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wrld | MXB Bot',
  description: 'The only MXB Bot you will ever need.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.pageContainer}>
        <nav className="flex justify-between items-center py-4 px-6 bg-zinc-950">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="https://cdn.discordapp.com/avatars/1123436273756033074/dd4f4dbc252c76b0e25db45557e7a016.png?size=1024"
                alt="Logo"
                className="h-12 w-auto mr-4"
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
              <Link href="/profile" className="text-white hover:text-zinc-300 transition">Profile</Link>
            </li>
          </ul>
        </nav>

          <main className={styles.mainContent}>
            {children}
          </main>
          <footer className='py-5 bg-[#101010] text-center flex flex-wrap justify-between'>
            <div className="w-full md:w-1/3 p-4 flex items-center">
              <img src="/assets/logo.png" alt="Logo" className="mr-6 ml-12" style={{ width: '100px', height: 'auto' }} />
              <div className="text-left">
                <p className="font-bold text-white">Wrld</p>
                <p className="text-zinc-500">06/29/2023</p>
                <p className="text-zinc-500">Owned by <span className='text-[#b899ff]'>Blind</span></p>
                <p className="text-zinc-500">@ 2023 <span className='text-[#b899ff]'>Wrld</span>. All rights reserved.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <p className="font-bold text-white">Contact</p>
              <p className="text-zinc-500">Discord: <span className='text-[#b899ff]'>@onlyblind</span></p>
              <p className="text-zinc-500">Server: <a href='https://discord.gg/2vEqW5GfHU' className="underline" target="_blank" rel="noopener noreferrer">discord.gg/2vEqW5GfHU</a></p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <p className="font-bold text-white">Links</p>
              <p className="text-zinc-500">
                <a href="https://pepiti.com/" className="underline" target="_blank" rel="noopener noreferrer">https://pepiti.com/</a>
              </p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}