export default class Progress extends React.Component {
  render(){
	return <i style={{transform:"translate3d(-"+this.props.currentTime+"%,0,0)"}} className="progressbar"></i>
		}
}
