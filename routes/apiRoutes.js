/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD bubble API!');
});

/// /////////////////////////////////
/// ////Bubble player Endpoints////////
/// /////////////////////////////////
router.route('/player')
  .get(async (req, res) => {
    try {
      const players = await db.PlayersTable.findAll();
      const reply = players.length > 0 ? { data: players } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
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
  })
  .put(async (req, res) => {
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
  })
  .delete(async (req, res) => {
    try {
      await db.PlayersTable.destroy({
        where: {
          player_id: req.params.player_id,
          player_name: req.body.player_name,
          position_id: req.body.position_id,
          ppg: req.body.ppg,
          assists: req.body.assists,
          team_id: req.body.team_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

/// /////////////////////////////////
/// //// Endpoints for getting a specific id////////
/// /////////////////////////////////
router.route('/player/:player_id')
  .get(async (req, res) => {
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
  })
  .delete(async (req, res) => {
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

/// /////////////////////////////////
/// ////////Playoff Teams Endpoints//////////
/// /////////////////////////////////
router.route('/teams')
  .get(async (req, res) => {
    try {
      const teams = await db.PlayoffTeams.findAll();
      res.json(teams);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.PlayoffTeams.update(
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
  })
  .post(async (req, res) => {
    const teams = await db.PlayoffTeams.findAll();
    const currentId = (await players.length) + 1;
    try {
      const newteam = await db.PlayoffTeams.create({
        team_id: req.body.team_id,
        seed_id: req.body.seed_id,
        conference: req.body.conference,
        wins:req.body.wins,
        losses:req.body.losses
      });
      res.json(newteam);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

  /// /////////////////////////////////
/// ////////Sponsor Endpoints//////////
/// /////////////////////////////////
router.route('/sponsors')
.get(async (req, res) => {
  try {
    const sponsors = await db.Sponsors.findAll();
    res.json(sponsors);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

  /// /////////////////////////////////
/// ////////Endorsement Endpoints//////////
/// /////////////////////////////////
router.route('/endorsements')
.get(async (req, res) => {
  try {
    const endorsements = await db.Endorsements.findAll();
    res.json(endorsements);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Teams Endpoints (we only need this table for team_names column)//////////
/// /////////////////////////////////
router.route('/teamname')
  .get(async (req, res) => {
    try {
      const teamname = await db.Teams.findAll();
      res.json(teamname);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.Teams.update(
        {
          team_id: req.body.team_id,
          city: req.body.city,
          state: req.body.state,
          gm:req.body.gm,
          arena:req.body.arena,
          year_founded:req.body.year_founded,
          name:req.body.name
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
  })
  .post(async (req, res) => {
    const teamname = await db.Teams.findAll();
    const currentId = (await players.length) + 1;
    try {
      const newteamname = await db.Teams.create({
          team_id: req.body.team_id,
          city: req.body.city,
          state: req.body.state,
          gm:req.body.gm,
          arena:req.body.arena,
          year_founded:req.body.year_founded,
          name:req.body.name
      });
      res.json(newteamname);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });

 /// /////////////////////////////////
/// ////////Awards Endpoints//////////
/// /////////////////////////////////
router.route('/awards')
.get(async (req, res) => {
  try {
    const awards = await db.Awards.findAll();
    res.json(awards);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
export default router;