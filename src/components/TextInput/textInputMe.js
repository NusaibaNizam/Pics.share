import React from "react";
import { View, TextInput, Button, StyleSheet} from "react-native";


 const TextInputMe=(props)=>{
   let myTextInput={};
    return(
        <View style={styles.inputView}>
        <TextInput
        style={styles.input}
        placeholder="Type..."
        keyboardType='default'
        selectionColor={'chartreuse'}
        onChangeText={text=>props.setInputValue(text)}
        ref={myTextInput}
        />
        <Button
        onPress={()=>{props.showInput()
          myTextInput.current.clear();
          }
        }
        title='Send' ></Button>
      </View>
    )
 }
 const styles = StyleSheet.create({
    input: {
      width:260,
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      borderBottomColor: 'pink',
      padding: 10,
    },
    inputView:{
      width:'85%',
      margin: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  });
  export default TextInputMe;