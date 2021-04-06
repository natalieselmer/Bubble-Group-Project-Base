/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD bubble API!');
});

/// /////////////////////////////////
/// ////bubble player Endpoints////////
/// /////////////////////////////////
router.get('/stats', async (req, res) => {
  try {
    const players = await db.PlayersTable.findAll();
    const reply = players.length > 0 ? { data: players } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/stats/:player_id', async (req, res) => {
  try {
    const player = await db.PlayersTable.findAll({
      where: {
        player_id: req.params.player_id
      }
    });

    res.json(player);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/stats', async (req, res) => {
  const players = await db.PlayersTable.findAll();
  const currentId = (await players.length) + 1;
  try {
    const newplayer = await db.PlayersTable.create({
      player_id: currentId,
      player_name: req.body.player_name,
      position_id: req.body.position_id,
      ppg: req.body.ppg,
      assists: req.body.assists,
      team_id: req.body.team_id
    });
    res.json(newplayer);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/stats/:player_id', async (req, res) => {
  try {
    await db.PlayersTable.destroy({
      where: {
        player_id: req.params.player_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/stats', async (req, res) => {
  try {
    await db.PlayersTable.update(
      {
        player_name: req.body.player_name,
        position_id: req.body.position_id,
        ppg: req.body.ppg,
        assists: req.body.assists,
        team_id: req.body.team_id
      },
      {
        where: {
          player_id: req.body.player_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Teams Endpoints//////////
/// /////////////////////////////////
router.get('/Teams', async (req, res) => {
  try {
    const teams = await db.playoff_teams.findAll();
    res.json(teams);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/teams/:team_id', async (req, res) => {
  try {
    const teams = await db.playoff_teams.findAll({
      where: {
        team_id: req.params.team_id
      }
    });
    res.json(teams);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/Teams', async (req, res) => {
  try {
    await db.playoff_teams.update(
      {
        team_id: req.body.team_id,
        seed_id: req.body.seed_id,
        conference: req.body.conference,
        wins:req.body.wins,
        losses:req.body.losses
      },
      {
        where: {
          team_id: req.body.team_id
        }
      }
    );
    res.send('Team Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;
