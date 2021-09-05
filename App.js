import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/StarMap';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Home" screenOptions ={{
        headerShown: false
      }}>
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen} />
        <Stack.Screen name = "DailyPic" component = {DailyPicScreen} />
        <Stack.Screen name = "StarMap" component = {StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;