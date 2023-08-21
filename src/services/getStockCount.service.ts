import { ScrapeOptions } from "scrape-it";
import myScrapeIt from "../module/my-scrape-it.module";
import { DataProduct } from "../model/store";
import { ExtrasSearchResponse } from "../model/store";

export async function getStockCount(
  productos: DataProduct[],
  searching_by: ScrapeOptions
): Promise<DataProduct[]> {
  for (let i = 0; i < productos.length; i++) {
    const scrapeTMP = await myScrapeIt(productos[i].link, searching_by);
    if ((scrapeTMP as ExtrasSearchResponse).cantidad_script !== undefined) {
      const cantidad_script = (scrapeTMP as ExtrasSearchResponse)
        .cantidad_script as string;
      // console.log("script");
      if (IsJsonString(cantidad_script)) {
        // console.log("JSON");
        productos[i].cantidad = +JSON.parse(cantidad_script).quantity;
      } else {
        // console.log("JS");
        const regexpNames = /quantityAvailable":(\d+.0)}/gm;
        const match = regexpNames.exec(cantidad_script);
        if (match) {
          productos[i].cantidad = +match[1];
        }
      }
    } else if ((scrapeTMP as ExtrasSearchResponse).cantidad !== undefined) {
      // console.log("no script");
      // console.log(scrapeTMP);
      const cantidad = (scrapeTMP as ExtrasSearchResponse).cantidad as string;
      const match = cantidad.match(/(\d+)/g);
      if (match) {
        productos[i].cantidad = +match[0];
      }
    }
  }
  return productos.filter(
    (producto) => producto.cantidad && producto.cantidad > 0
  );
}

function IsJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
