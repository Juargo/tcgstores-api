"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_routers_1 = __importDefault(require("./routes/home.routers"));
const auth_routers_1 = __importDefault(require("./routes/auth.routers"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// settings
const app = (0, express_1.default)();
app.set("port", 4000);
app.use(express_1.default.json({ limit: "20mb" }));
app.use(express_1.default.urlencoded({ extended: false, limit: "20mb" }));
// middlewares
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
// routes
app.use("/api/", home_routers_1.default);
app.use("/auth/", auth_routers_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map