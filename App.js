import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import Task1 from './src/screens/task-1';
import Task2 from './src/screens/Task-2';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Task1" component={Task1} />
        <Stack.Screen name="Task2" component={Task2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
