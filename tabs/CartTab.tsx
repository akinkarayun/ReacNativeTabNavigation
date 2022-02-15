import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CartScreen } from '../screens/CartScreen';

interface ICartTabProps { }

const Stack = createStackNavigator();

export const CartTab: React.FC<ICartTabProps> = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="CartScreen" component={CartScreen} />
		</Stack.Navigator>
	);
};
