import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wrld | MXB Bot',
  description: 'The only MXB Bot you will ever need.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navBar}>
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
        </nav>
        {children}
        <footer className="mt-8 text-center">
        <p>&copy; 2023 Wrld. All rights reserved.</p>
        <p>idk why the footer is up here</p>
      </footer>
      </body>
    </html>
  )
}
