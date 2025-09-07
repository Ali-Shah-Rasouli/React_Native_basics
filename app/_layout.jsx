
 import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
 
 
 const RootLayout =() => { 
    return ( 
    <Stack screenOptions={{ headerStyle: {backgroundColor: '#ddd'}, headerTintColor: '$333', }} > 
      <Stack.Screen name="index" options={{ title: 'Home' }}  style={StyleSheet.container}/> 
      <Stack.Screen name="session1" options={{ title: 'Lesson 1' }} /> 
      <Stack.Screen name="session2" options={{ title: 'Lesson 2' }} />   
    </Stack>
    )
    } 

    export default RootLayout

    const style = StyleSheet.create({ 

    })