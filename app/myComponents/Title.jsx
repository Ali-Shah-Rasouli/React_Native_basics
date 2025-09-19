import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleComponent = ({ title, subtitle }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}> Ali Shah Rasouli</Text>
      <Text style={styles.subtitle}> React developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#080808ff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default TitleComponent;