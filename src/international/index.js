import {createStore} from "redux";
import reduers from "./reduers";
let store = createStore(reduers);
let dispatch = store.dispatch;
