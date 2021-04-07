export default (sequelize, DataTypes) => {
    const Sponsors = sequelize.define(
      'sponsors',
      {
        sponsor_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        company: {
          type: DataTypes.STRING
        },
        industry: {
          type: DataTypes.STRING
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Sponsors;
  };
  