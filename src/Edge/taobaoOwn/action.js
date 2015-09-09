var Reflux = require("reflux");
var TodoActions = Reflux.createActions([
    'getAll',
    'toggleDialog',
    'initData'
]);

module.exports = TodoActions;
