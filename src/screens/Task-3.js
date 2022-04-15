/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

function Task3({navigation}) {
  const [value, setValue] = useState(null);
  return (
    <View
      style={{
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text>sada</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          color: 'red',
          justifyContent: 'flex-end',
        }}>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            margin: 8,
            padding: 5,
            color: 'black',
            borderRadius: 10,
            width: '70%',
          }}
          placeholder="isi text ini"
          placeholderTextColor="gray"
          value={value}
          onChangeText={setValue}
          // autoFocus={true}
        />
        <View style={{width: '26%', marginVertical: 8, height: 45}}>
          <Button
            title="Send"
            color="navy"
            onPress={() =>
              navigation.navigate('Task3B', {
                value: value,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

export default Task3;
