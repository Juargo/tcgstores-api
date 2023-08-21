"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const mysql_1 = __importDefault(require("mysql"));
let config = {};
if (process.env.NODE_ENV === "development") {
    config = {
        connectionLimit: 100,
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
        connectionLimit: 100,
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
const Query = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const pool = mysql_1.default.createPool(config);
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
});
exports.Query = Query;
//# sourceMappingURL=database.module.js.map