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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStoreProducts = void 0;
const index_1 = require("../services/index");
function GetStoreProducts(config) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("STORE::::", config.Url);
        let pages = [];
        if (Object.keys(config.Pages).length > 0) {
            pages = yield (0, index_1.getPagesLiks)(config.Url, config.Pages, config.Prefix_page);
        }
        else {
            pages = [config.Url];
        }
        console.log(pages);
        let products = yield (0, index_1.getProductsData)(pages, config.Productos, config.Prefix_link);
        if (Object.keys(config.Extras).length > 0) {
            products = yield (0, index_1.getStockCount)(products, config.Extras);
        }
        // console.log(products);
        return products;
    });
}
exports.GetStoreProducts = GetStoreProducts;
exports.default = GetStoreProducts;
//# sourceMappingURL=products-scrape-it.module.js.map