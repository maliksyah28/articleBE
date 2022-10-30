"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      judulBacaan: {
        type: Sequelize.STRING(100),
      },
      bahanBacaan: {
        type: Sequelize.STRING(1000),
      },
      imageBacaan: {
        type: Sequelize.STRING(100),
        defaultValue: "/public/article/capture11.png",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.literal(
        //   "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        // ),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("articles");
  },
};
