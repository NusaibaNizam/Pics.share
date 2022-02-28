import React from "react";
import { View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker'
const PickImage=(props)=>{
    const handleImagePick= async()=>{
        try {
            let result=await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect:[2,3],
                quality: 1,
                base64: true
            })
            if(!result.cancelled){
                props.setImage(`data:image/jpg;base64,${result.base64}`);
            }
        }catch(E){
            console.log(E)
        }
    }
    return(
        <View>
        <TouchableOpacity
            title="Pick an image"
            onPress={()=>{handleImagePick()}}
        >
            <Icon name="image-plus" size={40} color="blue"/>
        </TouchableOpacity>
        </View>
    )
}
export default PickImage;