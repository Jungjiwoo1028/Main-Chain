import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppDrawer from './App/navigations/Drawer';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {isOnIos} from './App/constants';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <AppDrawer />
      <StatusBar
        barStyle={isDarkMode && isOnIos ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </NavigationContainer>
  );
}

export default App;
