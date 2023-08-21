"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weplay = void 0;
function weplay() {
    return {
        Url: "https://www.weplay.cl/juegos-de-mesa-y-cartas/cartas-y-mazos.html?brand_id=2049",
        Pages: {
            pages_links: {
                listItem: ".items.pages-items li",
                data: {
                    url: { selector: "a", attr: "href" },
                },
            },
        },
        Prefix_page: "",
        Productos: {
            productos: {
                listItem: ".main .item",
                data: {
                    link: { selector: ".product-item-link", attr: "href" },
                    img: { selector: "img", attr: "data-src" },
                    nombre: ".product-item-link",
                    stock_label: ".stock",
                    precio: ".price",
                },
            },
        },
        Prefix_link: "",
        Extras: {},
    };
}
exports.weplay = weplay;
exports.default = weplay;
//# sourceMappingURL=weplay.cnf.js.map