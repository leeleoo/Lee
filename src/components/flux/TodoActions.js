/**
 * TodoActions
 */
var AppDispatcher = require('./AppDispatcher');

var TodoActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.handleViewAction({
      actionType: "TODO_CREATE",
      text: text
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.handleViewAction({
      actionType: "TODO_DESTROY",
      id: id
    });
  },

};

module.exports = TodoActions;
