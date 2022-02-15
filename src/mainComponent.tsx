import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import TextInputMe from './components/TextInput/textInputMe';
import DataList from './components/Datalist/Datalist';
import DataDetail from './components/Datadetails/Datadetails';
import { connect } from 'react-redux';
import { addData, deleteData } from './redux/actionCreator';


const mapDispatchToProps=(dispatch:any)=>{
  return{
    addData:(data:any)=>{dispatch(addData(data))},
    deleteData:(key:string)=>{
      dispatch(deleteData(key))
    }
  }
}

const stateMapToDatas=(state:any)=>{
  return{
     datas:state.datas
  }
}

const ManiComponent=(props:any)=>{
    const [inputValue, setInputValue]=useState("");
  
  const[selectedData,setSelectedData]=useState({});


  const textItemClickHandler=(key:string)=>{
    const selected=props.datas.find((dt: { key: string,value: string })=>{
      return dt.key=== key;
    })||{};
    setSelectedData(selected);
  }
  const detailHideHandler=()=>{
    setSelectedData({})
  }
  const deleteItemHandler=(key:string)=>{
    props.deleteData(key)
      setSelectedData({})  
  }
  /*
  
  */
  const showInput=()=>{
    if(inputValue!=""){
      props.addData({
        key: (new Date()).getMilliseconds().toString(),
        value: inputValue,
        image:{
          uri:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        }
      });
    }
    else{
      alert("Noting entered!")
    }
  }
  let dataDetail=null;
  if(Object.keys(selectedData).length!==0){
    dataDetail=<DataDetail data={selectedData} detailHideHandler={detailHideHandler} deleteItemHandler={deleteItemHandler}/>
  }

  return (
    <View style={styles.container}>

      {dataDetail}

      <TextInputMe showInput={showInput} setInputValue={setInputValue}/>
      
      <DataList datas={props.datas} textItemClickHandler={textItemClickHandler}/>
      
      <StatusBar style="auto" />
    </View>
  );
} 

export default connect(stateMapToDatas,mapDispatchToProps)(ManiComponent);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });