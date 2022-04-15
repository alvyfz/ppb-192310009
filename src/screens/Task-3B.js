import React from 'react';
import {Text, View} from 'react-native';

export default function Task3B({route}) {
  const {value} = route.params;
  return (
    <View>
      <Text
        style={{
          color: 'gray',
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: 40,
          width: '100%',
        }}>
        {value}
      </Text>
    </View>
  );
}
