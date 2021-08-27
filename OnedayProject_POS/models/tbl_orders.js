module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "tbl_orders",
    {
      o_seq: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      o_table: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      o_pcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      o_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      o_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      o_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      o_buyer: {
        type: DataTypes.STRING(30),
      },
    },
    { timestamps: false }
  );
  return orders;
};
