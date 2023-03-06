import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/color/colors';
import {isTablet, scaleFontSize} from '../../constants';

const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.navy,
    width: '100%',
    height: '100%',
    flex: 1,
    padding: RFValue(27, height),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: RFValue(26, height),
  },

  buttonContainer: {
    shadowColor: '#222',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.9,
    shadowRadius: 7,
    borderRadius: 20,
    width: isTablet ? RFValue(155, height) : scaleFontSize(155),
    height: isTablet ? RFValue(155, height) : scaleFontSize(155),
    padding: RFValue(15, height),
    justifyContent: 'space-between',
  },

  buttonText: {
    color: COLORS.black,
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: isTablet ? RFValue(22, height) : scaleFontSize(22),
  },

  buttonImgSize: {width: '100%', height: '100%'},

  scanImage: {
    width: isTablet ? RFValue(90, height) : scaleFontSize(98),
    height: isTablet ? RFValue(76, height) : scaleFontSize(86),
  },

  contactImage: {
    width: isTablet ? RFValue(90, height) : scaleFontSize(100),
    height: isTablet ? RFValue(76, height) : scaleFontSize(78),
  },

  catalogueImge: {
    width: isTablet ? RFValue(90, height) : scaleFontSize(98),
    height: isTablet ? RFValue(76, height) : scaleFontSize(86),
  },
});
