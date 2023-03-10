import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    marginVertical: RFValue(48, height),
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  homeImage: {
    flex: isTablet ? 0.5 : 0.5,
  },

  iconImage: {
    flex: isTablet ? 0.3 : 0.3,
  },

  textContainer: {
    width: isTablet ? '60%' : '90%',
    flex: 0.4,
    justifyContent: 'space-around',
    paddingHorizontal: RFValue(30, height),
    alignItems: 'center',
  },

  textWelcome: {
    textAlign: 'center',
    color: COLORS.grey,
    fontSize: isTablet ? RFValue(25, height) : scaleFontSize(16),
    fontFamily: 'Montserrat-Regular',
  },

  loginContainer: {
    justifyContent: 'center',
    height: isTablet ? RFValue(100, height) : RFValue(68, height),
    width: isTablet ? RFValue(400, height) : RFValue(270, height),
    backgroundColor: COLORS.background,
    borderRadius: isTablet ? 60 : 30,
    borderColor: COLORS.border,
    borderWidth: 1.5,
  },

  loginText: {
    alignItems: 'center',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: isTablet ? RFValue(32, height) : scaleFontSize(23),
    fontFamily: 'Montserrat-SemiBold',
  },
});
