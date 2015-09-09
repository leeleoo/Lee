import React,{Component} from "react";
require("../css/font-awesome.min.css");
require("../css/main.scss");
import Voice from "./voice";
import Music_List from "../../data";
import MusicList from "./musiclist";
import Progressbar from "./progress";
export default class Body extends Component {
	handleSecToMinu(dur){
		let minu = Math.floor(dur / 60);
		let sec = Math.round(Math.abs(dur - minu * 60));
		if(sec.toString().length<2) return minu+":0"+sec;
		return  minu+":"+sec;
	}
	handleProgress(){
		var audio = React.findDOMNode(this.refs.audio);
		let percent = (1 - audio.currentTime / audio.duration)*100;
		this.props.actions.updateProgress(percent);
	}
	componentDidMount() {
		let audio = React.findDOMNode(this.refs.audio);
		audio.addEventListener("canplay",()=>{
			this.props.actions.setDuration(audio.duration);
		},false);
		audio.addEventListener("timeupdate", ()=>this.handleProgress(),false);
	}
	componentDidUpdate(prevProps) {
		let audio = React.findDOMNode(this.refs.audio);
		audio.volume = this.props._player.VOL / 100;
		if (prevProps._player.isPlay) {
				audio.play();
		}else{
				audio.pause();
		}
	}
	render(){
		let playorpause;
		let {VOL,currentSong,isPlay,currentTime,current,durationTime} = this.props._player;
		 if(isPlay){
			 playorpause  =  <li onClick={()=>this.props.actions.pause()}><i className="fa fa-pause"></i></li>
		}else{
			 playorpause  =  <li onClick={()=>this.props.actions.play()}><i className="fa fa-play"></i></li>
		}
		let cTime = 100 - currentTime;
		let dur = durationTime;
		let durTime = this.handleSecToMinu(dur) ;
		let curTime;
		if(currentTime===-100){
			 curTime = "0:00";
		}else{
			let cSec = Math.round(dur * cTime / 100);
			 curTime = this.handleSecToMinu(cSec) ;
		}
		return(
		<div className="bodyContainer">
			<nav>
				<div className="leftlist">
					<MusicList 
						list={Music_List} 
						changeSong={this.props.actions.changeSong }/>
				</div>
			</nav>
			<div className="player">
				<div className="music_pic">
					<img style={{height:"100%"}} src="./assets/img/1.jpg" alt="" />
				</div>
				<div className="music_content">
					<audio style={{display:"none"}} ref="audio" src={currentSong.songUrl} controls="controls">你问我资磁不资磁</audio>
					<div className="music_button">
						<ul>
							<li><i className="fa fa-backward"></i></li>
							{
								playorpause
							}
							<li><i className="fa fa-forward"></i></li>
						</ul>
					</div>
					<div className="music_progress">
						<nav>
							<span>{curTime}</span>
							<div className="progress">
								<Progressbar currentTime={currentTime} />
							</div>
							<span>{durTime}</span>
						</nav>
						<footer className="music_status">
							<div className="footerdetail">
								<span>{currentSong.song}\{currentSong.album}</span> &nbsp;&nbsp;
							</div>
							<div className="footbar">
								<Voice changeVoice={this.props.actions.changeVOL} VOL={VOL} />
								<span className="option">
									<i className="fa fa-random"></i>
								</span>
								<span className="share">
									<i className="fa fa-share-square-o"></i>
								</span>
							</div>
						</footer>
					</div>

				</div>
			</div>
		</div>
		);
	}	

}
