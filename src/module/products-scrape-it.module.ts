import { DataProduct, StoreSearchScrapeItConfig } from "../model/store";
import {
  getPagesLiks,
  getProductsData,
  getStockCount,
} from "../services/index";

export async function GetStoreProducts(
  config: StoreSearchScrapeItConfig
): Promise<DataProduct[]> {
  console.log("STORE::::", config.Url);

  let pages = [];
  if (Object.keys(config.Pages).length > 0) {
    pages = await getPagesLiks(config.Url, config.Pages, config.Prefix_page);
  } else {
    pages = [config.Url];
  }
  console.log(pages);
  let products = await getProductsData(
    pages,
    config.Productos,
    config.Prefix_link
  );
  if (Object.keys(config.Extras).length > 0) {
    products = await getStockCount(products, config.Extras);
  }

  // console.log(products);

  return products;
}

export default GetStoreProducts;
