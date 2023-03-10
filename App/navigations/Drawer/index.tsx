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
import Saas from '../../screens/Saas';
import Services from '../../screens/Services';

const AppDrawer = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const leftBack = () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        height: 44,
        width: 44,
        justifyContent: 'center',
      }}>
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
          headerTransparent: true,
          headerTitleStyle: style.buttonTitle,
          title: 'Login',
          headerStyle: {
            backgroundColor: COLORS.header,
          },
          headerLeft: leftBack,
        }}
        component={Login}
        name={DrawerScreenNames.LOGIN}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitleStyle: style.buttonTitle,
          title: '3 Buttons',
          headerStyle: {
            backgroundColor: COLORS.header,
          },
          headerLeft: leftBack,
        }}
        component={Buttons}
        name={DrawerScreenNames.BUTTONS}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitleStyle: style.buttonTitle,
          title: 'MainChain SAAS',
          headerStyle: {
            backgroundColor: COLORS.header,
          },
          headerLeft: leftBack,
        }}
        component={Saas}
        name={DrawerScreenNames.SAAS}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitleStyle: style.buttonTitle,
          title: 'Services Request',
          headerStyle: {
            backgroundColor: COLORS.header,
          },
          headerLeft: leftBack,
        }}
        component={Services}
        name={DrawerScreenNames.SERVICES}
      />
    </Stack.Navigator>
  );
};
export default AppDrawer;
