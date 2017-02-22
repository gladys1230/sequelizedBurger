var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            dafaultValue: false
        },
        date:{
          type: Sequelize.DATE
        }
    }, {
      timestamps: false
    });
    return Burger;
};
