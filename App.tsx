import React from 'react';
import { AppTabs } from './tabs/AppTabs';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};


export default App;
