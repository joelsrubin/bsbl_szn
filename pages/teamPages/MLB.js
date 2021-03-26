import Layout from '../../layout/layout.js';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

export const getStaticProps = async () => {
  const filterTeams = (data) => {
    let mlb = data.filter((team) => {
      if (team.league.id === 103 || team.league.id === 104) {
        return true;
      }
    });
    return mlb;
  };

  const res = await fetch('http://localhost:3000/api/hello')
    .then(result => result.json())
    .then(data => filterTeams(data));

  return {
    props: {
      teams: res
    }
  };
};





function MajorLeague({ teams }) {

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

export default MajorLeague;
// {teams.map(team => (<Team key={team.name} team={team} />))}