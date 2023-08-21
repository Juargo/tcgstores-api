import { StoreSearchScrapeItConfig } from "../../model/store";

export function storedevastation(): StoreSearchScrapeItConfig {
  return {
    Url: "https://www.storedevastation.com/collections/productos-pokemon-tcg",
    Pages: {},
    Prefix_page: "",
    Productos: {
      productos: {
        listItem: ".shop-product-list>.row>div",
        data: {
          img: { selector: ".items-even", attr: "src" },
          nombre: "div.product.Norm > p.productTitle",
          link: { selector: ".productLink", attr: "href" },
          precio: "div.product.Norm > p.productPrice.sale > span",
          multiprice:
            "div.product.Norm > .hoverMask > .buyWrapper > div > p > span",
        },
      },
    },
    Prefix_link: "https://www.storedevastation.com",
    Extras: { cantidad: ".stockCount" },
  };
}
export default storedevastation;
