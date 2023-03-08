import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  buttonTitle: {
    color: COLORS.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: isTablet ? RFValue(21, height) : scaleFontSize(19),
  },
});
