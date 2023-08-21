"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORES_OBJECTS = void 0;
const magic4ever_cnf_1 = __importDefault(require("./cnfs/magic4ever.cnf"));
const magicsur_conf_1 = __importDefault(require("./cnfs/magicsur.conf"));
const araucaniagaming_cnf_1 = __importDefault(require("./cnfs/araucaniagaming.cnf"));
const boostore_cnf_1 = __importDefault(require("./cnfs/boostore.cnf"));
const carduniverse_cnf_1 = __importDefault(require("./cnfs/carduniverse.cnf"));
const elreinodelosduelos_cnf_1 = __importDefault(require("./cnfs/elreinodelosduelos.cnf"));
const geekers_cnf_1 = __importDefault(require("./cnfs/geekers.cnf"));
const guildDream_cnf_1 = __importDefault(require("./cnfs/guildDream.cnf"));
const weplay_cnf_1 = __importDefault(require("./cnfs/weplay.cnf"));
const entrejuegos_cnf_1 = __importDefault(require("./cnfs/entrejuegos.cnf"));
const storedevastation_cnf_1 = __importDefault(require("./cnfs/storedevastation.cnf"));
const playcenter_cnf_1 = __importDefault(require("./cnfs/playcenter.cnf"));
const llanowar_cnf_1 = __importDefault(require("./cnfs/llanowar.cnf"));
const tiendakaleido_cnf_1 = __importDefault(require("./cnfs/tiendakaleido.cnf"));
const lafortalezapuq_cnf_1 = __importDefault(require("./cnfs/lafortalezapuq.cnf"));
exports.STORES_OBJECTS = {
    magicsur: () => (0, magicsur_conf_1.default)(),
    magic4ever: () => (0, magic4ever_cnf_1.default)(),
    guildDream: () => (0, guildDream_cnf_1.default)(),
    boostoretcg: () => (0, boostore_cnf_1.default)(),
    geekers: () => (0, geekers_cnf_1.default)(),
    weplay: () => (0, weplay_cnf_1.default)(),
    araucaniagaming: () => (0, araucaniagaming_cnf_1.default)(),
    entrejuegos: () => (0, entrejuegos_cnf_1.default)(),
    carduniverse: () => (0, carduniverse_cnf_1.default)(),
    storedevastation: () => (0, storedevastation_cnf_1.default)(),
    elreinodelosduelos: () => (0, elreinodelosduelos_cnf_1.default)(),
    playcenter: () => (0, playcenter_cnf_1.default)(),
    llanowar: () => (0, llanowar_cnf_1.default)(),
    tiendakaleido: () => (0, tiendakaleido_cnf_1.default)(),
    lafortalezapuq: () => (0, lafortalezapuq_cnf_1.default)(),
};
exports.default = exports.STORES_OBJECTS;
//# sourceMappingURL=index.js.map