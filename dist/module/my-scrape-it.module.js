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
exports.myScrapeIt = void 0;
const scrape_it_1 = __importDefault(require("scrape-it"));
function myScrapeIt(url, searching) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, scrape_it_1.default)({
            url,
            headers: {
                "User-agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36",
            },
        }, searching);
        console.log(result.data);
        return result.data;
    });
}
exports.myScrapeIt = myScrapeIt;
exports.default = myScrapeIt;
//# sourceMappingURL=my-scrape-it.module.js.map