import styles from '../../styles/Home.module.css';
import Layout from '../../layout/layout.js';

export const getStaticPaths = async () => {
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
  console.log("here");
  const id = context.params.id;
  console.log("context: ", context);
  const res = await fetch('http://localhost:3000/api/team/' + id);
  const data = await res.json();
  return {
    props: {
      team: data,
    }
  };
};

function Details({ team }) {
  return (
    <Layout>
      <div className={styles.grid}>
        <h1>{team.team} Page</h1>
      </div>
    </Layout>
  );
}

export default Details;