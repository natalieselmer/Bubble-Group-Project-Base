export default (sequelize, DataTypes) => {
    const Endorsements = sequelize.define(
      'endorsements',
      {
        endorsement_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        sponsor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return Endorsements;
  };
  