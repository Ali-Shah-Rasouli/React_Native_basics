import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View , Text, TouchableOpacity} from 'react-native';

export default function ChangeButton(){ 
    const [name, setName]= useState ('Ali shah Rasouli') 
    const [subtitle, setSubTitle]= useState ('React Native Devloper') 
    const [inputName, setInputName]= useState ('') 
    const [inputTitel, setInputTitle]= useState ('') 

    const handleChange= () => {
        if(inputName !== ""){
            setName(inputName);
        }
        if(inputTitel !==""){
            setSubTitle(inputTitel);
        }
    
    };
    return ( 
        
    <View> <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.titleText}>{subtitle}</Text>
            <TouchableOpacity onPress={handleChange}> <Text style={styles.btn}> Click to change</Text></TouchableOpacity> 
        <text> set new Card Info and click to change </text>
         <TextInput placeholder='Enter Name' value={inputName} onChangeText={setInputName} style={styles.input} /> 
            
         <TextInput placeholder='Enter title' value={inputTitel} onChangeText={setInputTitle} style={styles.input} /> 
               
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
       marginTop: 30,
       marginBottom: 20,
       alignContent: 'center',
        
    },
    input :{
        padding:5,
        borderWidth:1,
        margin:5,
        borderRadius:5,
    },
 nameText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
 },
 titleText: {
    textAlign:' center',

 }

})