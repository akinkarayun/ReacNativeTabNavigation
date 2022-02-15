import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles/appStyles';
import { useNavigation } from '@react-navigation/native';


interface MyOrdersScreenProps { }

export const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({ }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.screenContainer]}>
      <Pressable onPress={() => {
        navigation.navigate('Keşfet' as any)
      }}>
        <Text style={styles.screenText}>Go To Home Screen</Text>
      </Pressable>
      <Text style={styles.screenText}>My OrdersScreen</Text>
    </View>
  );
};
