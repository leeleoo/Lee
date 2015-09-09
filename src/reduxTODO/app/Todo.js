import React,{Component} from 'react';
import Todo from './Todo';
export default class TodoList extends Component{
	render(){
		return(
				<li
					onClick = {this.props.onClick}
					style={{
						textDecoration:this.props.completed ? "line-through":'none',
						cursor:this.props.completed ? "default" :"pointer"
					}}
				>
				{this.props.text}
				</li>
			)
	}
}
