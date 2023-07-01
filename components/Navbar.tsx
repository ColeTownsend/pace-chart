import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link href="/">
          <a className={styles.navbarBrand}>Next.js App</a>
        </Link>
        <div className={styles.navbarMenu}>
          <Link href="/distance">
            <a className={styles.navbarItem}>Distance</a>
          </Link>
          <Link href="/duration">
            <a className={styles.navbarItem}>Duration</a>
          </Link>
          <Link href="/pace">
            <a className={styles.navbarItem}>Pace</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;