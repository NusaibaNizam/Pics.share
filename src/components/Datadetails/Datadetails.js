import React from "react";
import { View, Modal, Text, Image, Button, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DataDetail=(props)=>{
    return(
        <Modal>
            <View style={
                {
                    width:'100%',
                    height:'100%',
                    alignItems:'center',
                    justifyContent:'center'
                }
            }>
                <View style={
                    {
                        width:'80%'
                    }
                }>
                    <Image source={props.data.image} style={{ width: '100%', height: '80%', marginTop: '1%', marginBottom:'5%'}}/>
                    <View style={
                        {        
                            padding: 10,
                            width: '100%',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }
                    }>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}>
                            {props.data.value}
                        </Text>
                    </View>
                    
                </View>
                <View style={
                    {
                        alignItems:"center",
                        width:'80%'
                    }
                }>
                    <TouchableOpacity
                        onPress={()=>{props.deleteItemHandler(props.data.key)}}
                        title="Delete"
                    >
                        <Icon name="delete-empty" size={30} color="#900" /> 
                    </TouchableOpacity>


                    <View style={{height:20, }}></View>

                    <TouchableOpacity
                        title="Close" onPress={()=>{props.detailHideHandler()}}
                    >
                        <Icon name="close-circle-multiple" size={30} color='#00008b' /> 
                    </TouchableOpacity>
                    
                </View>
            </View>
            
        </Modal>
    )
} 
export default DataDetail;