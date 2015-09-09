import React,{Component}  from "react";
//import Appheader from './components/header';
import Appbody from './components/body';
//import Appfooter from './components/footer';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {changeVOL,changeSong,play,pause,updateProgress,setDuration} from '../action';
import * as MusicAction from "../action";
class App extends Component {
	render(){
		let {player,dispatch} = this.props;
		let actions = bindActionCreators(MusicAction,dispatch);
		return (
		<div style={{height:"100%"}}>
			<Appbody 
				_player = {player} 
				actions = {actions}
/*				pause = {()=>dispatch(pause())}
				play = {()=>dispatch(play())}
				changeSong = {(index)=>dispatch(changeSong(index))}
				updateProgress = {(Progress)=>dispatch(updateProgress(Progress))}
				setDuration = {(duration)=>dispatch(setDuration(duration))}*/
			/>
		</div>
		);
	}

}
function select (state){
	return {
		player:state.player
	}
}
export default connect(select)(App);
