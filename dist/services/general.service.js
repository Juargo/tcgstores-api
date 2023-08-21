"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filters = exports.onlyUnique = exports.getPrice = void 0;
function getPrice(price, type) {
    if (type === "normal") {
        // console.log("price", price);
        const numeros = [];
        price = price.replace(/\$/gi, " $");
        // console.log("precio agregando espacio entre $", `'${price}'`);
        const precios = price
            .split(" ")
            .map((x) => x.replace(/\n/gi, ""))
            .filter((x) => x != "");
        // console.log("precios quitando espacio y enters", precios);
        precios.forEach((x) => {
            // console.log("antes replace", x);
            const replace = +x.replace("$", "").replace(".", "");
            // console.log("luego replace", replace);
            if (+replace > 0) {
                numeros.push(+replace);
            }
        });
        // console.log("numeros", numeros);
        // console.log("min", Math.min(...numeros));
        return Math.min(...numeros);
    }
    else if (type === "multiprecio") {
        // console.log("multiprecio", price);
        return -31;
    }
    else {
        return -1;
    }
}
exports.getPrice = getPrice;
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
exports.onlyUnique = onlyUnique;
function Filters(Product) {
    const filter = [
        "Rusted Shield – 061/072 – Uncommon (ING)",
        "Tag Switch – 209/236 – Uncommon (ING)",
        "Circhester Bath – 150/185 – Uncommon (ING)",
        "Bea – 147/185 – Uncommon (ING)",
        "Sonia – 065/073 – Uncommon (ING)",
        "Professor’s Research – 178/202 – Rare (ING)",
        "Lucky Egg – 167/202 – Uncommon (ING)",
        "Rusted Sword – 062/072 – Uncommon (ESP)",
        "Rusted Sword – 062/072 – Uncommon (ING)",
        "Rusted Shield – 061/072 – Uncommon (ESP)",
        "Lucky Egg – 167/202 – Uncommon (ESP)",
        "Sonia – 065/073 – Uncommon (ESP)",
    ];
    return (!filter.includes(Product.nombre) &&
        Product.nombre !== "" &&
        Product.stock_label !== "AGOTADO" &&
        Product.stock_label !== "Agotado" &&
        Product.stock_label !== "Fuera de stock" &&
        // !x.product.match(/Espa�ol/) &&
        // !x.product.match(/\(ESP\)/) &&
        // !x.product.match(/Spanish/) &&
        // !x.product.match(/SPANISH/) &&
        !Product.nombre.match(/Funko Pop/) &&
        !Product.nombre.match(/Theme Deck/) &&
        // !x.product.match(/Español/) &&
        // !x.product.match(/ESPAÑOL/) &&
        // !x.product.match(/español/) &&
        !Product.nombre.match(/Protectores/) &&
        !Product.nombre.match(/Peluche/) &&
        !Product.nombre.match(/Caja Porta Mazo/) &&
        !Product.nombre.match(/Battle Deck/) &&
        !Product.nombre.match(/Baraja/) &&
        !Product.nombre.match(/Carpeta/) &&
        !Product.nombre.match(/CARPETA/) &&
        !Product.nombre.match(/Portafolio/) &&
        !Product.nombre.match(/Pins/) &&
        !Product.nombre.match(/Dados/) &&
        !Product.nombre.match(/MINI ÁLBUM/) &&
        !Product.nombre.match(/Llavero/)
    // !x.product.match(/Destinos Brillantes/)
    );
}
exports.Filters = Filters;
//# sourceMappingURL=general.service.js.map