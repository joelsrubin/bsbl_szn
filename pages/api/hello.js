// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const MLBStatsAPI = require('mlb-stats-api');
const mlbStats = new MLBStatsAPI();


export default async (req, res) => {
  const response = await mlbStats.getTeams();
  res.send(response.data.teams);
};
