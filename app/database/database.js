import Sequelize from 'sequelize';
import dotenv from 'dotenv';
//dotenv.config({path: `.env.${process.env.NODE_ENV}`})
dotenv.config();

let database, user, password, host;

if (process.env.NODE_ENV == "production") {
    database = process.env.DB_DATABASE ;
    user = process.env.DB_USER;
    password = process.env.DB_PASSWORD;
    host = process.env.DB_HOST;
}else {
    database ="db_bootcamp";
    user = "postgres";
    password ="123456";
    host ="localhost";
} 
console.log(host);

/* const database = process.env.DB_DATABASE ;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST; */

const sequelize = new Sequelize(
    database,
    user,
    password,
    {
        host: host,
        dialect: "postgres",
    }
);

export default sequelize;