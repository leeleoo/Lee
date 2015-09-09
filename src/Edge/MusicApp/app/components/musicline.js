export default class Musicline extends React.Component {
	render(){
		return(
				<li 
					onClick={()=> this.props.onClick()}>
					{this.props.song}
				</li>
			);
	}

}
