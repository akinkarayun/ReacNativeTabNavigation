import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import {
	createStackNavigator,
} from '@react-navigation/stack';


interface IHomeTabProps { }

const Stack = createStackNavigator();
export const HomeTab: React.FC<IHomeTabProps> = () => {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerShown: false,
				gestureEnabled: true
			})}>
			<Stack.Screen name="Keşfet" component={HomeScreen} />
		</Stack.Navigator>
	);
};
