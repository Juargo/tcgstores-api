"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boostoretcg = void 0;
function boostoretcg() {
    return {
        Url: "https://www.boostoretcg.cl/categoria-producto/pokemon/",
        Pages: {
            num_page_links: ".page-numbers.dots + a span",
        },
        Prefix_page: "page/",
        Productos: {
            productos: {
                listItem: ".products li",
                data: {
                    img: { selector: ".tp-image-wrapper img", attr: "src" },
                    stock_label: ".awl-align-center-center",
                    nombre: "h2",
                    link: {
                        selector: ".woocommerce-LoopProduct-link",
                        attr: "href",
                    },
                    precio: ".price",
                },
            },
        },
        Prefix_link: "",
        Extras: {
            cantidad: ".stock.in-stock",
        },
    };
}
exports.boostoretcg = boostoretcg;
exports.default = boostoretcg;
//# sourceMappingURL=boostore.cnf.js.map