import React,{Component} from "react";
export default class Musicli extends Component {
	render(){
		return(
				<li onClick={(index)=>this.props.onClick}>
					{this.props.song}
				</li>
			);
	}

}
