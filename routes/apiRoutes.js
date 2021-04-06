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
router.get('/player_stats', async (req, res) => {
  try {
    const players = await db.players_table.findAll();
    const reply = players.length > 0 ? { data: players } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/player_stats/:player_id', async (req, res) => {
  try {
    const player = await db.players_table.findAll({
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

router.post('/player_stats', async (req, res) => {
  const players = await db.players_table.findAll();
  const currentId = (await players.length) + 1;
  try {
    const newplayer = await db.players_table.create({
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

router.delete('/player_stats/:player_id', async (req, res) => {
  try {
    await db.players_table.destroy({
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

router.put('/player_stats', async (req, res) => {
  try {
    await db.players_table.update(
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

// /// /////////////////////////////////
// /// ////////Macros Endpoints/////////
// /// /////////////////////////////////
// router.get('/macros', async (req, res) => {
//   try {
//     const macros = await db.Macros.findAll();
//     res.send(macros);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// router.get('/macros/:meal_id', async (req, res) => {
//   try {
//     const meals = await db.Macros.findAll({
//       where: {
//         meal_id: req.params.meal_id
//       }
//     });
//     res.json(meals);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// router.put('/macros', async (req, res) => {
//   try {
//     // N.B. - this is a good example of where to use code validation to confirm objects
//     await db.Macros.update(
//       {
//         meal_name: req.body.meal_name,
//         meal_category: req.body.meal_category,
//         calories: req.body.calories,
//         serving_size: req.body.serving_size,
//         cholesterol: req.body.cholesterol,
//         sodium: req.body.sodium,
//         carbs: req.body.carbs,
//         protein: req.body.protein,
//         fat: req.body.fat
//       },
//       {
//         where: {
//           meal_id: req.body.meal_id
//         }
//       }
//     );
//     res.send('Successfully Updated');
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// /// /////////////////////////////////
// /// Dietary Restrictions Endpoints///
// /// /////////////////////////////////
// router.get('/restrictions', async (req, res) => {
//   try {
//     const restrictions = await db.DietaryRestrictions.findAll();
//     res.json(restrictions);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// router.get('/restrictions/:restriction_id', async (req, res) => {
//   try {
//     const restrictions = await db.DietaryRestrictions.findAll({
//       where: {
//         restriction_id: req.params.restriction_id
//       }
//     });
//     res.json(restrictions);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// /// //////////////////////////////////
// /// ///////Custom SQL Endpoint////////
// /// /////////////////////////////////
// //const macrosCustom = 'SELECT `bubble_player_Tracker`.`Meals`.`meal_id` AS `meal_id`,`bubble_player_Tracker`.`Meals`.`meal_name` AS `meal_name`,`bubble_player_Tracker`.`Macros`.`calories` AS `calories`,`bubble_player_Tracker`.`Macros`.`carbs` AS `carbs`,`bubble_player_Tracker`.`Macros`.`sodium` AS `sodium`,`bubble_player_Tracker`.`Macros`.`protein` AS `protein`,`bubble_player_Tracker`.`Macros`.`fat` AS `fat`,`bubble_player_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`bubble_player_Tracker`.`Meals`JOIN `bubble_player_Tracker`.`Macros`)WHERE(`bubble_player_Tracker`.`Meals`.`meal_id` = `bubble_player_Tracker`.`Macros`.`meal_id`)';
// //players select statements below
// const playerCustom = 'SELECT `team_18_nba_bubble`.`players_table`.`player_id` AS `player_id`,`team_18_nba_bubble`.`players_table.`player_name` AS `player_name`,team_18_nba_bubble`.`players_table.`position_id` AS `position_id`,team_18_nba_bubble`.`players_table.`ppg` AS `ppg`,team_18_nba_bubble`.`players_table.`assists` AS `assists`,team_18_nba_bubble`.`players_table.`team_id` AS `team_id`FROM(`bubble_player_Tracker`.`Meals`JOIN `bubble_player_Tracker`.`Macros`)WHERE(`bubble_player_Tracker`.`Meals`.`meal_id` = `bubble_player_Tracker`.`Macros`.`meal_id`)';
// //teams select statements below
// const teamCustom = 'SELECT `team_18_nba_bubble`.`playoff_teams`.`seed_id` AS `seed_id,`team_18_nba_bubble`.`playoff_teams`.`team_id` AS `team_id`, `team_18_nba_bubble`.`playoff_teams`.`conference` AS `conference`, `team_18_nba_bubble`.`playoff_teams`.`wins` AS `wins`,`team_18_nba_bubble`.`playoff_teams`.`losses` AS `losses`'
// router.get('/table/data', async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(macrosCustom, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// const mealMapCustom = `SELECT player_name,
//   position_id,
//   ppg,
//   assists,
//   meal_name
// FROM
//   Meals m
// INNER JOIN Meals_Locations ml 
//   ON m.meal_id = ml.meal_id
// INNER JOIN bubble_player d
// ON d.player_id = ml.player_id;`;
// router.get('/map/data', async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(mealMapCustom, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });
// router.get('/custom', async (req, res) => {
//   try {
//     const result = await db.sequelizeDB.query(req.body.query, {
//       type: sequelize.QueryTypes.SELECT
//     });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

export default router;
