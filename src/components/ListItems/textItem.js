import React from "react";
import { View, Text, StyleSheet ,TouchableHighlight,Image} from "react-native";

const  TextItem=props=>{
    return(
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="cornflowerblue"
            onPress={props.onpressed}
            style={styles.touchable}
            >
            <View style={styles.listView}>
                <Image source={props.image}
                    style={
                        {
                            height: '100%',
                            width: 35,
                            margin: 5
                        }
                    }
                />
                <Text style={styles.listItem}>
                    {props.value}
                </Text>
            </View>
        </TouchableHighlight>
       
    );
}
const styles=StyleSheet.create({
    listItem:{
        color: 'lavender',
        padding: 5
    },
    listView:{

        height: 70,
        padding: 10,
        backgroundColor:'lightslategrey',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    touchable:{
        margin: 5,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    }
});
export default TextItem;