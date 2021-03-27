import Layout from '../../layout/layout.js';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { filterTeams } from '../utils/index.js';

function Leagues() {

  return (
    <Layout>
      <div>
        <div className={styles.grid}>
          <ul className={styles.ul}>
            <li className={styles.card}>
              <Link href="/teamPages/AL">
                <a>American League</a>
              </Link>
            </li>
            <li className={styles.card}>
              <Link href="/teamPages/NL">
                <a>National League</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Leagues;
