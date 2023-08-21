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
exports.getProductsData = void 0;
const my_scrape_it_module_1 = __importDefault(require("../module/my-scrape-it.module"));
const general_service_1 = require("./general.service");
function getProductsData(pages, searching_by, extension) {
    return __awaiter(this, void 0, void 0, function* () {
        const productsArray = [];
        for (let i = 0; i < pages.length; i++) {
            const productsScrapeIt = yield (0, my_scrape_it_module_1.default)(pages[i], searching_by);
            let p = productsScrapeIt.productos;
            p = p.filter((producto) => (0, general_service_1.Filters)(producto));
            p = p.map((producto) => Process(producto, extension));
            productsArray.push(p);
        }
        return productsArray.flat();
    });
}
exports.getProductsData = getProductsData;
function Process(producto, extension) {
    const link = extension ? `${extension}${producto.link}` : producto.link;
    // console.log("Producto Process", producto);
    const precio = producto.multiprice
        ? (0, general_service_1.getPrice)(producto.precio.toString(), "multiprecio")
        : (0, general_service_1.getPrice)(producto.precio.toString(), "normal");
    const stock_label = producto.stock_label === "" || producto.stock_label == null
        ? "En stock"
        : producto.stock_label;
    return Object.assign(Object.assign({}, producto), { link,
        precio,
        stock_label });
}
//# sourceMappingURL=getProducts.service.js.map