import { mlbStats } from './hello.js';

export default async (req, res) => {
  let id = req.query.id;
  const response = await mlbStats.getTeams({ params: { teamId: id } });
  res.send(response.data);
};