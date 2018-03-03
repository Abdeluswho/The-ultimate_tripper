module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
    },
  },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique :true,
      validate: {
        isEmail:{ 
            msg: "Please enter a valid email (jhon@abz.net)"
          }
        
      }
      
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
        is: ["^[a-z]+$",'i']
      }
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Trip, {
      foreingKey: "id"
    });
  };
  return User;
};