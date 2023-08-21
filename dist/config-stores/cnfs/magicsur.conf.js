"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicsur = void 0;
function magicsur() {
    return {
        Url: "https://www.magicsur.cl/14-pokemon-tcg",
        Pages: {
            pages_links: {
                listItem: ".page-list li",
                data: {
                    url: { selector: "a", attr: "href" },
                },
            },
        },
        Prefix_page: "",
        Productos: {
            productos: {
                listItem: ".js-product-miniature-wrapper",
                data: {
                    img: { selector: ".product-thumbnail-first", attr: "data-src" },
                    nombre: ".product-title",
                    link: { selector: "a", attr: "href" },
                    precio: ".product-price",
                    flag: ".product-flags",
                    stock_label: "div.product-availability.d-block>span",
                },
            },
        },
        Prefix_link: "",
        Extras: {
            stock_label: "#product-availability",
            cantidad_script: { selector: "#product-details", attr: "data-product" },
            idioma: ".product-information .rte-content p:nth-child(2)",
        },
    };
}
exports.magicsur = magicsur;
exports.default = magicsur;
//# sourceMappingURL=magicsur.conf.js.map