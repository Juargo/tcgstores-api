import { Router } from "express";
import {
  StoreProductList,
  getAllProductsGroup,
} from "../controllers/store-products.controller";

import {
  scrapeitStore,
  register,
} from "../controllers/scrapeit-store.controller";

const router: Router = Router();

router.get("/get/scrape-it-store", scrapeitStore);
router.get("/get/StoreProductList", StoreProductList);
router.get("/get/StoreProductGroup", getAllProductsGroup);
router.post("/post/register-all", register);
export default router;
