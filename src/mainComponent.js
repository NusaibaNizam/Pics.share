"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var expo_status_bar_1 = require("expo-status-bar");
var react_native_1 = require("react-native");
var textInputMe_1 = __importDefault(require("./components/TextInput/textInputMe"));
var Datalist_1 = __importDefault(require("./components/Datalist/Datalist"));
var Datadetails_1 = __importDefault(require("./components/Datadetails/Datadetails"));
var react_redux_1 = require("react-redux");
var actionCreator_1 = require("./redux/actionCreator");
var mapDispatchToProps = function (dispatch) {
    return {
        addData: function (data) { dispatch(actionCreator_1.addData(data)); },
        deleteData: function (key) {
            dispatch(actionCreator_1.deleteData(key));
        }
    };
};
var stateMapToDatas = function (state) {
    return {
        datas: state.datas
    };
};
var ManiComponent = function (props) {
    var _a = react_2.useState(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = react_2.useState({}), selectedData = _b[0], setSelectedData = _b[1];
    var textItemClickHandler = function (key) {
        var selected = props.datas.find(function (dt) {
            return dt.key === key;
        }) || {};
        setSelectedData(selected);
    };
    var detailHideHandler = function () {
        setSelectedData({});
    };
    var deleteItemHandler = function (key) {
        props.deleteData(key);
        setSelectedData({});
    };
    /*
    
    */
    var showInput = function () {
        if (inputValue != "") {
            props.addData({
                key: (new Date()).getMilliseconds().toString(),
                value: inputValue,
                image: {
                    uri: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                }
            });
        }
        else {
            alert("Noting entered!");
        }
    };
    var dataDetail = null;
    if (Object.keys(selectedData).length !== 0) {
        dataDetail = <Datadetails_1["default"] data={selectedData} detailHideHandler={detailHideHandler} deleteItemHandler={deleteItemHandler}/>;
    }
    return (<react_native_1.View style={styles.container}>

      {dataDetail}

      <textInputMe_1["default"] showInput={showInput} setInputValue={setInputValue}/>
      
      <Datalist_1["default"] datas={props.datas} textItemClickHandler={textItemClickHandler}/>
      
      <expo_status_bar_1.StatusBar style="auto"/>
    </react_native_1.View>);
};
exports["default"] = react_redux_1.connect(stateMapToDatas, mapDispatchToProps)(ManiComponent);
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
