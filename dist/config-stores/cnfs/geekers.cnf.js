"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geekers = void 0;
function geekers() {
    return {
        Url: "https://www.geekers.cl/pokemon-tcg",
        Pages: {
            pages_links: {
                listItem: ".pager li",
                data: {
                    url: {
                        selector: "a",
                        attr: "href",
                    },
                },
            },
        },
        Prefix_page: "https://www.geekers.cl",
        Productos: {
            productos: {
                listItem: "article",
                data: {
                    link: { selector: "a", attr: "href" },
                    img: { selector: "img", attr: "src" },
                    nombre: ".product-block__name",
                    stock_label: ".product-block__status",
                    precio: ".product-block__price_value",
                },
            },
        },
        Prefix_link: "https://www.geekers.cl",
        Extras: {},
    };
}
exports.geekers = geekers;
exports.default = geekers;
//# sourceMappingURL=geekers.cnf.js.map