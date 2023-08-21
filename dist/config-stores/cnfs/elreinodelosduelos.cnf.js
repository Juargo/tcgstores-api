"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elreinodelosduelos = void 0;
function elreinodelosduelos() {
    return {
        Url: "https://elreinodelosduelos.cl/collections/pokemon-tcg",
        Pages: {
            num_page_links: ".page-numbers>li:nth-last-child(2)",
        },
        Prefix_page: "page/",
        Productos: {
            productos: {
                listItem: ".product-grid-item",
                data: {
                    img: { selector: ".attachment-woocommerce_thumbnail", attr: "src" },
                    stock_label: ".out-of-stock",
                    nombre: ".wd-entities-title",
                    link: {
                        selector: ".product-image-link",
                        attr: "href",
                    },
                    precio: ".woocommerce-Price-amount",
                },
            },
        },
        Prefix_link: "",
        Extras: {
            cantidad: ".stock.in-stock",
        },
    };
}
exports.elreinodelosduelos = elreinodelosduelos;
exports.default = elreinodelosduelos;
//# sourceMappingURL=elreinodelosduelos.cnf.js.map