import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    padding: RFValue(27, height),
    gap: RFValue(26, height),
  },

  buttonContainer: {
    justifyContent: 'center',
    width: '94%',
    backgroundColor: COLORS.grey,
    shadowColor: '#222',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 7,
    borderRadius: 20,
    height: isTablet ? RFValue(130, height) : scaleFontSize(120),
  },

  buttonText: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'Poppins-Semibold',
    fontSize: isTablet ? RFValue(34, height) : scaleFontSize(32),
  },
});
