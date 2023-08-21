import { StoreSearchScrapeItConfig } from "../../model/store";

export function geekers(): StoreSearchScrapeItConfig {
  return {
    Url: "https://www.geekers.cl/pokemon-tcg",
    Pages: {
      pages_links: {
        listItem: ".pager li",
        data: {
          url: {
            selector: "a",
            attr: "href",
          },
        },
      },
    },
    Prefix_page: "https://www.geekers.cl",
    Productos: {
      productos: {
        listItem: "article",
        data: {
          link: { selector: "a", attr: "href" },
          img: { selector: "img", attr: "src" },
          nombre: ".product-block__name",
          stock_label: ".product-block__status",
          precio: ".product-block__price_value",
        },
      },
    },
    Prefix_link: "https://www.geekers.cl",
    Extras: {},
  };
}

export default geekers;
