"use strict";
var React = require('react/addons');
require("../css/bootstrap.css");
require("../css/material.css");
require("../css/devicelist.css");
require("../js/bootstrap.min.js");
require("../js/material.min.js");
var DeviceModal = require("./DeviceModal");

var DeviceList = React.createClass({
	getInitialState: function() {
		var Data = require("./DeviceData");
		return {
			DeviceData: Data
		};
	},
	addNewDevice: function(){
		$("body").css("background", "#e3ee23");
	},
	addHandleMagic: function(aMagic){
		 this.state.DeviceData.push(aMagic);
		var DeviceData = this.state.DeviceData;
		console.log("DeviceData",DeviceData);
		this.setState({
			DeviceData: DeviceData
		});
	},
	render: function() {
		var trs = this.state.DeviceData.map(function(index,i) {
			if(index.suppor){
				index.suppor = "建议";
			}else{
				index.suppor = "不建议";
			}
			return (
				<tr key={index.price}>
					<td>{index.suppor}</td>
					<td>{index.useAge}</td>
					<td><a href={index.addr} target={"_blank"}>{index.name}</a></td>
					<td>{index.price}</td>
				</tr>
				);
		});
		var btnStyle = {
			margin:'20px',
			padding:'8px 25px'
		};
		return (
			<div>
				<div className="title">
					<h1>
						采购清单
					</h1>
				</div>
				<div className="mainBox table-responsive box-shadow">
					<button style={btnStyle} type="button" className="btn btn-warning btn-lg pull-right" data-toggle="modal" data-target="#myModal">
					  add New Device
					</button>
					<table className="table table-hover  table-bordered">
						<thead>
							<tr>
								<th></th>
								<th>用途</th>
								<th>名称</th>
								<th>价格</th>
							</tr>
						</thead>
						<tbody>
						{trs}
						</tbody>
					</table>
				</div>
				<DeviceModal handleMagic={this.addHandleMagic}/>
			</div>
		);
	}
});
React.render(<DeviceList/>, document.body);
