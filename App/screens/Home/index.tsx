import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {DrawerScreenNames} from '../../navigations/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import style from './style';

type ParamList = {
  Login: {};
};

const Home: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={{height: '100%', width: '100%'}}>
      <SafeAreaView style={style.container}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 0.6,
            marginTop: 56,
          }}>
          <Image
            resizeMode="contain"
            style={style.homeImage}
            source={require('../../../assets/images/home-icon.png')}
          />
          <Image
            resizeMode="contain"
            style={style.iconImage}
            source={require('../../../assets/images/logo.png')}
          />
        </View>

        <View style={style.textContainer}>
          <Text style={style.textWelcome}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto
            possimus, sapiente aspernatur dolor nostrum quia hic atque
            perferendis eum.
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(DrawerScreenNames.LOGIN, {})}
            style={style.loginContainer}>
            <Text style={style.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Home;
