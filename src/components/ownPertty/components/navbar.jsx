let React = require("react");
let {TextField,Styles,DropDownMenu} = require("material-ui");
let ThemeManager = new Styles.ThemeManager();
let Router = require('react-router');
var NavBar = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },



  render: function() {
    return(
         <div className="someBar">
            <div className="icon">
              <div>
                <span>Find</span>
              </div>
            </div>
            <div className="titleBar">
              <input className="searchInput" type="text" placeholder="Search" />
              <ul className="toolBar">
                <li>span</li>
                <li>dropDown</li>
                <li>My Cards</li>
              </ul>
            </div>
            <div className="addNew">
              <span>+</span>
            </div>
         </div>
      );
  }

});

module.exports = NavBar;
