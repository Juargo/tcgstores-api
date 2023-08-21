import { ScrapeOptions } from "scrape-it";

import myScrapeIt from "../module/my-scrape-it.module";
import { onlyUnique } from "../services/general.service";
import {
  NumPageLinksResponse,
  PagesLinksResponse,
  ProductSearchResponse,
  ExtrasSearchResponse,
} from "../model/store";

export async function getPagesLiks(
  base_url: string,
  searching_by: ScrapeOptions,
  extension?: string
): Promise<string[]> {
  const result = await myScrapeIt(base_url, searching_by);
  return getPaginas(result, base_url, extension)
    .filter(onlyUnique)
    .filter((pagina) => pagina !== "");
}

function getPaginas(
  result:
    | NumPageLinksResponse
    | PagesLinksResponse
    | ProductSearchResponse
    | ExtrasSearchResponse,
  base_url: string,
  extension?: string
): string[] {
  if ((result as NumPageLinksResponse).num_page_links) {
    return getPaginationUrlsFromNumbers(
      (result as NumPageLinksResponse).num_page_links,
      base_url,
      extension
    );
  } else if ((result as PagesLinksResponse).pages_links) {
    return getPaginationUrlsFromUrls(
      (result as PagesLinksResponse).pages_links.map((x) => x.url),
      base_url,
      extension
    );
  } else {
    console.log("ninguno", result);
    return [];
  }
}

function getPaginationUrlsFromNumbers(
  numPages: string,
  base_url: string,
  extension?: string
): string[] {
  const pages: string[] = [];
  pages.push(base_url);
  for (let i = 2; i <= +numPages; i++) {
    pages.push(`${base_url}${extension || ""}${i}`);
  }
  return pages;
}

function getPaginationUrlsFromUrls(
  paginasResponse: string[],
  base_url: string,
  extension?: string
): string[] {
  let res = paginasResponse;
  if (extension) {
    res = res.map((x) => `${extension}${x}`);
  }
  if (paginasResponse.filter((pagina) => pagina === base_url).length === 0) {
    res.push(base_url);
  }
  return res;
}

export default getPagesLiks;
