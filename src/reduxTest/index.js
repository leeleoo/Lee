import React  from "react";
import {createStore} from "redux";
import App from "./app";
import reducer from "./reducer";
import {Provider} from "react-redux";
import {plusNum,reduce} from "./action"
let store = createStore(reducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


React.render(
		<Provider store={store}>
			{()=> <App/>}
		</Provider>,
		document.body
	 );
