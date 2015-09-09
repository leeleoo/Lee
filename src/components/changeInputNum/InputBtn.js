var React = require('react');

var InputBtn = React.createClass({
	getInitialState: function() {
		return {
			value: 0
		};
	},
	numChange:function(event){
		if(this.target.name === "+"){
			this.setState({
				value: ++this.state.value
			});
		}else{
			if(this.state.value === 0) return;
			this.setState({
				value: --this.state.value
			});
		}
	},
	render: function() {
		return (
			<div>
				<Btn onClick={this.numChange} name={"+"}/>
				<InputNum value={this.state.value} />
				<Btn onClick={this.numChange} name={"-"}/>
			</div>
		);
	}

});
var Btn = React.createClass({
	render: function() {
		return (
			<button className="Btn" type="button" >{this.props.name}</button>
		);
	}
});
var InputNum = React.createClass({
	componentWillReceiveProps: function(nextProps) {
		console.log('nextProps',nextProps);
	},
	render: function() {
		return (
			<input value={this.state.value} className="InputNum" />
		);
	}
});

Reacct.render(<InputBtn />, document.body);
