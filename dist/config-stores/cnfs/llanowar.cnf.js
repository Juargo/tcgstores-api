"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llanowar = void 0;
function llanowar() {
    return {
        Url: "https://llanowar.cl/categoria-producto/sellado-pokemon/",
        Pages: {
            pages_links: {
                listItem: ".page-numbers li",
                data: {
                    url: { selector: "a", attr: "href" },
                },
            },
        },
        Prefix_page: "",
        Productos: {
            productos: {
                listItem: ".products li",
                data: {
                    img: { selector: ".attachment-woocommerce_thumbnail", attr: "src" },
                    stock_label: ".ast-shop-product-out-of-stock",
                    nombre: ".woocommerce-loop-product__title",
                    link: {
                        selector: ".ast-loop-product__link",
                        attr: "href",
                    },
                    precio: ".woocommerce-Price-amount",
                },
            },
        },
        Prefix_link: "",
        Extras: {
            stock_label: ".out-of-stock",
            cantidad: ".in-stock",
        },
    };
}
exports.llanowar = llanowar;
exports.default = llanowar;
//# sourceMappingURL=llanowar.cnf.js.map