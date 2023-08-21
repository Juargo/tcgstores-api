import { StoreSearchScrapeItConfig } from "../../model/store";

export function carduniverse(): StoreSearchScrapeItConfig {
  return {
    Url: "https://carduniverse.cl/collections/pokemon-tcg",
    Pages: {
      num_page_links: ".deco + span>a",
    },
    Prefix_page: "?page=",
    Productos: {
      productos: {
        listItem:
          "#MainContent > div >div.grid.grid--no-gutters.grid--uniform>div",
        data: {
          img: { selector: ".lazyautosizes.lazyloaded", attr: "data-srcset" },
          stock_label:
            "a>div.product-card__info > div.product-card__availability",
          nombre: "a > div.product-card__info > div.product-card__name",
          link: {
            selector: "a",
            attr: "href",
          },
          precio: "a > div.product-card__info > div.product-card__price",
        },
      },
    },
    Prefix_link: "https://carduniverse.cl",
    Extras: {},
  };
}
export default carduniverse;
