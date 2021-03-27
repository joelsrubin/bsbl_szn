import { mlbStats } from './hello.js';

export default async (req, res) => {
  let id = req.query.id;
  const response = await mlbStats.getTeamRoster({ pathParams: { teamId: id } });
  res.send(response.data);
};