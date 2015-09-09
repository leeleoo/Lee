import ACTIONTYPES from '../constants/actiontype';
export function addTodo(text) {
    return {
        type: ACTIONTYPES.ADD_TODO,
        text
    };
}
export function completeTodo(index) {
    return {
        type: ACTIONTYPES.COMPLETE_TODO,
        index
    }
}
export function setVisibilityFilter(filter) {
    return {
        type: ACTIONTYPES.SET_VISIBILITY_FILTER,
        filter
    }
}
