import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { CategoriesScreen } from '../screens/CategoriesScreen';


interface ICategoryTabProps { }

const Stack = createStackNavigator();
export const CategoryTab: React.FC<ICategoryTabProps> = () => {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerShown: false,
				gestureEnabled: true,
			})}
		>
			<Stack.Screen name="Categories" component={CategoriesScreen} />
		</Stack.Navigator>
	);
};
