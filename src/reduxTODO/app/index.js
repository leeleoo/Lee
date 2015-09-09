import React,{Component}  from "react";
import {
    addTodo,
    completeTodo,
    setVisibilityFilter
}
from "../actions/todoactions";
import { connect } from 'react-redux';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
import {VisibilityFilters} from "../reducer/visibilityFilter";
class App extends Component {

	render(){
		console.log("this.props",this.props);
		const {dispatch,todos,visibilityFilter}=this.props;
		return (
				<div>
					<AddTodo 
						onAddClick={text=>
							dispatch(addTodo(text))}
					></AddTodo>
					<TodoList 
						todos={this.props.todos}
						onTodoClick={index=>
							dispatch(completeTodo(index))
						}></TodoList>
					<Footer
						filter={visibilityFilter}
						onFilterChange={nextFilter=>
							dispatch(setVisibilityFilter(filter))
						}></Footer>

				</div>
			);
	}

  // methods
}

function selectTodos(todos, filter) {
	console.log("VisibilityFilters",VisibilityFilters);
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
	console.log("state",state);
  return {
    todos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
