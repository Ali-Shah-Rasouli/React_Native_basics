import React from "react";
import { View, StyleSheet, Text} from 'react-native';
import MyAvatar from "./MyAvatar";
import Title from './Title';
import ChangeButton from './ChangeButton';

export default function MyCard(){
    return (
        <View style={styles.card}>
          <View> <MyAvatar /> </View>
          <View> <Title /> </View>
          <View> <ChangeButton /> </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
card : {
    width: 250,
    padding: 20,
    height:400,
    backgroundColor: '#f7f3f3ff',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
},

})