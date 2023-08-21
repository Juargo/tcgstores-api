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
exports.getPagesLiks = void 0;
const my_scrape_it_module_1 = __importDefault(require("../module/my-scrape-it.module"));
const general_service_1 = require("../services/general.service");
function getPagesLiks(base_url, searching_by, extension) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, my_scrape_it_module_1.default)(base_url, searching_by);
        return getPaginas(result, base_url, extension)
            .filter(general_service_1.onlyUnique)
            .filter((pagina) => pagina !== "");
    });
}
exports.getPagesLiks = getPagesLiks;
function getPaginas(result, base_url, extension) {
    if (result.num_page_links) {
        return getPaginationUrlsFromNumbers(result.num_page_links, base_url, extension);
    }
    else if (result.pages_links) {
        return getPaginationUrlsFromUrls(result.pages_links.map((x) => x.url), base_url, extension);
    }
    else {
        console.log("ninguno", result);
        return [];
    }
}
function getPaginationUrlsFromNumbers(numPages, base_url, extension) {
    const pages = [];
    pages.push(base_url);
    for (let i = 2; i <= +numPages; i++) {
        pages.push(`${base_url}${extension || ""}${i}`);
    }
    return pages;
}
function getPaginationUrlsFromUrls(paginasResponse, base_url, extension) {
    let res = paginasResponse;
    if (extension) {
        res = res.map((x) => `${extension}${x}`);
    }
    if (paginasResponse.filter((pagina) => pagina === base_url).length === 0) {
        res.push(base_url);
    }
    return res;
}
exports.default = getPagesLiks;
//# sourceMappingURL=getPagesLinks.service.js.map