import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Restaurant } from '../interface/RestaurantDetail';

export type TabParamList = {
  HomeScreen: undefined;
  Dining: undefined;
  Reorder: undefined;
  Profile: undefined;
};


export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  AddAddressScreen: undefined;
  RestaurantDetailsScreen: {restaurant: Restaurant};
  BottomNavigation: NavigatorScreenParams<TabParamList>;
};

export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;
export type TabRouteProp = RouteProp<TabParamList, keyof TabParamList>;

export type StackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type StackRouteProp = RouteProp<RootStackParamList, keyof RootStackParamList>;
