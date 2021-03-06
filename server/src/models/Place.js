module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define("Place", {
    pid: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    numberOfRatings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    searchedBefore: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Place.associate = function(models) {
    Place.hasMany(models.Tag, {
      foreignKey: "pid"
    });
  };
  return Place;
};
