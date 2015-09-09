import React,{Component}  from "react";

export default class Voice extends Component {
	_getSlider(e){
			let slider	= this.refs.slider.getDOMNode();
		  let {left,right} = slider.getBoundingClientRect();
		  if(e.pageX>=right || e.pageX<=left) return; 	
		  let barWidth = right - left;
		  let btnLeft =  e.pageX - left;
		  let final = btnLeft / barWidth * 100;
		  if(final <= 3) final = 0;
		  //this.props.actions.changeVOL(final);
			this.props.changeVoice(final);
		
	}
	onhandleMouseDown(e){		
	  document.onmousemove = (e)=>{
	  		this._getSlider(e);
	  }
	  document.onmouseup = (e)=>{
	  	document.onmousemove = null;
	  }
	}
	handleClick(e){
	 	this._getSlider(e);
	}
	render(){
		return (
				<span ref="slider" style={{cursor:"pointer"}} className="voice" onClick={e => this.handleClick(e)} >
					<i className="voice_btn" style={{left:this.props.VOL+"%"}}
						onMouseDown={e => this.onhandleMouseDown(e)}
					></i>
					<i className="currentvoice" style={{width:this.props.VOL+"%"}}></i>
				</span>
			)
	}	

}
