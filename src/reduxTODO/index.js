import React from "react";
import { createStore,
				 applyMiddleware
}  from "redux";
import APP  from "./app";
import thunk  from "redux-thunk";
import { Provider } from 'react-redux';
import  reducers  from "./reducer";
import {addTodo,completeTodo,setVisibilityFilter}  from "./actions/todoactions";
import {VisibilityFilters} from "./reducer/visibilityFilter";

let createStoreWidthMiddleware = applyMiddleware(thunk)(createStore);
let store =  createStoreWidthMiddleware(reducers);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// // 发起一系列 action
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// // 停止监听 state 更新
// unsubscribe();
React.render(
	<Provider store={store}>
		{()=><APP />}
	</Provider>,
	document.body
	);
