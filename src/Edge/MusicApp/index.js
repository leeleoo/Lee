import React  from "react";
import App from "./app";
import { createStore,
				 applyMiddleware
}  from "redux";
import APP  from "./app";
import thunk  from "redux-thunk";
import { Provider } from 'react-redux';
import  reducers  from "./reducer";
import logger from 'redux-diff-logger';


let createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);
let store =  createStoreWithMiddleware(reducers);
/*let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);*/
/** test**/
import {updateProgress} from "./action";
/*	setTimeout(()=>{store.dispatch(updateProgress(11));},1500);
	setTimeout(()=>{store.dispatch(updateProgress(22));},2500);
	setTimeout(()=>{store.dispatch(updateProgress(33));},3500);
	setTimeout(()=>{store.dispatch(updateProgress(44));},4500);*/
	
/** test**/

React.render( 
	<Provider store={store}>
		{()=><App/>}
	</Provider>,
	document.body
	);
