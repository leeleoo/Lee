var React = require('react');
var TodoItem = require('./TodoItem.react.jsx');
var MainSection = React.createClass({
	render: function() {
		var todos = [];
		var allTodos = this.props.allTodos;
		for (var key in allTodos) {
		  todos.push(<TodoItem key={key} todo={allTodos[key]} />);
		}
		return (
		  <section id="main">
		    <ul id="todo-list">{todos}</ul>
		  </section>
		);
	}

});

module.exports = MainSection;
