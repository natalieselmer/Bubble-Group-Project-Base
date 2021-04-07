export default (sequelize, DataTypes) => {
  const PlayersTable = sequelize.define(
    'players',
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      player_name: {
        type: DataTypes.STRING
      },
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ppg: {
        type: DataTypes.STRING
      },
      assists: {
        type: DataTypes.STRING
      },
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return PlayersTable;
};
