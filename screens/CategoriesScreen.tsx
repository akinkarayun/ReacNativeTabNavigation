import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../styles/appStyles'
interface CategoriesScreenProps { }

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Categories Screen</Text>
    </View>
  );
}