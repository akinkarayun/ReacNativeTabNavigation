import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/appStyles';

interface HomeScreenProps { }

export const HomeScreen: React.FC<HomeScreenProps> = ({ }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Home Screen</Text>
    </View>
  );
};
