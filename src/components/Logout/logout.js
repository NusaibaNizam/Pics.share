import React from "react";
import { TouchableOpacity } from "react-native";
import { navigate } from "../../../navigationhelper";
import { logoutUser } from "../../redux/actionCreator";
import { connect } from "react-redux";

const mapDispatchToProps=(dispatch)=>{
    return{
        logoutUser:()=>{dispatch(logoutUser())}
    }
}

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const LogOut=(props)=>{
    return(
        <TouchableOpacity
                  onPress={()=>{
                    props.logoutUser()
                    navigate('Login')
                  }}
                >
                  <Icon name="logout-variant" size={26} style={{
                    marginRight:'7%'
                  }} />
                </TouchableOpacity>

    );
}
export default connect(null,mapDispatchToProps)(LogOut);
