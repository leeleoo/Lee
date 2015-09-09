var React = require('react');

var DeviceModal = React.createClass({
	submitMagicData: function(){
		var form = React.findDOMNode(this.refs.form);
		var MagicName = $(form).find("#MagicName").val();
		var MagicUse = $(form).find("#MagicUse").val();
		var MagicPrice = $(form).find("#MagicPrice").val();
		var MagicAddr = $(form).find("#MagicAddr").val();
		var MagicData = {
			name: MagicName,
			useAge: MagicUse,
			price: MagicPrice,
			addr: MagicAddr
		};
		this.props.handleMagic(MagicData);
	},
	render: function() {
		return (
			<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title" id="myModalLabel">Power Of Dark Side</h4>
			      </div>
			      <div className="modal-body">
			        <form ref="form" className="form-horizontal">
						<fieldset>
	                        <legend> </legend>
	                        <div className="form-group">
	                            <label htmlFor="MagicName" className="col-lg-3 control-label">Magic Name</label>
	                            <div className="col-lg-9">
	                                <input type="text" className="form-control" id="MagicName" placeholder="MagicName" />
	                            </div>
	                        </div>
	                        <div className="form-group">
	                            <label htmlFor="MagicUse" className="col-lg-3 control-label">Magic Use Age</label>
	                            <div className="col-lg-9">
	                                <input type="text" className="form-control" id="MagicUse" placeholder="MagicUse" />
	                            </div>
	                        </div>
	                        <div className="form-group">
	                            <label htmlFor="MagicPrice" className="col-lg-3 control-label">Magic Price</label>
	                            <div className="col-lg-9">
	                                <input type="text" className="form-control" id="MagicPrice" placeholder="MagicPrice" />
	                            </div>
	                        </div>
	                        <div className="form-group">
	                            <label htmlFor="MagicAddr" className="col-lg-3 control-label">Magic Addr</label>
	                            <div className="col-lg-9">
	                                <input type="text" className="form-control" id="MagicAddr" placeholder="Magic Addr" />
	                            </div>
	                        </div>
						</fieldset>
			        </form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.addNewDevice}>Close</button>
			        <button type="button" className="btn btn-primary" onClick={this.submitMagicData}>Save Magic</button>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});

module.exports = DeviceModal;