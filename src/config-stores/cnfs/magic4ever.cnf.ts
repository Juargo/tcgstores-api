import { StoreSearchScrapeItConfig } from "../../model/store";

export function magic4ever(): StoreSearchScrapeItConfig {
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

export default magic4ever;
