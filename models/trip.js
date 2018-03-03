module.exports = function (sequelize, DataTypes){
  var Trip = sequelize.define("Trip", {
    
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: true
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

