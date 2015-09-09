import {
  SET_VISIBILITY_FILTER
}  from "../constants/actiontype";
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
  	console.log("action",action);
    return action.filter;
  default:
    return state;
  }
}

