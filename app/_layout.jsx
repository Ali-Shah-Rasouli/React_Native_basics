import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#3076c5ff' },
          headerTintColor: '#fff',  // now both back arrow and title will be white
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="session1" options={{ title: 'Lesson 1', headerBackVisible: false }} />
        <Stack.Screen name="session2" options={{ title: 'Lesson 2', headerBackVisible: false }} />
        <Stack.Screen name="session3" options={{ title: 'Lesson 3', headerBackVisible: false }} />
        <Stack.Screen name="session4" options={{ title: 'Lesson 4', headerBackVisible: false }} />
      </Stack>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
