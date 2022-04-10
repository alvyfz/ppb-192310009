/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#A2B38B', flex: 1}}>
      <View style={{margin: 20}}>
        <Text
          style={{
            color: '#FAFDD6',
            fontWeight: '500',
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'Raleway',
          }}>
          Halo, Ini adalah tugas dari Muhammad Alvy Eka Fauzi (192310009)
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: '80%',
          marginHorizontal: '10%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAFDD6',
          margin: 5,
        }}
        onPress={() => navigation.navigate('Task1')}>
        <Text style={{color: '#A2B38B', fontSize: 16}}>Task 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          marginHorizontal: '10%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAFDD6',
          margin: 5,
        }}
        onPress={() => navigation.navigate('Task2')}>
        <Text style={{color: '#A2B38B', fontSize: 16}}>Task 2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
