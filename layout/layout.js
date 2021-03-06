import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          BaseBall
      </title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>Baseball</a>
        </Link>
        <Link href="/teamPages/Leagues">
          <a>Leagues</a>
        </Link>
      </header>
      <main className={styles.background}>
        {children}
      </main>
      <footer className={styles.header}>

      </footer>
    </>
  );
}