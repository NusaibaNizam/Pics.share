import React from "react";
import { View, Button,Image } from "react-native";
import TextInputMe from '../TextInput/textInputMe';
import { useState } from 'react';
import { addData } from "../../redux/actionCreator";
import { connect } from 'react-redux';
import PickImage from "../PickImage/PicImage";
const mapDispatchToProps=(dispatch)=>{
    return{
      addData:(data)=>{dispatch(addData(data))},
    }
  }
const ShareData=(props)=>{
    let myTextInput={}
    let placeholder="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
    const [inputValue, setInputValue]=useState("");
    const [image, setImage]=useState(placeholder)
    const showInput=()=>{
        if(!(inputValue===""|| image===placeholder)){
          props.addData({
            key: (new Date()).getMilliseconds().toString(),
            value: inputValue,
            image: {
                uri: image
            }
          });

          setImage(placeholder)
          myTextInput.current.clear()
          props.navigation.navigate("Find Data")
        }
        else{
          alert("Data or Image not entered!")
        }
      }
    return(
        <View>
            <View
            style={
                {
                    flexDirection: "row",
                    width:'85%',
                    alignContent: 'space-around',
                    marginTop: 20,
                    alignItems: 'center'

                }
            }
        >
            <PickImage image={image} setImage={setImage}/>
            <TextInputMe showInput={showInput} setInputValue={setInputValue} myTextInput={myTextInput}/>
            <Button
            onPress={()=>{

                    setInputValue("");
                    showInput()
                }
            }
            title='Send'
            />
        </View>
        <View>
            <Image source={{uri: image}} style={{ width: '80%', height: '80%', margin: '10%'}}/>
        </View>
        </View>
        
        
        
    )
}
export default connect(null,mapDispatchToProps)(ShareData);