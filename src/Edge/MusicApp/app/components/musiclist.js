import Musicline from "./musicline";
export default class MusicList extends React.Component {
  render(){
  	return (
  			<ul>
  			{
  				this.props.list.map((song, index)=>
  						<Musicline 
  							key={index}
  							onClick={() => { 
  							this.props.changeSong(index)}} 
  							{...song}/>
  				)
  			}
  			</ul>
  		);
  }

}
