"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magic4ever = void 0;
function magic4ever() {
    return {
        Url: "https://www.m4e.cl/juegos-de-cartas/pokemon",
        Pages: {
            num_page_links: ".count>span:nth-child(3)",
        },
        Prefix_page: "?page=",
        Productos: {
            productos: {
                listItem: ".product-list>div",
                data: {
                    img: { selector: "img", attr: "src" },
                    stock_label: ".btn.gray",
                    nombre: "div.brand-name.trsn > h3 > a",
                    link: {
                        selector: "a",
                        attr: "href",
                    },
                    precio: ".block-price",
                    cantidad: { selector: ".qty", attr: "max" },
                },
            },
        },
        Prefix_link: "https://www.m4e.cl",
        Extras: {},
    };
}
exports.magic4ever = magic4ever;
exports.default = magic4ever;
//# sourceMappingURL=magic4ever.cnf.js.map