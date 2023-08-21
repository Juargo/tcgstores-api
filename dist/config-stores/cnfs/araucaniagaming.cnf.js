"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.araucaniagaming = void 0;
function araucaniagaming() {
    return {
        Url: "https://araucaniagaming.cl/productos/jcc-pokemon/",
        Pages: {
            pages_links: {
                listItem: ".page-numbers>li",
                data: {
                    url: { selector: "a", attr: "href" },
                },
            },
        },
        Prefix_page: "",
        Productos: {
            productos: {
                listItem: ".products li .product-block",
                data: {
                    link: {
                        selector: ".woocommerce-loop-product__title a",
                        attr: "href",
                    },
                    img: { selector: "img", attr: "data-src" },
                    nombre: ".woocommerce-loop-product__title",
                    stock_label: ".stock-label",
                    precio: ".woocommerce-Price-amount",
                },
            },
        },
        Prefix_link: "",
        Extras: {},
    };
}
exports.araucaniagaming = araucaniagaming;
exports.default = araucaniagaming;
//# sourceMappingURL=araucaniagaming.cnf.js.map