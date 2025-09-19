import React from "react";
import { View, StyleSheet, Text} from 'react-native';
import MyAvatar from "./MyAvatar";
import Title from './Title';
import ChangeButton from './ChangeButton';

export default function MyCard(){
    return (
        <View style={styles.card}>
          <View> <MyAvatar /> </View>
           <ChangeButton />
                
        </View>
    )
}

const styles = StyleSheet.create({
card : {
    width: 300,
    padding: 20,
    height:400,
    backgroundColor: '#f7f3f3ff',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
},

})