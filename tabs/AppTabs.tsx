import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import constant from '../styles/constant';
import { fontPixel } from '../styles/responsive';
import { HomeTab } from './HomeTab';
import { CategoryTab } from './CategoriesTab';
import { MyOrdersTab } from './MyOrdersTab';
import { CartTab } from './CartTab';

interface IAppTabsProps { }

const Tab = createBottomTabNavigator();

export const AppTabs: React.FC<IAppTabsProps> = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home-outline' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Kategoriler') {
            iconName = focused ? 'search-outline' : 'search-outline';
            return <Ionicons style={{ transform: [{ rotate: "90deg" }] }} name={iconName} size={size} color={color} />;
          } else if (route.name === 'Sepetim') {
            iconName = focused ? 'cart-outline' : 'cart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Siparişlerim') {
            iconName = focused ? 'inbox' : 'inbox';
            return <AntDesign style={{ fontWeight: '100' }} name={iconName} size={size} color={color} />;
          } else {
            iconName = '';
          }
        },
        tabBarActiveTintColor: constant.colorTertiary,
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen

        options={{
          headerShown: false,
        }}
        name="HomeTab"
        component={HomeTab}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Kategoriler"
        component={CategoryTab}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}

        name="Siparişlerim"
        component={MyOrdersTab}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarBadgeStyle: { backgroundColor: constant.colorTertiary, color: constant.colorSurface, fontSize: fontPixel(14) },
        }}
        name="Sepetim"
        component={CartTab}
      />
    </Tab.Navigator>
  );
};
