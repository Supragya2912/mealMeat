import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './src/components/BottomNavigation';
import LoginScreen from './src/screens/LoginScreen';
import Register from './src/screens/Register';
import AddAddressScreen from './src/screens/AddAddressScreen';
import {RootStackParamList} from './src/types/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomNavigation"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
          <Stack.Screen name="RestaurantDetailsScreen" component={RestaurantDetailsScreen} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};


export default App;
