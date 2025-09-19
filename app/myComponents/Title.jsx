import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChangeButton from './ChangeButton';

const TitleComponent = ({ title, subtitle }) => {
  return (
    <View style={styles.titleContainer}>
      {/* <Text style={styles.title}> {title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text> */}
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