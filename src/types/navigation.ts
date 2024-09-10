// types/navigation.ts
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Dining: undefined;
  Reorder: undefined;
  Profile: undefined;
};

export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;
export type TabRouteProp = RouteProp<TabParamList, keyof TabParamList>;
