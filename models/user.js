'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nis: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    born: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};