/**
 * Created by mr on 2015/8/12.
 */

var Reflux = require("reflux");
var TodoActions = require("./ToDoActions.js");
var TodoStore = Reflux.createStore({
    items: {
       "0": "吃饭",
       "1": "xiao睡"
    },
    listenables: [TodoActions],
    onGetAll: function() {
        this.trigger(this.items);
    },
    onAddItem: function(model) {
        this.items[model.id] = model.text;
        this.trigger(this.items);
    },
    onDeleteItem: function(index) {
        delete this.items[index];
        this.trigger(this.items);
    },
    onUpdateItem: function(model, index) {
        
    }
});

module.exports = TodoStore;
