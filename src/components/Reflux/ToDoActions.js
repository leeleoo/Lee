var Reflux = require("reflux");
var TodoActions = Reflux.createActions([
    'getAll',
    'addItem',
    'deleteItem',
    'updateItem'
]);

module.exports = TodoActions;
