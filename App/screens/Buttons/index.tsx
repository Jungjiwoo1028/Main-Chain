import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {DrawerScreenNames} from '../../navigations/types';
import style from './style';

const height = Dimensions.get('window').height;

const Buttons: FC = ({navigation}: any) => {
  const BUTTON_DATA = [
    {
      id: '1',
      title: `MainChain ${'\n'}SAAS`,
      name: DrawerScreenNames.SAAS,
      test: 'Saas',
    },
    {
      id: '2',
      title: 'Scan',
      name: DrawerScreenNames.SCAN,
      test: 'Scan',
    },
    {
      id: '3',
      title: `Services ${'\n'}Request`,
      name: DrawerScreenNames.SERVICES,
      test: 'Services',
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={{height: '100%', width: '100%'}}>
      <SafeAreaView style={style.container}>
        {BUTTON_DATA.map((item, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.name)}
            style={{
              ...style.buttonContainer,
              marginTop: i === 0 ? RFValue(40, height) : undefined,
            }}
            key={i + item.title}>
            <Text style={style.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Buttons;
