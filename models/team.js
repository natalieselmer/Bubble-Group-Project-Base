export default (sequelize, DataTypes) => {
  const Teams = sequelize.define(
    'team',
    {
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      gm: {
        type: DataTypes.STRING
      },
      arena: {
        type: DataTypes.STRING
      },
      year_founded: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Teams;
};
