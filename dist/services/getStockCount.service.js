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
exports.getStockCount = void 0;
const my_scrape_it_module_1 = __importDefault(require("../module/my-scrape-it.module"));
function getStockCount(productos, searching_by) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < productos.length; i++) {
            const scrapeTMP = yield (0, my_scrape_it_module_1.default)(productos[i].link, searching_by);
            if (scrapeTMP.cantidad_script !== undefined) {
                const cantidad_script = scrapeTMP
                    .cantidad_script;
                // console.log("script");
                if (IsJsonString(cantidad_script)) {
                    // console.log("JSON");
                    productos[i].cantidad = +JSON.parse(cantidad_script).quantity;
                }
                else {
                    // console.log("JS");
                    const regexpNames = /quantityAvailable":(\d+.0)}/gm;
                    const match = regexpNames.exec(cantidad_script);
                    if (match) {
                        productos[i].cantidad = +match[1];
                    }
                }
            }
            else if (scrapeTMP.cantidad !== undefined) {
                // console.log("no script");
                // console.log(scrapeTMP);
                const cantidad = scrapeTMP.cantidad;
                const match = cantidad.match(/(\d+)/g);
                if (match) {
                    productos[i].cantidad = +match[0];
                }
            }
        }
        return productos.filter((producto) => producto.cantidad && producto.cantidad > 0);
    });
}
exports.getStockCount = getStockCount;
function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
//# sourceMappingURL=getStockCount.service.js.map