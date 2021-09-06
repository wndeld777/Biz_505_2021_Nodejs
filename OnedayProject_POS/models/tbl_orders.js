module.exports = (seq, DataTypes) => {
  const orders = seq.define(
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
      o_pay: {
        type: DataTypes.STRING(1),
      },
      o_pay_qty: {
        type: DataTypes.STRING(10),
      },
    },
    { timestamps: false }
  );
  orders.associate = (models) => {
    orders.belongsTo(models.tbl_product, { foreignKey: "o_pcode" });
  };

  return orders;
};
