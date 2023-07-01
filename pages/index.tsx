import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainColumn from '../components/MainColumn';
import MobileMenu from '../components/MobileMenu';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContent}>
        <Sidebar />
        <MainColumn />
        <Sidebar />
      </div>
      <MobileMenu />
    </div>
  );
}

export async function getStaticProps() {
  // Here you can fetch data and pass it as props to the page
  // This function runs at build time and the page will be statically generated with the fetched data

  return {
    props: {}, // will be passed to the page component as props
    revalidate: 1, // enables Incremental Static Regeneration, re-generate the page every 1 second
  };
}