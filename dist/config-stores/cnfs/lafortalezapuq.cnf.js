"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lafortalezapuq = void 0;
function lafortalezapuq() {
    return {
        Url: "https://www.lafortalezapuq.cl/catalogo/juegos-de-cartas/pokemon-tcg",
        Pages: {
            pages_links: {
                listItem: ".pagination>ul>li",
                data: {
                    url: { selector: "a", attr: "href" },
                },
            },
        },
        Prefix_page: "https://www.lafortalezapuq.cl/",
        Productos: {
            productos: {
                listItem: ".product",
                data: {
                    img: { selector: "img", attr: "src" },
                    stock_label: ".product-out-of-stock",
                    nombre: "section h5",
                    link: {
                        selector: "a",
                        attr: "href",
                    },
                    precio: "section span",
                },
            },
        },
        Prefix_link: "",
        Extras: {},
    };
}
exports.lafortalezapuq = lafortalezapuq;
exports.default = lafortalezapuq;
//# sourceMappingURL=lafortalezapuq.cnf.js.map