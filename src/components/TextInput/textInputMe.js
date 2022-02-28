import React from "react";
import { View, TextInput, StyleSheet} from "react-native";


 const TextInputMe=(props)=>{
    return(
        <View style={styles.inputView}>
        <TextInput
        style={styles.input}
        placeholder="Type..."
        keyboardType='default'
        selectionColor={'chartreuse'}
        onChangeText={text=>props.setInputValue(text)}
        ref={props.myTextInput}
        />
        
      </View>
    )
 }
 const styles = StyleSheet.create({
    input: {
      width: '95%',
      borderBottomWidth: 1,
      borderBottomColor: 'pink',
      padding: 10,
    },
    inputView:{

      width: '85%',
      margin: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    }
  });
  export default TextInputMe;