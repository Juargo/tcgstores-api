import { StoreSearchScrapeItConfig } from "../../model/store";

export function boostoretcg(): StoreSearchScrapeItConfig {
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

export default boostoretcg;
