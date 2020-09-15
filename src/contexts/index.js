import { createContext } from "react";
import RootStore from "../stores";

const store = new RootStore();
store.loadAllData();
window.store = store;


export const storeContext = createContext(store);
