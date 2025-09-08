import { StyleSheet, Text, View } from 'react-native';

export default function Lesson4(){
   return ( 
   <View style={Styles.container2} > 
    <Text style={Styles.title1}> Introduction to Image Component </Text>
     <Text>
        React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
     </Text>
     <Text>
        React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
     </Text>
     <Text>
        React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
     </Text>
    
    
    
   
  </View>); 
   }

   const Styles = StyleSheet.create({ 
    container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent:'justify',
    alignItems:'flex-start'
  },
  title1:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

   });