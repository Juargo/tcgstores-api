import { DataProduct } from "../model/store";
import nodemailer from "nodemailer";

export async function sendMail(
  store: string,
  productos: DataProduct[]
): Promise<void> {
  const transporter = nodemailer.createTransport({
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

  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "jorgeretamalaburto@gmail.com", // list of receivers
    subject: `${store} NUEVOS ✔`, // Subject line
    // text: textFormat, // plain text body
    html: HTML, // html body
  });
}

function JSONTOHTML(data: DataProduct[]) {
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

export default sendMail;
