import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './src/screens/LaunchScreen';
import HomeScreen from './src/screens/HomeScreen';
import Calculator from './src/screens/CalculatorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch" headerMode="">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={Calculator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;