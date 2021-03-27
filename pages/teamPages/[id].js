import styles from '../../styles/Home.module.css';
import Layout from '../../layout/layout.js';
import { filterTeams } from '../utils/index.js';


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
      <div className={styles.grid}>
        <h1 className={styles.card}>{team.name}</h1>
        <h2>Roster:</h2>
        <ul className={styles.ul}>
          {roster.map(player => <li key={player.person.id}>{player.person.fullName}</li>)}
        </ul>
      </div>
    </Layout>
  );
}

export default Details;