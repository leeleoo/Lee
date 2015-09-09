var React = require('react');
var List = require('./list');
var Actions = require('./action');
var Store = require('./store');
var Reflux = require('reflux');
var $ = require('jquery');
var App = React.createClass({
	mixins: [Reflux.connect(Store, 'lists')],
	getInitialState: function() {
		return {
			lists: []
		};
	},
	componentWillMount: function() {
		Actions.initData(this.props.kObj);
	},
	render: function() {
		var items = this.state.lists.map(function(item){
					return (<List data={item}/>)
				});
		return (
				<li>
					{items}
				</li>

		);
	}

});

module.exports = App;
// React.render(<App />,$("#J_SearchList").find("li").eq(0)[0]);
