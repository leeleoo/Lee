var React = require('react');
var List = require('./list');
var Actions = require('./action');
var Store = require('./store');
var Reflux = require('reflux');
var App = React.createClass({
	mixins: [Reflux.connect(Store, 'lists')],
	getInitialState: function() {
		return {
			lists: [],
			height:0
		};
	},
	componentWillMount: function() {
		Actions.initData(this.props.kObj);
	},
	render: function() {
		var items = [];
		for (var i = 0; i < this.state.lists.length; i++) {
			 if(this.state.lists[i].state === 0)  continue;
			 		this.state.height += 124;
			 		items.push(<List data={this.state.lists[i]}/>);
		};
		var _height = this.state.height;
		$("#targetDOM").css("height","0px");
		$("#targetDOM").css("display","block");
		setTimeout(function(){
			$("#targetDOM").css("minHeight",_height+"px");
			$("#targetDOM").css("opacity","1");
			setTimeout(function(){
			$("#targetDOM").css("height","auto");
			}, 800);
		}, 250);
		return (
				<li>
					{items}
				</li>

		);
	}

});

module.exports = App;
// React.render(<App />,$("#J_SearchList").find("li").eq(0)[0]);
