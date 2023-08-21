import { Request, Response } from "express";

export const login = (req: Request, res: Response): Response => {
  const user = req.body.user;
  const pass = req.body.pass;
  console.log(`Login.. ${user}`);

  if (user === "yo" && pass === "psss") {
    return res.json("okidoki");
  } else {
    return res.status(400).json("nomirey");
  }
};
