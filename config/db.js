import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "productsdb",
  },
});

export { pool };

// import mysql from 'serverless-mysql';
// const db = mysql({
//   config: {
//     host: process.env.MYSQL_HOST,
//     port: process.env.MYSQL_PORT,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD
//   }
// });
// export default async function excuteQuery({ query, values }) {
//   try {
//     const results = await db.query(query, values);
//     await db.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }

// // env.local
// MYSQL_HOST= 127.0.0.1
// MYSQL_PORT= 3306
// MYSQL_DATABASE= posts
// MYSQL_USER= {user}  //user here
// MYSQL_PASSWORD= {password}  //password here
