import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.background,
  },

  homeImage: {
    width: isTablet ? '50%' : '80%',
    height: '50%',
    flex: 0.45,
  },

  textContainer: {
    flex: 0.55,
    justifyContent: 'space-around',
    paddingHorizontal: RFValue(30, height),
    alignItems: 'center',
  },

  textWelcome: {
    textAlign: 'center',
    marginTop: RFValue(18, height),
    color: COLORS.grey,
    fontSize: isTablet ? RFValue(17, height) : scaleFontSize(15),
    fontFamily: 'Poppins-Regular',
  },

  textMain: {
    alignItems: 'center',
    letterSpacing: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: isTablet ? RFValue(34, height) : scaleFontSize(32),
    fontFamily: 'Poppins-Semibold',
  },

  loginContainer: {
    justifyContent: 'center',
    height: RFValue(68, height),
    width: RFValue(270, height),
    backgroundColor: COLORS.deepPurple,
    borderRadius: 30,
    borderColor: COLORS.purple,
    borderWidth: 1.5,
  },

  loginText: {
    alignItems: 'center',
    letterSpacing: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: isTablet ? RFValue(17, height) : scaleFontSize(23),
    fontFamily: 'Poppins-Medium',
  },
});
