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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsGroup = exports.StoreProductList = void 0;
const database_module_1 = require("../module/database.module");
const StoreProductList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Se retornarán todos los productos de todas las tiendas como una lista`);
    const sql = `SELECT 
               s.nombre,
               p.stock as cantidad,
               p.img,
               p.precio, 
               p.nombre as product, 
               p.link
              FROM 
               producto p INNER JOIN 
               store s on p.store_id=s.id `;
    // Connect()
    //   .then(async (connection) => {
    console.log("DB está conectada");
    const productos = yield (0, database_module_1.Query)(sql);
    const keys = productos.reduce((ac, producto) => {
        ac[producto.nombre] = [];
        return ac;
    }, {});
    productos.forEach((producto) => {
        if (keys[producto.nombre] === undefined) {
            keys[producto.nombre] = [];
            keys[producto.nombre].push(producto);
        }
        else {
            keys[producto.nombre].push(producto);
        }
    });
    console.log(Object.keys(keys));
    res.json(keys);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
});
exports.StoreProductList = StoreProductList;
const getAllProductsGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Se retornarán todos los productos de todas las tiendas de manera agrupada");
    const sql = `
  SELECT 
  tp.nombre as tipo_producto,
  pb.nombre as nombre,
  pb.img as img, 
  s.nombre as storename,
  p.link as link,
  p.precio as precio,
  p.stock as stock,
  pb.idioma as idioma   
  FROM producto p 
  INNER JOIN producto_base pb on p.producto_base_id=pb.id    
  INNER JOIN store s on p.store_id=s.id  
  INNER JOIN tipo_producto tp on tp.id=pb.tipo_producto_id  
  WHERE p.producto_base_id IS NOT NULL    
  ORDER BY pb.nombre,p.precio`;
    // Connect()
    //   .then(async (connection) => {
    console.log("DB está conectada");
    const productosGroup = yield (0, database_module_1.Query)(sql);
    const keys = productosGroup.reduce((ac, producto) => {
        if (ac[producto.nombre] === undefined) {
            ac[producto.nombre] = {
                img: "",
                idioma: "",
                tipo_producto: "",
                stores: [],
            };
        }
        return ac;
    }, {});
    productosGroup.forEach((producto) => {
        if (keys[producto.nombre].img === "") {
            keys[producto.nombre].img = producto.img;
        }
        if (keys[producto.nombre].idioma === "") {
            keys[producto.nombre].idioma = producto.idioma;
        }
        if (keys[producto.nombre].tipo_producto === "") {
            keys[producto.nombre].tipo_producto = producto.tipo_producto;
        }
        keys[producto.nombre].stores.push({
            storename: producto.storename,
            link: producto.link,
            precio: producto.precio,
            stock: producto.stock,
        });
    });
    const queryFaltantes = `SELECT 
      s.nombre,
      p.stock as cantidad,
      p.img,
      p.precio, 
      p.nombre as product, 
      p.link
      FROM producto p 
      INNER JOIN store s on p.store_id=s.id 
      WHERE p.producto_base_id IS NULL  `;
    const productosFaltantes = yield (0, database_module_1.Query)(queryFaltantes);
    const Falntantes = productosFaltantes.reduce((ac, producto) => {
        if (ac[producto.nombre] === undefined) {
            ac[producto.nombre] = [];
        }
        return ac;
    }, {});
    productosFaltantes.forEach((producto) => {
        if (Falntantes[producto.nombre] === undefined) {
            Falntantes[producto.nombre] = [];
            Falntantes[producto.nombre].push(producto);
        }
        else {
            Falntantes[producto.nombre].push(producto);
        }
    });
    const response = {
        group: keys,
        faltantes: Falntantes,
    };
    res.json(response);
    // })
    // .catch((error) => console.log(error));
});
exports.getAllProductsGroup = getAllProductsGroup;
//# sourceMappingURL=store-products.controller.js.map