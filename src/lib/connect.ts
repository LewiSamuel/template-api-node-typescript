/**
 * Import modules
 */
import 'dotenv/config';
import { Sequelize } from "sequelize";

/**
 * Conexao com o BD via string
 * const sequelize = new Sequelize(process.env.URL_CON_DB);
 */

/**
 * CONNECTION DB
 */
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}