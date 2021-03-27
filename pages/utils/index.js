export const filterTeams = (data) => {
  let mlb = data.filter((team) => {
    if (team.league.id === 103 || team.league.id === 104) {
      return true;
    }
  });
  return mlb;
};

export const filterAL = (data) => {
  let al = data.filter((team) => {
    if (team.league.id === 103) {
      return true;
    }
  });
  return al;
};

export const filterNL = (data) => {
  let nl = data.filter((team) => {
    if (team.league.id === 104) {
      return true;
    }
  });
  return nl;
};

export const filterPitchers = (data) => {
  let pitchers = data.filter((player) => {
    if (player.position.name === "Pitcher") {
      return true;
    }
  });
  return pitchers;
};

export const filterPositionPlayers = (data) => {
  let positionPlayers = data.filter((player) => {
    if (player.position.name !== "Pitcher") {
      return true;
    }
  });
  return positionPlayers;
};


function Utils() {
  return (
    <div>loading...</div>
  );
}

export default Utils;