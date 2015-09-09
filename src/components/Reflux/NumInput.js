var React = require('react');
var Reflux = require('reflux');
var InputActions = Reflux.createActions([
		"changeInput",
		"numChange"
	]);
var InputStore = Reflux.createStore({
	state:0,
	listenables:[InputActions],
	onChangeInput:function(newNum){
		this.state = newNum;
		this.trigger(this.state);
	},
	onNumChange:function(flag){
		if(flag === "+"){
			this.trigger(++this.state);
		}else{
			if(this.state === 0) return;
			this.trigger(--this.state);
		}
	}
});
var InputBtn = React.createClass({
	mixins: [Reflux.connect(InputStore, "value")],
	getInitialState: function() {
		return {
			value: 0
		};
	},
	render: function() {
		return (
			<div>
				<Btn  name={"+"}/>
				<InputNum value={this.state.value} />
				<Btn  name={"-"}/>
			</div>
		);
	}

});
var Btn = React.createClass({
	numChange:function(event){
		console.log('event.target.name',event.target.name);
		InputActions.numChange(event.target.name);
	},
	render: function() {
		return (
			<button onClick={this.numChange}  name={this.props.name} className="Btn" type="button" >{this.props.name}</button>
		);
	}
});
var InputNum = React.createClass({
	_onChange:function(event){
		InputActions.changeInput(event.target.value);
	},
	render: function() {
		return (
			<input onChange={this._onChange} value={this.props.value} className="InputNum" />
		);
	}
});


module.exports = InputBtn;
