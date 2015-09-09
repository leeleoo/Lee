import React from "react";
import { createStore } from "redux";
import {Provider} from "react-redux";
import {play,pause} from "./action";
import reducer from "./reducer";
import App from "./app";

let store = createStore(reducer);
let unsubscribe = store.subscribe( ()=>
	console.info(store.getState())
	);
// store.dispatch(play());
// store.dispatch(pause());
// store.dispatch(play());
// store.dispatch(pause());
// unsubscribe();

React.render(
	<Provider store={store}>
		{()=> <App/>}
	</Provider>,
	document.body
	);
