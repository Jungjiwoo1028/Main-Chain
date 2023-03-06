import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
  },

  container: {
    margin: RFValue(28, height),
    flex: 1,
  },

  logo: {
    marginTop: isTablet ? RFValue(14, height) : scaleFontSize(12),
  },

  textContainer: {
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
    bottom: '8%',
  },

  textWelcome: {
    color: COLORS.black,
    fontSize: isTablet ? RFValue(56, height) : scaleFontSize(42),
    fontFamily: 'Montserrat-ExtraBold',
    marginBottom: RFValue(2, height),
    letterSpacing: 0.5,
  },

  textMain: {
    color: COLORS.black,
    fontSize: isTablet ? RFValue(26, height) : scaleFontSize(20),
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.3,
  },

  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RFValue(24, height),
  },

  loginText: {
    color: COLORS.black,
    fontSize: isTablet ? RFValue(30, height) : scaleFontSize(27),
    fontFamily: 'Montserrat-ExtraBold',
    marginRight: 5,
  },
});
