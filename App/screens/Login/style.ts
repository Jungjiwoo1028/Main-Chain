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
    // backgroundColor: COLORS.background,
    flex: 1,
  },

  loginImage: {
    marginTop: isTablet ? RFValue(62, height) : RFValue(48, height),
    // backgroundColor: 'blue',
    flex: isTablet ? 0.3 : 0.3,
  },

  loginContainer: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputContainer: {
    paddingHorizontal: RFValue(46, height),
    width: '100%',
  },

  textInputLabel: {
    marginBottom: RFValue(10, height),
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
    fontSize: isTablet ? RFValue(21, height) : scaleFontSize(19),
  },

  textInputStyle: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontSize: isTablet ? RFValue(19, height) : scaleFontSize(17),
    paddingLeft: RFValue(20, height),
    borderRadius: isTablet ? 20 : 15,
    borderWidth: 1.5,
    height: isTablet ? RFValue(74, height) : RFValue(66, height),
    backgroundColor: COLORS.background,
  },

  buttonContainer: {
    marginBottom: 30,
    justifyContent: 'center',
    height: isTablet ? RFValue(100, height) : RFValue(68, height),
    width: isTablet ? RFValue(400, height) : RFValue(270, height),
    backgroundColor: COLORS.background,
    borderRadius: isTablet ? 60 : 30,
    borderColor: COLORS.border,
    borderWidth: 1.5,
  },

  textLogin: {
    alignItems: 'center',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: isTablet ? RFValue(32, height) : scaleFontSize(23),
    fontFamily: 'Montserrat-SemiBold',
  },
});
