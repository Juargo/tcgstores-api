import mysql from "mysql";

let config = {};
if (process.env.NODE_ENV === "development") {
  config = {
    connectionLimit: 100, //important
    host: "localhost",
    port: "3307",
    user: "root",
    password: "pass",
    database: "STORES",
    charset: "utf8",
    collation: "utf8mb4_general_ci",
  };
}

if (process.env.NODE_ENV === "production") {
  config = {
    connectionLimit: 100, //important
    host: "database-stores",
    user: "root",
    password: "pass",
    database: "STORES",
    charset: "utf8",
    collation: "utf8mb4_general_ci",
  };
}

// const Connect = async (): Promise<mysql.Connection> =>
//   new Promise<mysql.Connection>((resolve, reject) => {
//     const connection = mysql.createPool(config);

//     connection.connect((error) => {
//       if (error) {
//         console.error("CONNECT ERR", error);
//         reject(error);
//         return;
//       }

//       resolve(connection);
//     });
//   });

const Query = async <T>(query: string): Promise<T> =>
  new Promise((resolve, reject) => {
    const pool = mysql.createPool(config);
    pool.query(query, (error, result) => {
      if (error) {
        console.error("QUERY ERR", error);
        reject(error);
        return;
      }
      pool.end();
      resolve(result);
    });
  });

export { Query };
