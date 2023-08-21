import { StoreSearchScrapeItConfig } from "../model/store";

import magic4ever from "./cnfs/magic4ever.cnf";
import magicsur from "./cnfs/magicsur.conf";
import araucaniagaming from "./cnfs/araucaniagaming.cnf";
import boostoretcg from "./cnfs/boostore.cnf";
import carduniverse from "./cnfs/carduniverse.cnf";
import elreinodelosduelos from "./cnfs/elreinodelosduelos.cnf";
import geekers from "./cnfs/geekers.cnf";
import guildDream from "./cnfs/guildDream.cnf";
import weplay from "./cnfs/weplay.cnf";
import entrejuegos from "./cnfs/entrejuegos.cnf";
import storedevastation from "./cnfs/storedevastation.cnf";
import playcenter from "./cnfs/playcenter.cnf";
import llanowar from "./cnfs/llanowar.cnf";
import tiendakaleido from "./cnfs/tiendakaleido.cnf";
import lafortalezapuq from "./cnfs/lafortalezapuq.cnf";

export interface Stores {
  [store: string]: () => StoreSearchScrapeItConfig;
}
export const STORES_OBJECTS: Stores = {
  magicsur: () => magicsur(),
  magic4ever: () => magic4ever(),
  guildDream: () => guildDream(),
  boostoretcg: () => boostoretcg(),
  geekers: () => geekers(),
  weplay: () => weplay(),
  araucaniagaming: () => araucaniagaming(),
  entrejuegos: () => entrejuegos(),
  carduniverse: () => carduniverse(),
  storedevastation: () => storedevastation(),
  elreinodelosduelos: () => elreinodelosduelos(),
  playcenter: () => playcenter(),
  llanowar: () => llanowar(),
  tiendakaleido: () => tiendakaleido(),
  lafortalezapuq: () => lafortalezapuq(),
};

export default STORES_OBJECTS;
