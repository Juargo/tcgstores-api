import { ScrapeOptions } from "scrape-it";

import myScrapeIt from "../module/my-scrape-it.module";
import { DataProduct, ProductSearchResponse } from "../model/store";
import { Filters, getPrice } from "./general.service";

export async function getProductsData(
  pages: string[],
  searching_by: ScrapeOptions,
  extension?: string
): Promise<DataProduct[]> {
  const productsArray: Array<DataProduct[]> = [];
  for (let i = 0; i < pages.length; i++) {
    const productsScrapeIt = await myScrapeIt(pages[i], searching_by);
    let p: DataProduct[] = (<ProductSearchResponse>productsScrapeIt).productos;
    p = p.filter((producto) => Filters(producto));
    p = p.map((producto) => Process(producto, extension));

    productsArray.push(p);
  }
  return productsArray.flat();
}

function Process(producto: DataProduct, extension?: string) {
  const link = extension ? `${extension}${producto.link}` : producto.link;
  // console.log("Producto Process", producto);
  const precio = producto.multiprice
    ? getPrice(producto.precio.toString(), "multiprecio")
    : getPrice(producto.precio.toString(), "normal");
  const stock_label =
    producto.stock_label === "" || producto.stock_label == null
      ? "En stock"
      : producto.stock_label;

  return {
    ...producto,
    link,
    precio,
    stock_label,
  };
}
