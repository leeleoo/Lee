var React = require('react');

var list = React.createClass({
	getStyle :function(){
		return{
			li:{
				display:"block",
				opacity:1,
				transition:'all 0.5s',
				height:"104px",
			},
			a:{
				visibility : 'visible'
			},
			i:{
				color:"#fb0",
				"font-size":"20px"
			},
			span:{
				color:"#eb5211"
			}
		}
	},
	render: function() {
		var styles = this.getStyle();
		var printer = this.props.data;
		//打印机墨盒的颜色
		var colors = printer["marker_colors"];
		//得到总墨量
		var rice = printer["printer_rice"];
		//现在的墨量
		var current = printer["printer_current"];
		//告警墨量
		var warn = printer["printer_warn"];
		//墨盒型号
		var markerName = printer["printer_markerName"];
		//打印机ID
		var printerID = printer["printer_ID"];
		//计算使用的墨量
		var remain = 0;
		var totality = 0;
		for (var n = 0; n < current.length; n++) {
			if(isNaN(current[n])) continue;
		    remain += current[n]
		};
		for (var d = 0; d < rice.length; d++) {
			if(isNaN(rice[d])) continue;
		    totality += rice[d]
		};
		var percentRemain = Math.ceil(remain / totality * 100);
		return (
			<li id={printer.printer_ID} style={styles.li} className="Edge-item">
			    <div className="list-item">
			        <div className="p">
			            <a href="javascript:viod(0);">
			            	<img className="p-pic" src={printer.printer_mainImg} style={styles.a} />
			            </a>
			        </div>
			        <div className="d">
			            <a href="javascript:void(0);"  data-spm-anchor-id="0.0.0.0">
			                <h3 className="d-title">{printer.printer_model}</h3> </a>
			            <p className="d-price"> <em className="h"><i className="fa fa-warning" style={styles.i}></i><span className="font-num">你的打印机墨量不足</span></em></p>
			            <div className="d-main">
			                <p className="d-freight">剩余<span style={styles.span}>{percentRemain}%</span>的墨量</p>
			                <p className="d-num"> <span className="font-num"></span> </p>
			                <p className="d-area"> 查看详情 </p>
			            </div>
			        </div>
			    </div>
			    <div className="icons-group">
			        <div className="item-icons-zx">
			            <div className="item-icon icons-miniphone"> </div> Edge </div>
			    </div>
			</li>
		);
	}

});

module.exports = list;
