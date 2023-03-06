import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import style from './style';

const height = Dimensions.get('window').height;
const Buttons: FC = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={{...style.buttonContainer, backgroundColor: COLORS.lightGreen}}>
        <View style={style.scanImage}>
          <Image
            resizeMode="stretch"
            source={require('../../../assets/images/scan-image.png')}
            style={style.buttonImgSize}
          />
        </View>
        <Text style={style.buttonText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...style.buttonContainer, backgroundColor: COLORS.orange}}>
        <View style={style.contactImage}>
          <Image
            resizeMode="stretch"
            source={require('../../../assets/images/devis-image.png')}
            style={style.buttonImgSize}
          />
        </View>
        <Text
          style={{
            ...style.buttonText,
            lineHeight: RFValue(23, height),
          }}>
          Contact{'\n'}devis
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...style.buttonContainer, backgroundColor: COLORS.background}}>
        <View style={style.catalogueImge}>
          <Image
            resizeMode="stretch"
            source={require('../../../assets/images/catalogue-image.png')}
            style={style.buttonImgSize}
          />
        </View>
        <Text style={style.buttonText}>Catalogue</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Buttons;
