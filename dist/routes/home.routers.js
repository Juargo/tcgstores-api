"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const store_products_controller_1 = require("../controllers/store-products.controller");
const scrapeit_store_controller_1 = require("../controllers/scrapeit-store.controller");
const router = (0, express_1.Router)();
router.get("/get/scrape-it-store", scrapeit_store_controller_1.scrapeitStore);
router.get("/get/StoreProductList", store_products_controller_1.StoreProductList);
router.get("/get/StoreProductGroup", store_products_controller_1.getAllProductsGroup);
router.post("/post/register-all", scrapeit_store_controller_1.register);
exports.default = router;
//# sourceMappingURL=home.routers.js.map