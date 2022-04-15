/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default function HomeScreen({navigation}) {
  const [count, setCount] = useState(0);
  const showToast = () => {
    ToastAndroid.show('Hello toast!', ToastAndroid.SHORT);
  };
  const handleCount = () => {
    setCount(v => v + 1);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={{backgroundColor: '#007667', height: '20%'}}>
        <TouchableOpacity
          onPress={showToast}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FAFDD6',
              fontSize: 30,
              fontWeight: '500',
              fontFamily: 'Raleway',
            }}>
            TOAST
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          height: '65%',
        }}>
        <Text style={{color: '#007667', fontWeight: '600', fontSize: 100}}>
          {count}
        </Text>
      </View>
      <View style={{backgroundColor: '#007667', height: '15%'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleCount}>
          <Text
            style={{
              color: '#FAFDD6',
              fontSize: 30,
              fontWeight: '500',
              fontFamily: 'Raleway',
            }}>
            COUNT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#A2B38B',
    fontFamily: 'Roboto',
  },
  containerBack: {
    height: '5%',
    backgroundColor: '#007667',
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: '#FAFDD6',
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Raleway',
  },
  containerText: {
    padding: 20,
  },
});
