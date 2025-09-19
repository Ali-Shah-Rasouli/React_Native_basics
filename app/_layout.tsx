import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import MyCard from './myComponents/MyCard'

export default function App(){
  return (
    <View style={Styles.container}>
<Text style={Styles.MyText}> The First React Native Home Work </Text>
    <View> < MyCard /></View>
   
    </View>
  )
}

const Styles=StyleSheet.create({
container: {
  flex : 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#c4c1c1ff',
},
MyText: {
  fontWeight: 'bold',
  fontSize: 16,
}




}
 
)