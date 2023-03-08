import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {validateEmail, validatePw} from '../../constants';
import {DrawerScreenNames} from '../../navigations/types';
import style from './style';

type ParamList = {
  Buttons: {};
  Home: {};
};

const Login: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();
  const [email, setEmail] = useState<string>('');
  const [emailValidate, setEmailValidate] = useState<boolean>(true);
  const [pw, setPw] = useState<string>('');
  const [pwValidate, setPwValidate] = useState<boolean>(true);
  const height = Dimensions.get('window').height;

  return (
    <SafeAreaView style={style.container}>
      <Image
        source={require('../../../assets/images/login.png')}
        resizeMode="contain"
        style={style.loginImage}
      />
      <View style={style.loginContainer}>
        <View style={{width: '100%'}}>
          <View style={style.inputContainer}>
            <Text style={style.textInputLabel}>Email</Text>
            <TextInput
              onEndEditing={() => {
                if (validateEmail(email)) {
                  setEmailValidate(true);
                } else {
                  setEmailValidate(false);
                }
              }}
              placeholder="Email"
              placeholderTextColor={COLORS.grey}
              defaultValue={email}
              onChangeText={(email: string) => setEmail(email)}
              style={{
                ...style.textInputStyle,
                borderColor: emailValidate ? COLORS.purple : COLORS.pink,
              }}
            />
          </View>
          <View
            style={{
              ...style.inputContainer,
              marginTop: RFValue(27, height),
            }}>
            <Text style={style.textInputLabel}>Mot de passe</Text>
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Mot de passe"
              secureTextEntry={true}
              defaultValue={pw}
              onChangeText={(pw: string) => setPw(pw)}
              onEndEditing={() => {
                if (validatePw(pw)) {
                  setPwValidate(true);
                } else {
                  setPwValidate(false);
                }
              }}
              style={{
                borderColor: pwValidate ? COLORS.purple : COLORS.pink,
                ...style.textInputStyle,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(DrawerScreenNames.BUTTONS, {})}
          style={style.buttonContainer}>
          <Text style={style.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
