module.exports = function (sequelize, DataTypes){
  var Trip = sequelize.define("Trip", {
    
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
   
  });

  Trip.associate = function (models) {
    Trip.belongsTo(models.User, {
      foreingKey: {
        allowNull: false
      }
    });
  };
  return Trip;
}

