import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyOrdersScreen } from '../screens/MyOrdersScreen';
import { HomeScreen } from '../screens/HomeScreen';

interface IMyOrdersTabProps { }

const Stack = createStackNavigator();

export const MyOrdersTab: React.FC<IMyOrdersTabProps> = ({ }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
			<Stack.Screen name="Keşfet" component={HomeScreen} />
		</Stack.Navigator>
	);
};
