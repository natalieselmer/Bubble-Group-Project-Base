export default (sequelize, DataTypes) => {
    const PositionsTable = sequelize.define(
      'positions',
      {
        position_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        position_name: {
          type: DataTypes.STRING,
        },
        position_description: {
          type: DataTypes.STRING,
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return PositionsTable;
  };
