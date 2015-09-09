var React = require("react");
var TodoStore = require("./TodoStore");
var Reflux = require("reflux");
var TodoActions = require("./ToDoActions");
var InputBtn = require("./NumInput");

var TodoComponent = React.createClass({
    mixins: [Reflux.connect(TodoStore, 'list')],
    getInitialState: function () {
        return {list: {}};
    },
    componentDidMount: function () {
        TodoActions.getAll();
    },
    handleSubmit:function(event){
      if (event.keyCode === 13) {
        if(this.state.value.length < 1) return;
        var item = {};
        item['text'] = this.state.value;
        var id = Date.now();
        item['id'] = id;
        TodoActions.addItem(item);
          this.setState({
            value: ''
          });
      }

    },
    _onChange:function(event){
      this.setState({
        value: event.target.value
      });
    },
    _onDelete:function(event){
      TodoActions.deleteItem(event.target.dataset["index"]);
    },
    render: function () {
        var lists = [];
        for(let id in this.state.list){
           lists.push(<p>{this.state.list[id]} <button type="button" data-index={id} onClick={this._onDelete}> 吃屎 </button></p>); 
        }
        return (
            <div>
              <InputBtn />
              <input type="text" onChange={this._onChange} value={this.state.value}  onKeyDown={this.handleSubmit}/>
                {lists}
            </div>
        )
    }
});

React.render( <TodoComponent />, document.body );

