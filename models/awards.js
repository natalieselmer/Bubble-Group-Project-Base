export default (sequelize, DataTypes) => {
    const Awards = sequelize.define(
      'awards',
      {
        award_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
        award_name: {
          type: DataTypes.STRING
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Awards;
  }; 
