import React,{Component}  from "react";
import MusicLi from "./musicli";
export default class Musiclist extends Component {
	render(){
		console.log("Musiclist",this.props);
		return(
				<ul>
					{this.props.list.map((song,index) =>
						<MusicLi 
							{...song}
							key={index}
							onClick={() => this.props.clickToplay(index)} />
					)}
				</ul>
			);
	}

}
