"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.hasMany(models.detailArticle, {
        foreignKey: "articleId",
      });
      article.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  article.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      judulBacaan: {
        type: DataTypes.STRING(100),
      },
      bahanBacaan: {
        type: DataTypes.STRING(1000),
      },
      imageBacaan: {
        type: DataTypes.STRING(100),
        defaultValue: "/public/article/capture11.png",
      },
      shortDesc: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      modelName: "article",
      tableName: "articles",
    }
  );
  return article;
};
