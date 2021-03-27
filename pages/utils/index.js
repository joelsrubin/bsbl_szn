export const filterTeams = (data) => {
  let mlb = data.filter((team) => {
    if (team.league.id === 103 || team.league.id === 104) {
      return true;
    }
  });
  return mlb;
};

export const filterTeam = (data, id) => {

  let team = data.filter((team) => {
    if (team.id === id) {
      return true;
    }
  });

  return team;
};

function Utils() {
  return (
    <div>loading...</div>
  );
}

export default Utils;