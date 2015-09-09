import React,{Component} from "react";
import {connect} from "react-redux";
import {
    play,
    pause,
    playDefault,
    playthis
}
from '../action';
import Musiclist from "./Musiclist";
import musicData from "../data";
import Appheader from "./appheader";
class App extends Component {
	componentDidUpdate(prevProps, prevState) {
	    let audio = React.findDOMNode(this.refs.audio);
	    if (prevProps.isplay) {
	        audio.pause();
	    } else {
	        audio.play();
	    }
	}
	render(){
		let {dispatch,currentSong,isplay,musiclist} = this.props;
		let btn;
		if(isplay){
			btn = <button onClick={()=> dispatch(pause())}>暂停</button>;
		}else{
			btn = <button onClick={()=> dispatch(play())}>播放</button>;
		}

		
		return(
				<div>
					<Appheader />
					<audio ref="audio" src={currentSong.songUrl} controls="controls">你问我资磁不资磁</audio>
					<div>
						{btn}
					</div>
					<Musiclist list={musiclist} clickToplay={index => dispatch(playthis(index))}/>
				</div>
			)
	}

  // methods
}

function select(state){
	return {
		isplay:state.isplay,
		currentSong:state.currentSong,
		musiclist:state.musiclist
	}
}

export default connect(select)(App);
