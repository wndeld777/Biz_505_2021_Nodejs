module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "tbl_product",
    {
      p_code: {
        type: DataTypes.STRING(5),
        primaryKey: true,
      },
      p_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      p_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      p_rem: {
        type: DataTypes.STRING(255),
      },
    },
    { timestamps: false }
  );
  return product;
};
