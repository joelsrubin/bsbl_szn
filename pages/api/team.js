const MLBStatsAPI = require('mlb-stats-api');
const mlbStats = new MLBStatsAPI();

export default async (req, res) => {
  console.log(req);
  const id = req.params.id;
  const response = await mlbStats.getTeams({ params: { teamId: id } });

};