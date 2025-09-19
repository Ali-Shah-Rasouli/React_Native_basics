import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View , Text} from 'react-native';

export default function ChangeButton(){ 
    const [name, setName]= useState ('Ali shah Rasouli') 
    const [subtitle, setTitle]= useState ('React Native Devloper') 
    return ( 
        
    <View><Text>{name}</Text>
         <TextInput placeholder='enter name' onChangeText={(text)=> setName(text)} style={styles.input} /> 
            <Text>{subtitle}</Text>
         <TextInput placeholder='enter title' onChangeText={(subtitle)=> setName(subtitle)} style={styles.input} /> 
    <Button title='click to change' onPress={()=>console.log(name)} /> 
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
       marginTop: 20,
    },
    input :{
        padding:5,
        borderWidth:1,
        margin:5,

    }
})