// 게시판의 댓글을 저장할 table
module.exports = (sequelize, DataTypes) => {
  const replay = sequelize.define("tbl_replay", {
    r_postId: { type: DataTypes.INTEGER, allowNull: false },
    r_writer: { type: DataTypes.STRING, allowNull: false },
    r_content: { type: DataTypes.TEXT, allowNull: false },
  });

  // tbl_replay 와 tbl_bbs 를 FK 설정을 수행하기
  replay.associate = (models) => {
    replay.belongsTo(models.tbl_bbs);
  };
  return replay;
};
