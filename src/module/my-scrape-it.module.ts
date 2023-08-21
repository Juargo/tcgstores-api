import scrapeIt, { ScrapeOptions } from "scrape-it";
import {
  NumPageLinksResponse,
  PagesLinksResponse,
  ProductSearchResponse,
  ExtrasSearchResponse,
} from "../model/store";

export async function myScrapeIt(
  url: string,
  searching: ScrapeOptions
): Promise<
  | NumPageLinksResponse
  | PagesLinksResponse
  | ProductSearchResponse
  | ExtrasSearchResponse
> {
  const result = await scrapeIt<
    Promise<
      | NumPageLinksResponse
      | PagesLinksResponse
      | ProductSearchResponse
      | ExtrasSearchResponse
    >
  >(
    {
      url,
      headers: {
        "User-agent":
          "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36",
      },
    },
    searching
  );

  console.log(result.data);

  return result.data;
}

export default myScrapeIt;
