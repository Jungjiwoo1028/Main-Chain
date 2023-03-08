import React, {FC} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {DrawerScreenNames} from '../../navigations/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import style from './style';

type ParamList = {
  Login: {};
};

const Home: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamList>>();

  return (
    <SafeAreaView style={style.container}>
      <Image
        source={require('../../../assets/images/home.png')}
        resizeMode="contain"
        style={style.homeImage}
      />
      <View style={style.textContainer}>
        <View>
          <Text style={style.textMain}>Manage Your {'\n'}Buttons</Text>
          <Text style={style.textWelcome}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto
            possimus, sapiente aspernatur dolor nostrum quia hic atque
            perferendis eum.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(DrawerScreenNames.LOGIN, {})}
          style={style.loginContainer}>
          <Text style={style.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
