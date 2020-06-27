import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Initial from '../screens/Initial';
import Repos from '../screens/Repos';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Repos" component={Repos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;