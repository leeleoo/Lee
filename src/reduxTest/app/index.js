import React,{Component}  from "react";
import {connect} from "react-redux";
import {plusNum,reduce} from "../action";

class App extends Component {
	render(){
		let {dispatch,Num} = this.props;
		return(
			<div>
				<h1>{Num}</h1>
				<button onClick={()=>dispatch(plusNum())}>+++</button>
				<button onClick={()=>dispatch(reduce())}>---</button>
			</div>	
			);
	}

}
function select(state) {
  return {
    Num: state.changeNum
  };
}
export default connect(select)(App);
