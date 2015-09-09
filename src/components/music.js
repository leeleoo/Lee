var React = require('react');




var Music = React.createClass({
    getInitialState: function() {
        return {
            index: 0,
            surplusTime: '0:00'
        };
    },
    render: function() {
        return (
        	< div className = "Music" >

        	< /div>
        	);
    }
});

var Audio = React.createClass({

	render: function() {
		return (
			<div />
		);
	}

});

var MusicButton = React.createClass({
	getInitialState: function() {
		return {
			isPlay: true,
			count:0
		};
	},
	musicPlay:function(){
		var audio = React.findDOMNode(this.refs.audio);
		if(this.state.isPlay){
			audio.play();
			this.setState({isPlay:false});
		}else{
			audio.pause();
			this.setState({isPlay:true});
		}
	},
	getBackWardMusic : function(){
		if(this.state.count){
			this.setState({
				count: --this.state.count
			});
		}
	},
	render: function() {
		var classString = "iconMusic icon-pause";
		if(this.state.isPlay){
			classString = 'iconMusic icon-pause';
		}else{
			classString += ' rotate';
		}
		return (
			<header className="musicHeader">
				<Audio ref="audio"  data={this.props.data[this.state.count]}/>
				<span onClick={this.getBackWardMusic} className="iconMusic icon-backward"></span>
				<span onClick={this.musicPlay} className={classString}></span>
				<span onClick={this.getForwardMusic} className="iconMusic icon-forward"></span>
			</header>
		);
	}
});

var List = React.createClass({
	render: function() {
		return (
			<div className="List"></div>
		);
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<div className="Footer"></div>
		);
	}
});
module.exports = Music;
