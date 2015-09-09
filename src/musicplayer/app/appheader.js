import React from 'react';
import { Tabs } from 'antd';
let TabPane = Tabs.TabPane;
var App = React.createClass({
  render() {
  	function callback(key) {
  	  console.log(key);
  	}
  	return   <Tabs defaultActiveKey="1" onChange={callback}>
		    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
		    <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
		    <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
		  </Tabs>
  }
});


export default App;
