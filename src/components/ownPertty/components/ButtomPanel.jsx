let React = require('react/addons');
var {Link,RouteHandler} = require('react-router');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var ButtomPanel = React.createClass({
	getInitialState: function() {
		return {
			key: 0
		};
	},

	render: function() {
		var key = this.state.key++;
		return (
			<div>
				<div className="Switch">
				  <Link to="content">content</Link>
				</div>
				<ReactCSSTransitionGroup transitionName="toContent">
				  <RouteHandler key={key}/>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

});

module.exports = ButtomPanel;
