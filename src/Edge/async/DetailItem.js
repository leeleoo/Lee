var React = require('react');

var DetailItem = React.createClass({

	render: function() {
		this.props.data.
		return (
			<li className="detail-box">
				<div className="box-content">
					<span className="marker-title">
						100%
					</span>
						<i className="detail-warning">墨量不足10% , 点击购买</i>
				</div>
				<div className="detail-right">
					我是asdfasdfasdf新号
				</div>
			</li>
		);
	}

});

module.exports = DetailItem;
