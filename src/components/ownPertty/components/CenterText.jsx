let React = require('react/addons');
let Router = require('react-router');
let { TextField,Styles,Tabs,Tab } = require('material-ui');
let { Route,RouteHandler,Link } = Router;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
let ThemeManager = new Styles.ThemeManager();
var CenterText = React.createClass({
	getInitialState: function() {
	  return {
	    key: 1
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
		var name = this.state.key++;
		return (
			<div className="someBar">
			   <div className="searchBar">
			       <span>Find</span>
			       <TextField hintText="Hint Text" />
			   </div>
			   <div className="addNew">
			     <span>+</span>
			   </div>
			   <ul className="toolBar">
			     <li><Link to="texta">ABtn</Link></li>
			     <li><Link to="textb">dropDown</Link></li>
			     <li>My Cards</li>
			   </ul>
			   <div className="CenterText">
			      <ReactCSSTransitionGroup transitionName="example">

			      </ReactCSSTransitionGroup >
			   </div>
			</div>
		);
	}

});

module.exports = CenterText;
