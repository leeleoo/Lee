var React = require('react');
var TodoActions = require('./TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var TodoItem = React.createClass({

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var todo = this.props.todo;

    return (
      <li key={todo.id}>
        <label>
          {todo.text}
        </label>
        <button className="destroy" onClick={this._onDestroyClick} >吃屎</button>
      </li>
    );
  },
  _onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  }

});

module.exports = TodoItem;
