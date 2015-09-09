import SEARCHPRODUCTS from "../action";

export default function(state=,action){
	switch(action.type){
		case SEARCHPRODUCTS:
			return 
			break;
		default:
			statements_def
			break;
	}
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}

export const todosReducer = createReducer([], {
  [ActionTypes.ADD_TODO](state, action) {
    let text = action.text.trim();
    return [...state, text];
  }
})
