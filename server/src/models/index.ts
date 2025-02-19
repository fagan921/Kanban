import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";
import { UserFactory } from "./user.js";
import { TicketFactory } from "./ticket.js";

const isProduction = process.env.NODE_ENV === "production";

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
      dialect: "postgres",
      dialectOptions: isProduction
        ? {
            ssl: {
              require: true, // ✅ Forces SSL (Required for Render)
              rejectUnauthorized: false, // ✅ Avoids certificate issues
            },
          }
        : {},
    })
  : new Sequelize(process.env.DB_NAME || "", process.env.DB_USER || "", process.env.DB_PASSWORD, {
      host: "localhost",
      dialect: "postgres",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);

User.hasMany(Ticket, { foreignKey: "assignedUserId" });
Ticket.belongsTo(User, { foreignKey: "assignedUserId", as: "assignedUser" });

export { sequelize, User, Ticket };