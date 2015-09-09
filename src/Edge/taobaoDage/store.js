var Reflux = require("reflux");
var Actions = require("./action");
var Store = Reflux.createStore({
    listenables: [Actions],
    getPrinterAttr: function(originPrinterArr) {
        var PrinterArr = [];
        for (var i = 0, length1 = originPrinterArr.length; i < length1; i++) {
            var Printer = {}
            var printerAttr = originPrinterArr[i].attributes;
            var printerIpp = printerAttr["printer.ipp"]["value"];
            if (printerAttr["images"]) {
                //得到打印机图片
                Printer["printer_mainImg"] = "//resource.wi.fi/Assets/" + printerAttr["images"]["value"][1];
            } else {
                Printer["printer_mainImg"] = printerIpp["printer-icons"][1];
            }

            //打印机driver
            var printDriver = originPrinterArr[i].actions.print;

            Printer["printer_driver"] = [];
            for (var key in printDriver) {
                Printer["printer_driver"].push(key);
            }


            //打印机状态 "0表示离线"
            Printer["state"] = originPrinterArr[i].state;
            //打印机ID
            Printer["printer_ID"] = originPrinterArr[i].id;
            //得到打印机型号
            Printer["printer_model"] = originPrinterArr[i].attributes.model.value;
            //得到打印机名称
            Printer["printer_name"] = printerIpp["printer-name"];
            //打印机墨盒的颜色
            Printer["marker_colors"] = printerIpp["marker-colors"];
            //得到总墨量
            Printer["printer_rice"] = printerIpp["marker-high-levels"];
            //现在的墨量
            Printer["printer_current"] = printerIpp["marker-levels"];
            //告警墨量
            Printer["printer_warn"] = printerIpp["marker-low-levels"];
            //墨盒型号
            Printer["printer_markerName"] = printerIpp["marker-names"];

            PrinterArr.push(Printer);
            //ALLPRINTER[originPrinterArr[i].id] = Printer;
        }
        return PrinterArr;
    },
    findDevice: function(KeyWord) {
        var promise = new Promise(function(resolve, reject) {
            $.post("//API.wi.fi/device/all")
                .done(function(res) {
                	console.log('Promise',res);
                    var tmpArr = [];
                    var deviceList = res.result;
                    if (KeyWord === "device") {
                        for (var Device in deviceList) {
                            if (deviceList[Device]["classes"]) {
                                if (isEmptyObject(deviceList[Device]["classes"])) continue;
                                tmpArr.push(deviceList[Device]);
                                console.log("deviceList[Device][]", deviceList[Device]["classes"]);
                            }
                        }
                    }
                    if (KeyWord === "printer") {
                        for (var Device in deviceList) {
                            if (deviceList[Device]["classes"]) {
                                if (deviceList[Device]["classes"][KeyWord] && deviceList[Device]["actions"]["print"]) {
                                    tmpArr.push(deviceList[Device]);
                                }
                            }
                        }
                    }
                    console.log(tmpArr);
                    resolve(tmpArr);
                });
        });
        return promise;
    },
    items: {
        deviceList: null
    },
    onInitData: function(kObj) {
    	Store.findDevice(kObj.key)
    	    .then(function(tmpArr) {
    	        //得到需要的打印机数据对象
    	        var printerArr = Store.getPrinterAttr(tmpArr);
    	         console.log("printerArr", printerArr);
    	         Store.trigger(printerArr);
    	    });
    },
    onGetAll: function() {

    },
    onToggleDialog: function() {

    }
});
module.exports = Store;
