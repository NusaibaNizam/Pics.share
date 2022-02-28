import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShareData from "../ShareDatas/ShareDatas";
import FindData from "../FindData/FindData";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab=createBottomTabNavigator()
const NavigatinTab=(props)=>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Find Data" 
            component={FindData}
            options={
                {
                    tabBarIcon:({color,size})=>(
                        <Icon name="file-find-outline" color={color} size={size} />
                    )
                }
            }
            />  

            <Tab.Screen 
            name="Share Data" 
            component={ShareData}
            options={
                {
                    tabBarIcon:({color,size})=>(
                        <Icon name="export-variant" color={color} size={size} />
                    )
                }
            }
            />
        </Tab.Navigator>
    )
}
export default NavigatinTab;