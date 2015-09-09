var React = require('react');

var empty = React.createClass({

	render: function() {
		return (
			<div className="empty">
				<h1>我是空的</h1>
			</div>
		);
	}

});

module.exports = empty;
