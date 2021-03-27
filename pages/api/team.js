import { mlbStats } from './hello.js';

export default async (req, res) => {
  console.log("hello");
  let id = req.body;
  id = 104;
  console.log(id);
  const response = await mlbStats.getTeams({ params: { teamId: 104, leagueId: 104, leagueListid: 104 } });
  console.log(response.data);
};