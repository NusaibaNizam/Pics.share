import React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import DataList from '../Datalist/Datalist';
import DataDetail from '../Datadetails/Datadetails';
import { connect } from 'react-redux';
import {deleteData,loadData } from '../../redux/actionCreator';


const mapDispatchToProps=(dispatch)=>{
  return{
    deleteData:(key)=>dispatch(deleteData(key)),
    loadData:()=>dispatch(loadData())
    
  }
}

const stateMapToDatas=(state)=>{
  return{
     datas:state.datas
  }
}

const FindData=(props)=>{
  const[selectedData,setSelectedData]=useState({});


  useEffect(()=>{
    props.loadData()
  })


  const textItemClickHandler=(key)=>{
    const selected=props.datas.find((dt)=>{
      return dt.key=== key;
    })||{};
    setSelectedData(selected);
  }
  const detailHideHandler=()=>{
    setSelectedData({})
  }
  const deleteItemHandler=(key)=>{
    props.deleteData(key)
      setSelectedData({})  
  }
  /*
  
  */
 
  let dataDetail=null;
  if(Object.keys(selectedData).length!==0){
    dataDetail=<DataDetail data={selectedData} detailHideHandler={detailHideHandler} deleteItemHandler={deleteItemHandler}/>
  }

  return (
    <View style={styles.container}>

      {dataDetail}

      
      
      <DataList datas={props.datas} textItemClickHandler={textItemClickHandler}/>
      
      <StatusBar style="auto" />
    </View>
  );
} 

export default connect(stateMapToDatas,mapDispatchToProps)(FindData);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });