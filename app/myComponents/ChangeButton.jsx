import React from "react";
import {View, Tex, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button(){
    return (
        <View>
            <TouchableOpacity style={styles.btn}> Change Sub Title </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    btn :{
        backgroundColor : '#007aff',
        paddingVertical: 10,
        paddingHorizontal: 25,
       borderRadius: 8,
       color: '#fff',
       fontWeight: 'bold',
    }
})