// db.js
import mysql from 'serverless-mysql';

// MYSQL_HOST=pantagruel.cafe24.com
// MYSQL_PORT=3306
// MYSQL_DATABASE=pantagruel
// MYSQL_USER=pantagruel
// MYSQL_PASSWORD=^pass0912_

const db = mysql({
  config: {
    host: 'pantagruel.cafe24.com',
    port: 3306, //process.env.MYSQL_PORT,
    database: 'pantagruel',
    user: 'pantagruel',
    password: '^pass0912_',
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
