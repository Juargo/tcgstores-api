import { StoreSearchScrapeItConfig } from "../../model/store";

export function elreinodelosduelos(): StoreSearchScrapeItConfig {
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

export default elreinodelosduelos;
