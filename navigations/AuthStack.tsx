import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../constants';
import Login from '../screens/Login';
import Server from '../screens/Server';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary400 },
        headerTintColor: COLORS.white,
        contentStyle: { backgroundColor: COLORS.secondary100 },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="Server"
        component={Server}
        options={{ title: 'Add your organisation URL' }}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
