"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entrejuegos = void 0;
function entrejuegos() {
    return {
        Url: "https://www.entrejuegos.cl/397-pokemon",
        Pages: {},
        Prefix_link: "",
        Productos: {
            productos: {
                listItem: "#js-product-list>div.products.row>div",
                data: {
                    img: { selector: "article>div>a>img", attr: "src" },
                    nombre: "article>div>div.product-description>h2>a",
                    link: { selector: "article>div>a", attr: "href" },
                    precio: "article>div>div.product-description>div>span.price",
                },
            },
        },
        Prefix_page: "",
        Extras: {
            stock_label: "#product-availability",
            cantidad: "#product-details>div.product-quantities>span",
        },
    };
}
exports.entrejuegos = entrejuegos;
exports.default = entrejuegos;
//# sourceMappingURL=entrejuegos.cnf.js.map