import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import Task1 from './src/screens/task-1';
import Task2 from './src/screens/Task-2';
import Task3 from './src/screens/Task-3';
import Task3B from './src/screens/Task-3B';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
            headerStyle: {
              backgroundColor: '#A2B38B',
            },
            headerTintColor: '#FAFDD6',
          }}
        />
        <Stack.Screen
          name="Task1"
          component={Task1}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#007667',
            },
            headerTintColor: '#FAFDD6',
          }}
        />
        <Stack.Screen
          name="Task2"
          component={Task2}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'navy',
            },
            headerTintColor: '#FAFDD6',
          }}
        />
        <Stack.Screen
          name="Task3"
          component={Task3}
          options={{
            headerTitle: 'Page 1',
            headerStyle: {
              backgroundColor: 'navy',
            },
            headerTintColor: '#FAFDD6',
          }}
        />
        <Stack.Screen
          name="Task3B"
          component={Task3B}
          options={{
            headerTitle: 'Page 2',
            headerStyle: {
              backgroundColor: 'navy',
            },
            headerTintColor: '#FAFDD6',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
