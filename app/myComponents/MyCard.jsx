import React from "react";
import { View, StyleSheet, Image} from 'react-native';
import MyAvatar from "./MyAvatar";

export default function MyCard(){
    return (
        <View style={styles.card}>
          <View>
           <MyAvatar />
          </View>

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