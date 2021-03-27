import Layout from '../../layout/layout.js';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { filterAL } from '../utils/index.js';


export const getStaticProps = async () => {

  const res = await fetch('http://localhost:3000/api/hello');
  let data = await res.json();
  data = filterAL(data);

  return {
    props: {
      teams: data
    }
  };
};





function AmericanLeague({ teams }) {

  return (
    <Layout>
      <div className={styles.grid} >
        {teams.map((team, i) => (<Link key={team.name} href={`/teamPages/${team.id}`}>
          <div className={styles.card}><a>{team.name}</a></div>
        </Link>))}
      </div>
    </Layout>
  );
}

export default AmericanLeague;