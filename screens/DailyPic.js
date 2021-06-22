import React, { Component } from 'react';
import { Text,View } from 'react-native';

export default class DailyPicScreen extends Component{
    render(){
        return(
            <View
               style = {{
                   flex: 1,
                   justifyContent: "center",
                   alignItmes: "center"
               }}>
               <Text>DailyPic Screen</Text>
            </View>
        )
    }
}