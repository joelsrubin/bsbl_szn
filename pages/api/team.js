const MLBStatsAPI = require('mlb-stats-api');
const mlbStats = new MLBStatsAPI();

export default async (req, res) => {
  const response = await mlbStats.getTeam();
  res.send(response.data.teams);
};