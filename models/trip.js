module.exports = function (sequelize, DataTypes){
  var Trip = sequelize.define("Trip", {
    usernameid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Trip.associate = function (models) {
    Trip.belongsTo(models.Trip, {
      foreingKey: {
        allowNull: false
      }
    });
  };
  return Trip;
}

