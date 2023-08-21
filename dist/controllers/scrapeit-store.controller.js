"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.scrapeitStore = void 0;
const products_scrape_it_module_1 = __importDefault(require("../module/products-scrape-it.module"));
const database_module_1 = require("../module/database.module");
const index_1 = __importDefault(require("../config-stores/index"));
const sendmail_module_1 = __importDefault(require("../module/sendmail.module"));
const scrapeitStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Se buscarán productos de la tiendas ${req.query.store}`);
    const index = req.query.store;
    const config = index_1.default[index]();
    const products = yield (0, products_scrape_it_module_1.default)(config);
    res.json(products);
});
exports.scrapeitStore = scrapeitStore;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("recolection start...");
    // Connect().then(async (connection) => {
    const queryStores = `SELECT nombre FROM store`;
    const stores = yield (0, database_module_1.Query)(queryStores);
    stores.forEach((store) => __awaiter(void 0, void 0, void 0, function* () {
        const queryProducts = getQueryProducts(store.nombre);
        const productos_DB = yield (0, database_module_1.Query)(queryProducts);
        const config = index_1.default[store.nombre]();
        const products_scrapt_it = yield (0, products_scrape_it_module_1.default)(config);
        if (productos_DB.length === 0) {
            // console.log("La store es nueva");
            insertNewProducts(store.nombre, products_scrapt_it);
        }
        if (productos_DB.length > 0) {
            const { newProducts, changeStock, changePrice, deletedProducts } = getChanges(productos_DB, products_scrapt_it);
            console.log("NEW", newProducts);
            if (newProducts.length > 0) {
                yield (0, sendmail_module_1.default)(store.nombre, newProducts);
                yield insertNewProducts(store.nombre, newProducts);
            }
            console.log("ChangeStock", changeStock);
            changeStock.length > 0 && (yield changeProductsStock(changeStock));
            console.log("ChangePrice", changePrice);
            changePrice.length > 0 && (yield changeProductsPrice(changePrice));
            console.log("Deleted", deletedProducts);
            deletedProducts.length > 0 && (yield deleteProducts(deletedProducts));
        }
    }));
    // });
    res.send("ok");
});
exports.register = register;
function getQueryProducts(store) {
    return `SELECT 
          nombre, 
          stock, 
          img, 
          precio, 
          link 
          FROM producto 
          WHERE store_id = 
         (select id from store where nombre='${store}')`;
}
function insertNewProducts(store, productos) {
    return __awaiter(this, void 0, void 0, function* () {
        productos.forEach((producto) => __awaiter(this, void 0, void 0, function* () {
            const insertsql = `INSERT INTO producto (
      store_id,
      expansion_id,
      nombre,
      link,
      precio,
      stock,
      img) 
      VALUES (
        (SELECT id FROM store where nombre='${store}'),
        1,
        "${producto.nombre}",
        "${producto.link}",
        ${producto.precio === Infinity ? -1 : producto.precio},
        ${producto.cantidad || -1},
        "${producto.img || ""}"
     )`;
            yield (0, database_module_1.Query)(insertsql);
        }));
    });
}
function deleteProducts(productos) {
    return __awaiter(this, void 0, void 0, function* () {
        productos.forEach((producto) => __awaiter(this, void 0, void 0, function* () {
            const deleteSql = `DELETE FROM producto
    WHERE
    link='${producto.link}'`;
            yield (0, database_module_1.Query)(deleteSql);
        }));
    });
}
function changeProductsStock(productos) {
    return __awaiter(this, void 0, void 0, function* () {
        productos.forEach((producto) => __awaiter(this, void 0, void 0, function* () {
            const updateSql = `UPDATE producto
    set stock = ${producto.cantidad}
    WHERE link='${producto.link}'`;
            yield (0, database_module_1.Query)(updateSql);
        }));
    });
}
function changeProductsPrice(productos) {
    return __awaiter(this, void 0, void 0, function* () {
        productos.forEach((producto) => __awaiter(this, void 0, void 0, function* () {
            const updateSql = `UPDATE producto
    set precio = ${producto.precio}
    WHERE link='${producto.link}'`;
            yield (0, database_module_1.Query)(updateSql).catch((error) => console.log(error));
        }));
    });
}
function getChanges(productos_DB, products_scrapt_IT) {
    const { productosDB_index, productosScrapeIt_index } = getIndexs(productos_DB, products_scrapt_IT);
    const newProducts = products_scrapt_IT.filter((producto) => productosDB_index[producto.link] === undefined);
    const ProductosQueSeMantienen = products_scrapt_IT.filter((producto) => productosDB_index[producto.link] !== undefined);
    const changeStock = ProductosQueSeMantienen.filter((productoActual) => +productosDB_index[productoActual.link].stock !==
        +productoActual.cantidad &&
        +productosDB_index[productoActual.link].stock !== -1);
    const changePrice = ProductosQueSeMantienen.filter((productoActual) => +productosDB_index[productoActual.link].precio !== +productoActual.precio);
    const deletedProducts = productos_DB.filter((producto) => {
        return productosScrapeIt_index[producto.link] === undefined;
    });
    return {
        newProducts,
        changeStock,
        changePrice,
        deletedProducts,
    };
}
function getIndexs(productos_DB, products_scrapt_it) {
    const productosDB_index = productos_DB.reduce((ac, producto) => {
        ac[producto.link] = {
            precio: producto.precio,
            stock: producto.stock,
        };
        return ac;
    }, {});
    const productosScrapeIt_index = products_scrapt_it.reduce((ac, producto) => {
        ac[producto.link] = true;
        return ac;
    }, {});
    return { productosDB_index, productosScrapeIt_index };
}
//# sourceMappingURL=scrapeit-store.controller.js.map