"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class detailArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detailArticle.belongsTo(models.article, {
        foreignKey: "articleId",
      });
    }
  }
  detailArticle.init(
    {
      daId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "article",
          key: " articleId",
        },
      },
      bahan: DataTypes.STRING,
      image: {
        type: DataTypes.STRING(100),
        defaultValue: "/public/article/Capture11.png",
      },
    },
    {
      sequelize,
      modelName: "detailArticle",
      tableName: "detailArticles",
    }
  );
  return detailArticle;
};
