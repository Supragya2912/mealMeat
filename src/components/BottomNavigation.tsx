import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DiningScreen from '../screens/DiningScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabParamList, TabRouteProp } from '../types/navigation';
import ProfileScreen from '../screens/ProfileScreen';
import ReorderScreen from '../screens/ReorderScreen';

const Tab = createBottomTabNavigator<TabParamList>();

type TabBarIconProps = {
    route: TabRouteProp;
    focused: boolean;
    size: number;
    color: string;
};

const getTabBarIcon = ({ route, focused, size, color }: TabBarIconProps) => {
    let iconName: string;

    switch (route.name) {
        case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'Dining':
            iconName = focused ? 'restaurant' : 'restaurant-outline';
            break;
        case 'Reorder':
            iconName = focused ? 'refresh-circle' : 'refresh-circle-outline';
            break;
        case 'Profile':
            iconName = focused ? 'person' : 'person-outline';
            break;
        default:
            iconName = 'ellipse-outline';
            break;
    }

    return <Icon name={iconName} size={size} color={color} />;
};

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size }) =>
                    getTabBarIcon({ route, focused, size, color }),
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#0e1111',
                    borderTopWidth: 2,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                  },
                  tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Dining"
                component={DiningScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Reorder"
                component={ReorderScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;
