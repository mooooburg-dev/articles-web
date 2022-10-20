// db.js
import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: 3306, //process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    multipleStatements: true,
    typeCast: function (field, next) {
      if (field) {
        return field.string();
      }
      return next();
    },
  },
});

export default async function excuteQuery({ query, values }: any) {
  // TODO: try catch 변경
  const results: any[] = await db.query(query, values);
  await db.end();
  return results;

  // try {
  //   const results: any[] = await db.query(query, values);
  //   await db.end();
  //   return results;
  // } catch (error) {

  //   return { error };
  // }
}
