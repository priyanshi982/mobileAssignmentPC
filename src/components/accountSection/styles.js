import { StyleSheet } from 'react-native';
import {
  GREY_BLACK,
  PURPLE_TEXT_COLOR,
  WHITE_25,
  WHITE_40,
  WHITE_75,
} from '../../helper/constants';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GREY_BLACK,
    marginTop: 20,
  },
  headingStyle: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'SF-Medium',
  },
  headingConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  customizeStyle: {
    color: PURPLE_TEXT_COLOR,
    fontSize: 12,
    fontFamily: 'SF-Medium',
    textDecorationLine: 'underline',
  },
  subheadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerstyle: {
    marginTop: 4,
    marginLeft: 2,
  },
  accountContainer: {
    height: 94,
    borderWidth: 1,
    borderColor: WHITE_25,
    borderRadius: 15,
    marginHorizontal: 25,
    marginTop: 16,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accHeadingStyle: {
    fontSize: 16,
    fontFamily: 'SF-Medium',
    color: WHITE_75,
    fontWeight: '500',
    marginBottom: 2,
  },
  accSubHeadingStyle: {
    fontSize: 12,
    fontFamily: 'SF-Medium',
    color: WHITE_40,
    fontWeight: '500',
  },
  newAccStyle: {
    color: PURPLE_TEXT_COLOR,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
    marginTop: 12,
  },
});

export default styles;
