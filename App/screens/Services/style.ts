import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    gap: isTablet ? RFValue(100, height) : RFValue(56, height),
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: isTablet ? '75%' : '88%',
    borderColor: COLORS.borderLight,
    borderWidth: 1,
    backgroundColor: COLORS.background,
    shadowColor: '#222',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 7,
    borderRadius: isTablet ? 35 : 20,
  },

  buttonText: {
    marginVertical: isTablet ? RFValue(58, height) : RFValue(32, height),
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'Montserrat-Semibold',
    fontSize: isTablet ? RFValue(44, height) : scaleFontSize(30),
  },
});
