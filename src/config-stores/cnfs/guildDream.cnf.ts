import { StoreSearchScrapeItConfig } from "../../model/store";

export function guildDream(): StoreSearchScrapeItConfig {
  return {
    Url: "https://www.guildreams.com/collection/pokemon",
    Pages: {
      num_page_links: "nav > ul > li:nth-last-child(2) a",
    },
    Prefix_page: "?order=price&way=ASC&limit=12&page=",
    Productos: {
      productos: {
        listItem: ".bs-product",
        data: {
          img: { selector: "picture img", attr: "data-src" },
          stock_label: ".bs-stock",
          nombre: "h2",
          link: {
            selector: "a",
            attr: "href",
          },
          precio: ".bs-product-final-price",
        },
      },
    },
    Prefix_link: "https://www.guildreams.com",
    Extras: {
      cantidad_script: "script",
    },
  };
}

export default guildDream;
