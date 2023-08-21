import { ScrapeOptionList } from "scrape-it";

export interface StoreSearchScrapeItConfig {
  Url: string;
  Pages: { num_page_links?: string } | { pages_links?: ScrapeOptionList };
  Prefix_page: string;
  Productos: {
    productos: {
      listItem: string;
      data: {
        link: string | { selector: string; attr: string };
        img: string | { selector: string; attr: string };
        nombre: string | { selector: string; attr: string };
        stock_label?: string | { selector: string; attr: string };
        precio: string | { selector: string; attr: string };
        cantidad?: string | { selector: string; attr: string };
        flag?: string | { selector: string; attr: string };
        multiprice?: string | { selector: string; attr: string };
      };
    };
  };
  Prefix_link: string;
  Extras: {
    cantidad?: string;
    stock_label?: string;
    cantidad_script?: string | { selector: string; attr: string };
    idioma?: string;
  };
  // Images: any;
}

// PAGES
export interface PagesLinksResponse {
  pages_links: PagesLinks[];
}
export interface PagesLinks {
  url: string;
}
export interface NumPageLinksResponse {
  num_page_links: string;
}

// PRODUCTOS
export interface DataProduct {
  link: string;
  img: string;
  nombre: string;
  stock_label?: string;
  precio: number;
  cantidad: number;
  flag?: string;
  multiprice?: number;
}

export interface ProductSearchResponse {
  productos: DataProduct[];
}

export interface ExtrasSearchResponse {
  cantidad?: string;
  stock_label?: string;
  cantidad_script?: string;
  idioma?: string;
}
