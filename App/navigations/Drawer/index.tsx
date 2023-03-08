import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Buttons from '../../screens/Buttons';
import Home from '../../screens/Home';
import React from 'react';
import Login from '../../screens/Login';
import {COLORS} from '../../../assets/color/colors';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {DrawerScreenNames} from '../types';
import style from './style';

const AppDrawer = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const leftBack = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="left" color={COLORS.white} size={20} />
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator initialRouteName={DrawerScreenNames.HOME}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={DrawerScreenNames.HOME}
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Login}
        name={DrawerScreenNames.LOGIN}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: style.buttonTitle,
          title: '3 Buttons',
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerLeft: leftBack,
        }}
        component={Buttons}
        name={DrawerScreenNames.BUTTONS}
      />
    </Stack.Navigator>
  );
};
export default AppDrawer;
