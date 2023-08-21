import app from "./app";
import http from "http";
import https from "https";
import fs from "fs";
console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "development") {
const httpServer = http.createServer(app);

httpServer.listen(3001, () => {
  console.log("HTTP Server running on port 3001");
});
// }

// if (process.env.NODE_ENV === "production") {
 // let port = 3000;
  //if (process.env.PORT) {
   // port = +process.env.PORT;
  //}

  // Certificate
  //const privateKey = fs.readFileSync(
   // "/etc/letsencrypt/live/pokebuy.co/privkey.pem",
    //"utf8"
  //);
  //const certificate = fs.readFileSync(
   // "/etc/letsencrypt/live/pokebuy.co/cert.pem",
   // "utf8"
  //);
  //const ca = fs.readFileSync(
  //  "/etc/letsencrypt/live/pokebuy.co/chain.pem",
   // "utf8"
  //);

  //const credentials = {
   // key: privateKey,
    //cert: certificate,
   // ca: ca,
  //};

  //const httpsServer = https.createServer(credentials, app);

  //httpsServer.listen(port, () => {
    //console.log(`HTTPS Server running on port ${port}`);
  //});
//}
