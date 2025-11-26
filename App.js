import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from './screens/FeedScreen';
import CameraScreen from './screens/CameraScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
