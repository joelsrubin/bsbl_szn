import Head from 'next/head';
import Link from 'next/link';
import Layout from '../layout/layout.js';
import styles from '../styles/Home.module.css';

import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <Layout>
      <div>
        <div className={styles.grid}>
          <ul className={styles.ul}>
            <li className={styles.card}>
              <Link href="/teamPages/Leagues">
                <a>Major League Baseball</a>
              </Link>
            </li>
            <li className={styles.card}>
              <Link href="/">
                <a>Minor League Baseball</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
