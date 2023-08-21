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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
function sendMail(store, productos) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            service: "gmail",
            auth: {
                user: "notificationstore25",
                pass: "ZXCVasdf123#",
            },
        });
        const textFormat = JSONTOHTML(productos);
        const HTML = `<h2>NUEVOS</h2> ${textFormat}`;
        yield transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: "jorgeretamalaburto@gmail.com",
            subject: `${store} NUEVOS ✔`,
            // text: textFormat, // plain text body
            html: HTML, // html body
        });
    });
}
exports.sendMail = sendMail;
function JSONTOHTML(data) {
    let res = "";
    data.forEach((item) => {
        res = `${res}
      <div>
      <a href=${item.link} target="_blank" rel="noreferrer">
      <div >
        <img src=${item.img} width="100px" />
        <div >
          <span>${item.nombre}</span>
        </div>
      </div>
      </a>
      </div>`;
    });
    return res;
}
exports.default = sendMail;
//# sourceMappingURL=sendmail.module.js.map