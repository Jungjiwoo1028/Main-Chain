import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize, smallScreen} from '../../constants';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  imageBg: {width: '100%', height: '100%'},

  container: {
    margin: RFValue(28, height),
    justifyContent: 'space-between',
    flex: 1,
  },

  logo: {
    marginTop: isTablet ? RFValue(14, height) : scaleFontSize(12),
  },

  loginContainer: {
    backgroundColor: COLORS.background,
    height: '70%',
    borderTopLeftRadius: 130,
    borderBottomLeftRadius: 130,
    alignItems: 'flex-start',
    paddingHorizontal: RFValue(48, height),
  },

  textLogin: {
    marginTop: smallScreen ? RFValue(48, height) : RFValue(68, height),
    color: COLORS.black,
    fontSize: isTablet ? RFValue(40, height) : scaleFontSize(38),
    fontFamily: 'Montserrat-ExtraBold',
    textTransform: 'uppercase',
    marginBottom: smallScreen ? RFValue(30, height) : RFValue(44, height),
  },

  emailContainer: {
    width: '100%',
    height: RFValue(74, height),
  },

  textInputLabel: {
    color: COLORS.black,
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: isTablet ? RFValue(21, height) : scaleFontSize(19),
  },

  textInput: {
    color: COLORS.black,
    height: '100%',
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1.5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: isTablet ? RFValue(18, height) : scaleFontSize(16),
    zIndex: 10,
    width: '100%',
    flex: 1,
  },

  pwContainer: {
    width: '100%',
    height: RFValue(74, height),
    marginTop: RFValue(44, height),
  },

  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    marginLeft: RFValue(20, height),
    flex: 1,
  },

  buttonBg: {
    width: RFValue(118, height),
    height: RFValue(72, height),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(36, height),
  },

  textNext: {
    marginBottom: 6,
    color: COLORS.white,
    fontSize: isTablet ? RFValue(28, height) : scaleFontSize(26),
    fontFamily: 'Montserrat-ExtraBold',
    letterSpacing: 1.5,
  },
});
