"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    console.log(`Login.. ${user}`);
    if (user === "yo" && pass === "psss") {
        return res.json("okidoki");
    }
    else {
        return res.status(400).json("nomirey");
    }
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map