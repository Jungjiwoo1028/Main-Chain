import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    flex: 1,
  },

  loginImage: {
    width: isTablet ? '50%' : '80%',
    height: '40%',
  },

  loginContainer: {
    flex: 1,
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
    paddingLeft: RFValue(12, height),
    borderRadius: 15,
    borderWidth: 1.5,
    height: RFValue(66, height),
    backgroundColor: COLORS.deepPurple,
  },

  buttonContainer: {
    marginBottom: RFValue(38, height),
    justifyContent: 'center',
    height: RFValue(68, height),
    width: RFValue(200, height),
    backgroundColor: COLORS.purple,
    borderRadius: 30,
    borderColor: COLORS.purple,
    borderWidth: 1.5,
  },

  textLogin: {
    alignItems: 'center',
    letterSpacing: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: isTablet ? RFValue(25, height) : scaleFontSize(23),
    fontFamily: 'Poppins-Medium',
  },
});
