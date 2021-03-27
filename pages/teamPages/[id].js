import styles from '../../styles/Home.module.css';
import Layout from '../../layout/layout.js';
import { filterTeams, filterTeam } from '../utils';
import axios from 'axios';

export const getStaticPaths = async () => {

  const res = await fetch('http://localhost:3000/api/hello')
    .then(result => result.json())
    .then(data => filterTeams(data));

  const paths = res.map((team, i) => {
    return {
      params: {
        id: team.id.toString()
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
  const res = await fetch('http://localhost:3000/api/hello');
  let data = await res.json();
  data = filterTeam(data, Number(id));

  return {
    props: {
      team: data
    }
  };

};

function Details({ team }) {
  console.log(team);
  return (
    <Layout>
      <div className={styles.grid}>
        <h1>{team[0].name} Page</h1>
        <h3>
          {team[0].venue.name}
        </h3>
      </div>
    </Layout>
  );
}

export default Details;