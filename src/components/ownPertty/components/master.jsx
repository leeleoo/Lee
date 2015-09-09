require("./navbar.scss");
let React = require('react/addons');
let Router = require('react-router');
let {  Styles,Tabs,Tab,FlatButton } = require('material-ui');
let { Route,RouteHandler,Link } = Router;
let ThemeManager = new Styles.ThemeManager();
var ButtomPanel = require("./ButtomPanel");
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let NavBar = require("./navbar.jsx");
var Master = React.createClass({
  getInitialState: function() {
    return {
      key: 0
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },
  render: function() {
    var key  =  this.state.key++;
    return (
      <div className="Container">
        <NavBar/>


        <ButtomPanel/>
      </div>
    );
  }

});

module.exports = Master;

