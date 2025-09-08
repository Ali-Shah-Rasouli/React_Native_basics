import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
export default function Index(){
   return ( 
   <View style={Styles.container} > 

   <Image source={require('../assets/images/R.jpg')} style={Styles.avatar}/>


    <Text style={Styles.title1}> Welcome and Lets learn React-Native </Text>


    <View>
        <Text style={Styles.card}> Choose the lesson</Text>
    </View>
      <Link href="/lessons/session1" style={styles.link}>Session 1</Link>
      <Link href="/lessons/session2" style={styles.link}>Session 2</Link>
      <Link href="/lessons/session3" style={styles.link}>Session 3</Link>
      <Link href="/lessons/session4" style={styles.link}>Session 4</Link>


  </View>); 
   }



   const Styles = StyleSheet.create({ 
    container: {
      alignContent:'center',
      justifyContent:'top',
      flex:1,
      backgroundColor:'#fff',
   },
   title1:{
    marginTop:50,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
     marginBottom:20
   },
   card:{
    backgroundColor:'#ddd',
    padding:20,
    borderRadius:10,
    boxShadow:'4px 4px rgba(0,0,0,0.3)',
    alignSelf:'flex-start',
    marginLeft :10,
   },
    avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20
  },
  link: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  }

   });








// const Stack = createNativeStackNavigator();

//  Home Screen
// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainTitle}>Welcome to My App</Text>
//       <Text style={styles.subTitle}>Select a Session to Navigate :</Text>

//       <Link style={styles.button} onPress={() => navigation.navigate('Session1')}>
//         <Text style={styles.buttonText}>Session 1</Text>
//       </Link>

//       <Link style={styles.button} onPress={() => navigation.navigate('Session2')}>
//         <Text style={styles.buttonText}>Session 2</Text>
//       </Link>

//       <Link style={styles.button} onPress={() => navigation.navigate('Session3')}>
//         <Text style={styles.buttonText}>Session 3</Text>
//       </Link>

//       <Link style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={() => navigation.navigate('Profile')}>
//         <Text style={styles.buttonText}>Profile</Text>
//       </Link>
//     </View>
//   );


// //  Simple Session Screens
// function Session1() { return <View style={styles.page}><Text> Session 1</Text></View>; }
// function Session2() { return <View style={styles.page}><Text> Session 2</Text></View>; }
// function Session3() { return <View style={styles.page}><Text> Session 3</Text></View>; }

// //  Profile Screen
// // function Profile() {
// //   return (
// //     <View style={styles.page}>
// //       <ProfileCard />
// //     </View>
// //   );
// // }

// //  Main App
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Session1" component={Session1} />
//         <Stack.Screen name="Session2" component={Session2} />
//         <Stack.Screen name="Session3" component={Session3} />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// 🔹 Styles
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, alignItems: 'center', backgroundColor: '#f5f5f5' },
  mainTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  subTitle: { fontSize: 18, alignSelf: 'flex-start', marginLeft: 20, marginBottom: 10 },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, marginVertical: 8, width: 200, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  page: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});