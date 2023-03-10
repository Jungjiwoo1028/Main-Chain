import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import style from './style';

const height = Dimensions.get('window').height;

const Saas: FC = () => {
  const SAAS_DATA = [
    {
      id: '1',
      title: `MainChain ${'\n'}SAAS`,
    },
    {
      id: '2',
      title: 'Catalog Partner',
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={{height: '100%', width: '100%'}}>
      <SafeAreaView style={style.container}>
        {SAAS_DATA.map((item, i) => (
          <TouchableOpacity
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
export default Saas;
