export const filterTeams = (data) => {
  let mlb = data.filter((team) => {
    if (team.league.id === 103 || team.league.id === 104) {
      return true;
    }
  });
  return mlb;
};


function Utils() {
  return (
    <div>loading...</div>
  );
}

export default Utils;