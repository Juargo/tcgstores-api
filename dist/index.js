"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "development") {
const httpServer = http_1.default.createServer(app_1.default);
httpServer.listen(3001, () => {
    console.log("HTTP Server running on port 80");
});
// }
if (process.env.NODE_ENV === "production") {
    let port = 3000;
    if (process.env.PORT) {
        port = +process.env.PORT;
    }
    // Certificate
    const privateKey = fs_1.default.readFileSync("/etc/letsencrypt/live/pokebuy.co/privkey.pem", "utf8");
    const certificate = fs_1.default.readFileSync("/etc/letsencrypt/live/pokebuy.co/cert.pem", "utf8");
    const ca = fs_1.default.readFileSync("/etc/letsencrypt/live/pokebuy.co/chain.pem", "utf8");
    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca,
    };
    const httpsServer = https_1.default.createServer(credentials, app_1.default);
    httpsServer.listen(port, () => {
        console.log(`HTTPS Server running on port ${port}`);
    });
}
//# sourceMappingURL=index.js.map