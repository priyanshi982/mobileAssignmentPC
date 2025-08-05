import { StyleSheet, Dimensions } from 'react-native';
import {
  GREY_BLACK,
  PURPLE_TEXT_COLOR,
  TRANSPARENT_PURPLE,
} from '../../helper/constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GREY_BLACK,
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
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: TRANSPARENT_PURPLE,
    height: 62,
    width: 62,
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  txtStyle: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'SF-Medium',
    marginTop: 8,
  },
  flatList: {
    marginTop: 20,
    marginLeft: 12,
    width: width - 24,
    overflow: 'visible',
  },
  flatListContent: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
});

export default styles;
