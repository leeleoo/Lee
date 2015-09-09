let React = require('react/addons');
let Router = require('react-router');
let {  TextField,Styles,Tabs,Tab,FlatButton } = require('material-ui');
let { Route,RouteHandler,Link } = Router;
let ThemeManager = new Styles.ThemeManager();
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var content = React.createClass({
	getInitialState: function() {
		return {
		key: 0,
		color:["#f9f911","#11f911","#f911f9","#f90011"],
		current:"#f9f911"
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
	_onClick:function(){
		this.setState();
	},
	render: function() {
		var abackground = this.state.color[this.state.key++];
		var itemsStyle = { background : abackground };
		var item = ( <div key={this.state.key} className="BoxContent" style={itemsStyle}></div> )
		return (
			<div className="content-box">
				<nav className="content-nav">
				<Link to="empty">empty</Link>
				<div className="next-button"  onClick={this._onClick}>
					<FlatButton label="Next" primary={true} />
				</div>
				</nav>
				<ReactCSSTransitionGroup component="div" transitionName="example">
					{item}
				</ReactCSSTransitionGroup>
			</div>
		);
	}

});

module.exports = content;
