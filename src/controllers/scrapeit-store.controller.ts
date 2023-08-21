import { Request, Response } from "express";
import GetStoreProducts from "../module/products-scrape-it.module";
import { Query } from "../module/database.module";

import STORES_OBJECTS from "../config-stores/index";
import { DataProduct, StoreSearchScrapeItConfig } from "../model/store";
import sendMail from "../module/sendmail.module";
interface Stores {
  nombre: string;
}

interface Products {
  nombre: string;
  stock: number;
  img: string;
  precio: number;
  link: string;
}

export const scrapeitStore = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log(`Se buscarán productos de la tiendas ${req.query.store}`);
  const index = req.query.store as string;
  const config: StoreSearchScrapeItConfig = STORES_OBJECTS[index]();
  const products = await GetStoreProducts(config);
  res.json(products);
};

export const register = async (req: Request, res: Response): Promise<void> => {
  console.log("recolection start...");
  // Connect().then(async (connection) => {
  const queryStores = `SELECT nombre FROM store`;
  const stores = await Query<Stores[]>(queryStores);
  stores.forEach(async (store) => {
    const queryProducts = getQueryProducts(store.nombre);
    const productos_DB = await Query<Products[]>(queryProducts);
    const config = STORES_OBJECTS[store.nombre]();
    const products_scrapt_it = await GetStoreProducts(config);

    if (productos_DB.length === 0) {
      // console.log("La store es nueva");
      insertNewProducts(store.nombre, products_scrapt_it);
    }

    if (productos_DB.length > 0) {
      const { newProducts, changeStock, changePrice, deletedProducts } =
        getChanges(productos_DB, products_scrapt_it);

      console.log("NEW", newProducts);
      if (newProducts.length > 0) {
        await sendMail(store.nombre, newProducts);
        await insertNewProducts(store.nombre, newProducts);
      }

      console.log("ChangeStock", changeStock);
      changeStock.length > 0 && (await changeProductsStock(changeStock));

      console.log("ChangePrice", changePrice);
      changePrice.length > 0 && (await changeProductsPrice(changePrice));

      console.log("Deleted", deletedProducts);
      deletedProducts.length > 0 && (await deleteProducts(deletedProducts));
    }
  });
  // });
  res.send("ok");
};

function getQueryProducts(store: string) {
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

async function insertNewProducts(
  store: string,
  productos: DataProduct[]
): Promise<void> {
  productos.forEach(async (producto) => {
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
    await Query(insertsql);
  });
}

async function deleteProducts(
  productos: Array<{
    nombre: string;
    stock: number;
    img: string;
    precio: number;
    link: string;
  }>
): Promise<void> {
  productos.forEach(async (producto) => {
    const deleteSql = `DELETE FROM producto
    WHERE
    link='${producto.link}'`;
    await Query(deleteSql);
  });
}

async function changeProductsStock(productos: DataProduct[]): Promise<void> {
  productos.forEach(async (producto) => {
    const updateSql = `UPDATE producto
    set stock = ${producto.cantidad}
    WHERE link='${producto.link}'`;

    await Query(updateSql);
  });
}

async function changeProductsPrice(productos: DataProduct[]): Promise<void> {
  productos.forEach(async (producto) => {
    const updateSql = `UPDATE producto
    set precio = ${producto.precio}
    WHERE link='${producto.link}'`;

    await Query(updateSql).catch((error) => console.log(error));
  });
}

function getChanges(
  productos_DB: Array<{
    nombre: string;
    stock: number;
    img: string;
    precio: number;
    link: string;
  }>,
  products_scrapt_IT: DataProduct[]
): {
  newProducts: DataProduct[];
  changeStock: DataProduct[];
  changePrice: DataProduct[];
  deletedProducts: Array<{
    nombre: string;
    stock: number;
    img: string;
    precio: number;
    link: string;
  }>;
} {
  const { productosDB_index, productosScrapeIt_index } = getIndexs(
    productos_DB,
    products_scrapt_IT
  );

  const newProducts = products_scrapt_IT.filter(
    (producto) => productosDB_index[producto.link] === undefined
  );

  const ProductosQueSeMantienen = products_scrapt_IT.filter(
    (producto) => productosDB_index[producto.link] !== undefined
  );

  const changeStock = ProductosQueSeMantienen.filter(
    (productoActual) =>
      +productosDB_index[productoActual.link].stock !==
        +productoActual.cantidad &&
      +productosDB_index[productoActual.link].stock !== -1
  );

  const changePrice = ProductosQueSeMantienen.filter(
    (productoActual) =>
      +productosDB_index[productoActual.link].precio !== +productoActual.precio
  );

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

function getIndexs(
  productos_DB: Array<{
    nombre: string;
    stock: number;
    img: string;
    precio: number;
    link: string;
  }>,
  products_scrapt_it: DataProduct[]
): {
  productosDB_index: Record<
    string,
    {
      precio: number;
      stock: number;
    }
  >;
  productosScrapeIt_index: Record<string, boolean>;
} {
  const productosDB_index = productos_DB.reduce((ac, producto) => {
    ac[producto.link] = {
      precio: producto.precio,
      stock: producto.stock,
    };
    return ac;
  }, {} as Record<string, { precio: number; stock: number }>);

  const productosScrapeIt_index = products_scrapt_it.reduce((ac, producto) => {
    ac[producto.link] = true;
    return ac;
  }, {} as Record<string, boolean>);
  return { productosDB_index, productosScrapeIt_index };
}
