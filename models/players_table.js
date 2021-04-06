export default (sequelize, DataTypes) => {
  const players_table = sequelize.define(
    'Players Table',
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      player_name: {
        type: DataTypes.STRING,
      }
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
      ppg: {
        type: DataTypes.INTEGER,
      }
      assists: {
        type: DataTypes.STRING,
      }
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }       
    },
    
    { freezeTableName: true, timestamps: false }
  );
  return players_table;
};
