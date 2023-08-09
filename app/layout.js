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
          <nav className={styles.navBar}>
            <ul className={styles.navList}>
              <li className={styles.logoItem}>
                <Link href="/">
                  <img
                    src="https://cdn.discordapp.com/avatars/1123436273756033074/dd4f4dbc252c76b0e25db45557e7a016.png?size=1024"
                    alt="Logo"
                    className={styles.logoImage}
                  />
                </Link>
              </li>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href="/profile">Profile</Link>
                </li>
              </ul>
            </ul>
          </nav>
          <main className={styles.mainContent}>
            {children}
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2023 Wrld. All rights reserved.</p>06/29/2023 
          </footer>
        </div>
      </body>
    </html>
  );
}