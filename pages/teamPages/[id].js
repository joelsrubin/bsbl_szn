import styles from '../../styles/Home.module.css';
import Layout from '../../layout/layout.js';
import { filterTeams, filterPitchers, filterPositionPlayers } from '../utils/index.js';


export const getStaticPaths = async () => {

  const res = await fetch('http://localhost:3000/api/hello')
    .then(result => result.json())
    .then(data => filterTeams(data));

  const paths = res.map((team, i) => {
    return {
      params: {
        id: team.id.toString(),

      }
    };
  });

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/team?id=${id}`);
  let data = await res.json();
  const res2 = await fetch(`http://localhost:3000/api/roster?id=${id}`);
  let roster = await res2.json();



  return {
    props: {
      team: data.teams[0],
      roster: roster.roster
    }
  };

};

function Details({ team, roster }) {



  return (
    <Layout>
      <div className={styles.smallGrid}>
        <h1 className={styles.card}>{team.name}</h1>
        <h2>Roster:</h2>
        <div className={styles.smallGridRow}>

          <ul className={styles.ul}>
            <strong>Pitchers:</strong>
            {filterPitchers(roster).map(player => <li className={styles.card} key={player.person.id}>{player.person.fullName}</li>)}
          </ul>
          <ul className={styles.ul}>
            <strong>Position Players:</strong>
            {filterPositionPlayers(roster).map(player => <li className={styles.card} key={player.person.id}>{player.person.fullName}</li>)}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Details;