import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../../assets/color/colors';
import LogoSvg from '../../components/Svgs/LogoSvg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DrawerScreenNames} from '../../navigations/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import style from './style';

type ParamList = {
  Login: {};
};

const Home: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/background-home.png')}
        style={style.imageBg}>
        <SafeAreaView style={style.container}>
          <LogoSvg style={style.logo} />
          <View style={style.textContainer}>
            <Text style={style.textWelcome}>Bienvenue!</Text>
            <Text style={style.textMain}>
              Nous sommes vraiment{'\n'}heureux de vous voir ici {''}
              <FontAwesome5 name="smile" size={20} color={COLORS.black} />
            </Text>
            <TouchableOpacity
              style={style.loginContainer}
              onPress={() => navigation.navigate(DrawerScreenNames.LOGIN, {})}>
              <Text style={style.loginText}>Connexion</Text>
              <AntDesign name="arrowright" size={25} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Home;
