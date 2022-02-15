import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/appStyles';

interface CartScreenProps { }

export const CartScreen: React.FC<CartScreenProps> = ({ }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Cart Screen</Text>
    </View>
  );
};
