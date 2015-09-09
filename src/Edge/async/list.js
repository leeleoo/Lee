var React = require('react');
require('./taobao.css');
var list = React.createClass({
	getInitialState: function() {
		return {
			printer:this.props.data,
			toggle:true,
			initHeight:99,
			finallHeight:undefined
		};
	},
	getStyle: function(data) {
	    return {
	        li: {
	            display: "block",
	            opacity: 1,
	            transition: 'all 0.5s',
	            position: "relative",
	            height:this.state.initHeight +"px"
	        },
	        a: {
	            visibility: 'visible'
	        },
	        i: {
	            color: "#fb0",
	            fontSize: "20px"
	        },
	        span: {
	            color: "#eb5211"
	        },

	        desc:{
	        	position: "relative",
	        	left: "2px",
	        	top: "-2px"
	        },
	        asc:{
	        	position: "relative",
	        	left: "2px",
	        	top: "3px"
	        }
	    }
	},
	handleToggle:function(){
		if(this.state.toggle){
			this.setState({
				toggle: false
			});
		}else{
			this.setState({
				toggle: true
			});
		}
	},
	componentWillMount: function() {


	},
	componentDidMount: function() {

	    var thisHeight = $("#targetDOM").height();
	    $("#targetDOM").css("height","0px");
	    $("#targetDOM").css("display","block");
	    setTimeout(function(){
	    	$("#targetDOM").css("minHeight",thisHeight);
	    	setTimeout(function(){
	    	$("#targetDOM").css("height","auto");
	    	}, 800);
	    }, 150);
	    var printer = this.state.printer;
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
	    var maxPX = 45;
	    var colors = printer["marker_colors"];
	    var colorBox = React.findDOMNode(this.refs.colorBox);
	    this.state.finallHeight = 10 + 1 + 17 + 2 + this.state.initHeight;
	    var flag = 0;
	    for (var i = 0; i < colors.length; i++) {
	        var margin_top = current[i] / rice[i] * 45;
	        if (margin_top < 5) {
	            margin_top = 5;
	        }
	        margin_top = maxPX - margin_top;
	        var hasColor = this.getStyle().hasColor;
	        if(colors[i].length === 7 ){
	        	this.state.finallHeight += 47;
	        	var Marker = $(colorBox).find('i').eq(flag===0 ? i: flag-1+i).attr("class","hasColor");
	        	var detailColor = {
	        	    display: "block",
	        	    width: "100%",
	        	    height: "100%",
	        	    marginTop: margin_top,
	        	    backgroundColor: colors[i]
	        	}
	        	$(Marker).find("span").css(detailColor);
	        }else{
	        	var allMarker = colors[i].split("#");
	        	for(var j = 0 ; j < allMarker.length; j++){
	        		 if(allMarker[j].length <3 ) continue;
	        		 ++flag;
	        		this.state.finallHeight += 47;
	        		var detailColor = {
	        		    display: "block",
	        		    width: "100%",
	        		    height: "100%",
	        		    marginTop: margin_top,
	        		    backgroundColor: "#"+allMarker[j]
	        		}
	        		var Marker = $(colorBox).find('i').eq(i===0? flag-1: flag-1+i).attr("class","hasColor");
	        		$(Marker).find("span").css(detailColor);
	        	}
	        }
	    };

	},

	render: function() {

		var styles = this.getStyle();
		var printer = this.state.printer;
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
		$("#"+printerID).css({
			overflow: "hidden",
			transition:"all 0.5s ease-out"
		});
		if(this.state.toggle){
			$("#"+printerID).css({
				height: this.state.initHeight
			});
		}else{
			$("#"+printerID).css({
				height: this.state.finallHeight
			});
		}
		// for (var n = 0; n < current.length; n++) {
		// 	if(isNaN(current[n])) continue;
		//     remain += current[n]
		// };
		// for (var d = 0; d < rice.length; d++) {
		// 	if(isNaN(rice[d])) continue;
		//     totality += rice[d]
		// };

		var detailItems = [];
		for (var i = 0; i < colors.length; i++) {
			if(current[i] / rice[i] < 0.05){
				var contentWidth = "5%";
				var vis= "block";
				var visr = "none";
			}else{
				var contentWidth = Math.ceil(current[i] / rice[i] * 100) + "%";
				var vis = "none";
				var visr = "block";
			}
			var boxContent = {
				background:colors[i],
				width:contentWidth
			};
			var detailWarning ={
				display:vis
			}
			var visble = {
				display:visr
			}
			var toBuy = "http://s.m.taobao.com/h5?q=";
			toBuy += printer.printer_model.split(" ").join("+") + "+" + markerName;
			toBuy += "&search=%E6%8F%90%E4%BA%A4";
			if (markerName[i].indexOf(" ") > -1 && markerName[i].length >= 8) {
			    var mark_name = markerName[i].split(" ")[markerName.length - 1];
			} else {
			    var mark_name = markerName[i];
			}

			if(colors[i].length === 7 ){
				detailItems.push(
				<li className="detail-box">
					<div className="box-content" >
						<span className="marker-title" style={boxContent}>
								<span style={visble}>{contentWidth}</span>
						</span>
							<a href={toBuy} target="_blank" className="toBuy"></a>
							<i  className="detail-warning" style={detailWarning}>墨量不足5% , 点击购买</i>
					</div>
					<div className="detail-right">
						{mark_name}
					</div>
				</li>
				);
					}else{
				var allMarker = colors[i].split("#");
				for (var j = 0; j < allMarker.length; j++) {
					if(allMarker[j].length<3) continue;
					boxContent = {
						background:"#"+allMarker[j],
						width:contentWidth
					};
					detailItems.push(
					<li className="detail-box">
						<div className="box-content" >
							<span className="marker-title" style={boxContent}>
								<span style={visble}>{contentWidth}</span>
							</span>
								<i className="detail-warning" style={detailWarning}>墨量不足5% , 点击购买</i>
						</div>
						<div className="detail-right">
							{mark_name}
						</div>
					</li>
					);
				};

			}

		};


		var percentRemain = Math.ceil(remain / totality * 100);
		if(!this.state.toggle){
			var toggle =  <span>收起<i style={styles.asc} className="fa fa-sort-asc"></i></span>;
		}
		else{
			var toggle =  <span>展开<i style={styles.desc} className="fa fa-sort-desc"></i></span>;
		}
		return (
			<li id={printer.printer_ID} style={styles.li} className="Edge-item" >
			<div className="list-item" >
				<div className="p">
					<a href="javascript:viod(0);" >
						<img className="p-pic" src={printer.printer_mainImg} style={styles.a}/>
					</a>
				</div>
				<div className="d">
					<a href="javascript:void(0);" data-spm-anchor-id="0.0.0.0" >
						<h3 className="d-title">{printer.printer_model}</h3>
					</a>
					<div className="_d-main">
						<div className="_colorbox" ref="colorBox">
							<i ref="a" data-id="0" className="noColor">
								<span></span>
							</i>
							<i ref="b" data-id="1" className="noColor">
								<span></span>
							</i>
							<i ref="c" data-id="2" className="noColor">
								<span></span>
							</i>
							<i ref="d" data-id="3" className="noColor">
								<span></span>
							</i>
							<i ref="e" data-id="4" className="noColor">
								<span></span>
							</i>
							<i ref="f" data-id="5" className="noColor">
								<span></span>
							</i>
							<i ref="g" data-id="6" className="noColor">
								<span></span>
							</i>
							<i ref="h" data-id="7" className="noColor">
								<span></span>
							</i>
						</div>
						<div className="_toggle" onClick={this.handleToggle}>
							{toggle}
						</div>
					</div>
				</div>
			</div>
			<div className="detail-group">
				<ul>
					{detailItems}
				</ul>
			</div>
			</li>
		);
	}

});

module.exports = list;



