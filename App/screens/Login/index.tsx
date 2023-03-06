import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {FC, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LogoSvg from '../../components/Svgs/LogoSvg';
import {DrawerScreenNames} from '../../navigations/types';
import style from './style';

type ParamList = {
  Buttons: {};
  Home: {};
};

const Login: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const emailRef = useRef(null);
  const [email, setEmail] = useState<string>('');
  const pwRef = useRef(null);
  const [pw, setPw] = useState<string>('');

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/background-login.png')}
        style={style.imageBg}>
        <SafeAreaView style={style.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate(DrawerScreenNames.HOME, {})}>
            <LogoSvg style={style.logo} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={style.loginContainer}>
          <Text style={style.textLogin}>content de {'\n'}vous revoir</Text>
          <View style={style.emailContainer}>
            <Text style={style.textInputLabel}>Email</Text>
            <TextInput
              placeholder="Email"
              ref={emailRef}
              defaultValue={email}
              onChangeText={(email: string) => setEmail(email)}
              style={style.textInput}
            />
          </View>
          <View style={style.pwContainer}>
            <Text style={style.textInputLabel}>Mot de passe</Text>
            <TextInput
              placeholder="Mot de passe"
              ref={pwRef}
              secureTextEntry={true}
              defaultValue={pw}
              onChangeText={(pw: string) => setPw(pw)}
              style={style.textInput}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(DrawerScreenNames.BUTTONS, {})}
            style={style.buttonContainer}>
            <ImageBackground
              style={style.buttonBg}
              source={require('../../../assets/images/login-button.png')}>
              <Text style={style.textNext}>Next</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;
