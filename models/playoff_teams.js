export default (sequelize, DataTypes) => {
  const PlayoffTeams = sequelize.define(
    'playoff_teams',
    {
      seed_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      conference: {
        type: DataTypes.STRING
      },
      wins: {
        type: DataTypes.INTEGER
      },
      losses: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return PlayoffTeams;
};
