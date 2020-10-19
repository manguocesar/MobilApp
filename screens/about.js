import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
     
      <View style={styles.sexyText}>
      <Text style={globalStyles.titleText}>Learning React Native</Text>
      <Text style={globalStyles.titleText}>About Screennnnn</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  sexyText: {
   
    width: '50%',
    height: '30%',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    
  },})